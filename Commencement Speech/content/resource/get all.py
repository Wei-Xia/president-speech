import hmac
from hashlib import sha1
from time import time

videos = ["SousChefJourney1.m4v",
"SousChefJourney10.m4v",
"SousChefJourney2.m4v",
"SousChefJourney3.m4v",
"SousChefJourney4.m4v",
"SousChefJourney5.m4v",
"SousChefJourney6.m4v",
"SousChefJourney7.m4v",
"SousChefJourney8.m4v",
"SousChefJourney9.m4v"]

for video in videos:
	method = 'GET'
	duration_in_seconds = 60*60*24*7
	expires = int(time() + duration_in_seconds)
	path = 'v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/'+ video
	key = 'd9f602b6e03fb2fc3f79ebffee0e3780'
	hmac_body = '%s\n%s\n%s' % (method, expires, path)
	sig = hmac.new(key, hmac_body, sha1).hexdigest()
	s = 'https://{host}{path}?temp_url_sig={sig}&temp_url_expires={expires}'
	url = s.format(host='dal.objectstorage.open.softlayer.com', path=path, sig=sig, expires=expires)
	print url

