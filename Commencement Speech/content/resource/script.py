import hmac
from hashlib import sha1
from time import time

videos = ["001.mp4", "002.mp4","003.mp4","004.mp4","005.mp4","006.mp4","007.mp4","008.mp4","009.mp4","010.mp4", ]


for video in videos:
    method = 'GET'
    duration_in_seconds = 60*60*24
    expires = int(time() + duration_in_seconds)
    path = 'v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/TheSousChefJourney/'+ video
    key = 'qwertyuiopoiuytrewq'
    hmac_body = '%s\n%s\n%s' % (method, expires, path)
    sig = hmac.new(key, hmac_body, sha1).hexdigest()
    s = 'https://{host}/{path}?temp_url_sig={sig}&amp;temp_url_expires={expires}'
    url = s.format(host='dal.objectstorage.open.softlayer.com', path=path, sig=sig, expires=expires)

    print url