from flask import Flask, url_for, redirect, session
from authlib.integrations.flask_client import OAuth
import logging

from flask.helpers import make_response

app = Flask(__name__)
app.config.from_pyfile('settings.py')
app.secret_key = "randomsecret-0"

oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id="842117041606-br1r0osugcosh00ed132mhi429r14grv.apps.googleusercontent.com",
    client_secret="ZwKkbEPs06MqkJ0RayKzZWGO",
    access_token_url='https://accounts.google.com/o/oauth2/token',
    access_token_params=None,
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    authorize_params=None,
    api_base_url='https://www.googleapis.com/oauth2/v1/',
    userinfo_endpoint='https://openidconnect.googleapis.com/v1/userinfo',  # This is only needed if using openId to fetch user info
    client_kwargs={'scope': 'openid email profile'},
)


@app.route('/')
# @login_required for routes that need protection, so you must be logged in
def hello_world():
    email = dict(session).get('email', None)
    return f'Email in as {email} and {app.config.get("FLASK_SECRET")} and {app.config.get("FLASK_CLIENTSECRET")} and  {app.config.get("FLASK_CLIENTID")}!'


@app.route('/login')
def login():
    google = oauth.create_client('google')
    redirect_uri = url_for('authorize', _external=True)
    return google.authorize_redirect(redirect_uri)


@app.route('/authorize', methods=['POST', 'GET'])
def authorize():
    google = oauth.create_client('google')
    token = google.authorize_access_token()
    resp = google.get('userinfo')
    # resp.raise_for_status()
    user_info = resp.json()
    # do something with the token and profile
    # user = oauth.google.userinfo()  # uses openid endpoint to fetch user info
    session['email']=user_info['email']
    redirect_uri = url_for('test', _external=True)
    re = make_response(redirect(redirect_uri))
    re.set_cookie('user', user_info["name"])
    return re;


@app.route('/test')
def test():
    return redirect("http://localhost:3000")


@app.route('/logout')
def logout():
    for key in list(session.keys()):
        session.pop(key)
    redirect_uri = url_for('test', _external=True)
    return redirect(redirect_uri)
