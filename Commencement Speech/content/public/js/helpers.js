var baseURL;
var baseAPIURL;
var UUID;
var videoList = {}
var metaVideoList = {}

function setMetaVideoList(data){
     metaVideoList = data
}
function getMetaVideoList(){
    return metaVideoList
}
function getVideoList(){
    return videoList
}
function setVideoList(data){
     videoList = data
}
function setUUID(uuid){
    UUID = uuid
}

function getUUID() {
    return UUID
}

function setBaseURL(url) {
  baseURL = url
}

function getBaseURL() {
  return baseURL;
}

function getBaseAPIURL(){
    return baseAPIURL
}
function setBaseAPIURL(url){
    baseAPIURL = url
}