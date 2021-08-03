from flask import Flask, url_for, redirect, session
from authlib.integrations.flask_client import OAuth

app = Flask(__name__)
app.config.from_pyfile('settings.py')
app.secret_key ={app.config.get("FLASK_SECRET")}

oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id={app.config.get("FLASK_client_id")},
    client_secret={app.config.get("FLASK_client_secret")},
    access_token_url='https://accounts.google.com/o/oauth2/token',
    access_token_params=None,
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    authorize_params=None,
    api_base_url='https://www.googleapis.com/oauth2/v1/',
    userinfo_endpoint='',  # This is only needed if using openId to fetch user info
    client_kwargs={'scope': 'openid email profile'},
)

@app.route('/')
# @login_required for routes that need protection, so you must be logged in
def hello_world():
    email = dict(session).get('email', None)
    #return redirect("http://localhost:3000")
    #return redirect(url_for('test'))
    return f'Hello, you are logge in as {email} and {app.config.get("FLASK_SECRET")}!'

@app.route('/login')
def login():
    google = oauth.create_client('google')
    redirect_uri = url_for('authorize', _external=True)
    return google.authorize_redirect(redirect_uri)

@app.route('/authorize')
def authorize():
    google = oauth.create_client('google')
    token = google.authorize_access_token()
    resp = google.get('userinfo')
    # resp.raise_for_status()
    user_info = resp.json()
    # do something with the token and profile
    #user = oauth.google.userinfo()  # uses openid endpoint to fetch user info
    session['email']=user_info['email']
    redirect_uri = url_for('test', _external=True)
    return redirect(redirect_uri)

@app.route('/test')
def test():
    return redirect("http://localhost:3000")

@app.route('/logout')
def logout():
    for key in list(session.keys()):
        session.pop(key)
    return redirect('/')