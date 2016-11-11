import os
import subprocess
import json
import cloudant
client = cloudant.client.Cloudant("****", "****", account="****")
# or using url
# client = Cloudant(USERNAME, PASSWORD, url='https://acct.cloudant.com')

# Connect to the server
client.connect()

# Perform client tasks...
session = client.session()
#print 'Username: {0}'.format(session['userCtx']['name'])
print 'Databases: {0}'.format(client.all_dbs())

# now, create the database on the server


def crawler(path,dirName):
    output = []
    for item in os.listdir(path):
        if os.path.isdir(path + "/" + item):
            print "Dir: " +  item  
            crawler(path + '/' + item, item)
        else:
            if item[0] != ".":
                video = {}
                raw = subprocess.check_output("ffprobe  -v quiet -show_format " + path + "/" + item + " -print_format json", shell=True, stderr=subprocess.STDOUT)
                jsonDump = json.loads(raw)
               
                video["_id"] = item
                video["length"] = jsonDump["format"]["duration"]
                video["length"] = float(video["length"])
                video["type"] = "video"
                temp = list(item)
                temp[-4:-1] = ""
                temp[-1] = ""
                item = "".join(temp)
                video["thumbnail"] = "images/thumbnails/videos/%s/%s.jpg" %(dirName, item)
                output.append(video)
  
    cloudant.database.CouchDatabase(client, "").bulk_docs(outp)
    for item in output:
        #print "%f" % float((item["length"]))
        print(item)
        #pp.pprint(str(item))


crawler("/Users/John/Desktop/allVideos2", "/")