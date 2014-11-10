from functools import wraps
from flask import request, Response

def check_auth(username, password):
	"""
	Checks if a username and password are valid
	"""
	return username == 'davidjhlee' and password == 'r3dFox@828'

def authenticate():
	"""
	Sends a 401 response that enables basic authentication
	"""
	return Response(
		'Could not verify your access level for that URL.\n'
		'You have to login with proper credentials', 401,
		{'WWW-Authenticate': 'Basic realm = "Login Required"'})

def requires_auth(f):
	@wraps(f)

	def decorated(*args, **kwargs):
		auth = request.authorization
		if not auth or not check_auth(auth.username, auth.password):
			return authenticate()
		return f(*args, **kwargs)

	return decorated