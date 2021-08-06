from flask import Flask, url_for, redirect, session
from authlib.integrations.flask_client import OAuth
import logging

from flask.helpers import make_response

application = Flask(__name__)
application.config.from_pyfile('settings.py')
application.secret_key = f'{application.config.get("FLASK_SECRET")}'

oauth = OAuth(application)
google = oauth.register(
    name='google',
    client_id=f'{application.config.get("FLASK_CLIENTID")}',
    client_secret=f'{application.config.get("FLASK_CLIENTSECRET")}',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    access_token_params=None,
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    authorize_params=None,
    api_base_url='https://www.googleapis.com/oauth2/v1/',
    userinfo_endpoint='https://openidconnect.googleapis.com/v1/userinfo',  # This is only needed if using openId to fetch user info
    client_kwargs={'scope': 'openid email profile'},
)


@application.route('/')
# @login_required for routes that need protection, so you must be logged in
def hello_world():
    email = dict(session).get('email', None)
    return f'Email in as {email} and  {application.config.get("FLASK_CLIENTID")}!'


@application.route('/login')
def login():
    google = oauth.create_client('google')
    redirect_uri = url_for('authorize', _external=True)
    return google.authorize_redirect(redirect_uri)


@application.route('/authorize', methods=['POST', 'GET'])
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


@application.route('/test')
def test():
    return redirect("http://localhost:3000")


@application.route('/logout')
def logout():
    for key in list(session.keys()):
        session.pop(key)
    redirect_uri = url_for('test', _external=True)
    return redirect(redirect_uri)
