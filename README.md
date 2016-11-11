## How to run static server in AWS EC2
### Set up AWS account
1. You can use student account with $100 credit for free

-
### Create EC2 instance
1. Launch Instance, choose `ubuntu`, follow the default settings.
2. In Security Groups, add the following rule below.
3. Create a key pair， and save to your computer

```
HTTP                         Anywhere
HTTPS                        Anywhere
Custom TCP Rule    8000      Anywhere
Custom TCP Rule    9000      Anywhere
```
-
###Log in to AWS EC2
1. Go to your key directory. `cd developer/aws`
2. `ssh -i node.pem ubuntu@ec2-11-111-111-111.compute-1.amazonaws.com` to log in
3. Maybe you will see it is a public key, and can't login. Change the property of key file by using `chmod 600 key.pem`, check the property by using `ls -l`

-
### Use fileZilla to upload files to AWS
1. check this answer at [stackoverflow](http://stackoverflow.com/questions/16744863/connect-to-amazon-ec2-file-directory-using-filezilla-and-sftp).

-
### Setup Ubuntu environment
1. `sudo apt-get update`
2. `sudo apt-get install libssl-dev g++ make`
3. Install npm by going to [nodejs.org](https://nodejs.org/en/download/package-manager/)
4. test if success by creating a `vim test.js` file
5. run `node test.js`, and go to `11.11.11.11:9000` to test

```
var http = require('http');
var port = 9000
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hello World!\n');
}).listen(port);
console.log('Listening on port: ', port);
```

-
### Use Express to server static folder
1. Install Express by using `npm install express`
2. modify `test.js` file by using the code below
3. run `node test.js`, and go to `11.11.11.11:9000` to test

```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!\n');
});

var port = 9000;
app.listen(port);
console.log('Listening on port: ', port);
```

-
### Server static folder by using Express
1. Folder directory as below
2. create `test.js` as it below
3. run `node test.js`, and go to `http://localhost:8080/` to check if success

```
.tv
	-public
		-js
		-templates
	-test.js
```

`test.js`:

```
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  return res.status(200).send('This is the root of my express application');
});

app.listen(8080);
```
-
### Run .js backend forever
1. Using `sudo nohup node test.js &`
2. delete `nohup.log` file
3. Stop the task? Check the task ID by using `ps -ef`, find `test.js` ID, and using `kill ID` to stop

-
### Additional Information
1. Express wouldn't let you visit the folder directly. If you need to visit a file, try `http://localhost:8080/js/application.js`, otherwise you may get `Cannot GET/`



