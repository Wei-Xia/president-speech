var baseURL;
var baseAPIURL;
var UUID;
var videoList = {}
var metaVideoList = {}
var metaPlayList = {}

function setMetaVideoList(data) {
    metaVideoList = data
}

function getMetaVideoList() {
    return metaVideoList
}

function setMetaPlayList(data) {
    metaPlayList = data
}

function getMetaPlayList() {
    return metaPlayList
}

function getVideoList() {
    return videoList
}

function setVideoList(data) {
    videoList = data
}

function setUUID(uuid) {
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

function getBaseAPIURL() {
    return baseAPIURL
}

function setBaseAPIURL(url) {
    baseAPIURL = url
}


var resourceLoader;

App.onLaunch = function(options) {
    var javascriptFiles = [
        `${options.BASEURL}js/ResourceLoader.js`,
        `${options.BASEURL}js/Presenter.js`
    ];

    setBaseURL(options.BASEURL);
    setBaseAPIURL(options.BASEAPIURL)
    setUUID(options.UUID)

    //Start making some API calls to get the metadata, user watch history

    // //Get the user's history from Cloudant
    // var sessionRequest = new XMLHttpRequest(),
    //     method = 'GET',
    //     url = getBaseAPIURL() + 'sessions/' + getUUID() + '/status';
    // 
    // sessionRequest.open(method, url, false);
    // sessionRequest.onreadystatechange = function() {
    //     var status;
    //     var data;
    //     if (sessionRequest.readyState == 4) {
    //         status = sessionRequest.status;
    //         if (status == 200) {
    //             data = JSON.parse(sessionRequest.responseText);
    //             //If it worked, set the watch History
    //             setVideoList(data)
    //         } else {
    //             //Otherwise try making them a document in the database (as they probably don't exist)
    //             sessionRequest = new XMLHttpRequest(), method = 'POST', url = getBaseAPIURL() + 'sessions/';
    //             sessionRequest.open(method, url, false);
    //             sessionRequest.setRequestHeader('Content-Type', 'application/json');
    //             sessionRequest.onreadystatechange = function() {
    //                 if (sessionRequest.readyState == 4 && sessionRequest.status == 200) {
    //                     console.log("Successfully added (" + getUUID() + ") to the database!")
    //                 } else {
    //                     //At this point there is something wrong with the servers so display an error
    //                     var alert = errorFailure();
    //                     navigationDocument.presentModal(alert);
    //                     throw ("Playback Example: unable to evaluate scripts.");
    //                 }
    //             }
    //             sessionRequest.send(JSON.stringify({
    //                 _id: getUUID(),
    //                 videoStatus: getVideoList()
    //             }));
    //         }
    //     }
    // }
    // sessionRequest.send();
    // var videoMetaDataRequest = new XMLHttpRequest(),
    //     method = 'GET',
    //     url = getBaseAPIURL() + 'meta/v?type=video';
    // 
    // videoMetaDataRequest.open(method, url, false);
    // videoMetaDataRequest.onreadystatechange = function() {
    //     var status;
    //     var data;
    //     if (videoMetaDataRequest.readyState == 4) {
    //         status = videoMetaDataRequest.status;
    //         if (status == 200) {
    // 
    //             data = JSON.parse(videoMetaDataRequest.responseText);
    //             console.log(data)
    //             var temp = {}
    //             for (var i = 0; i < data.length; i++) {
    //                 temp[data[i]["doc"]["_id"]] = data[i]["doc"]
    //             }
    //             setMetaVideoList(temp)
    // 
    //         } else {
    //             var alert = errorFailure();
    //             navigationDocument.presentModal(alert);
    // 
    //             throw ("Playback Example: unable to evaluate scripts.");
    // 
    //         }
    //     }
    // }
    // videoMetaDataRequest.send();
    // var playlistMetaDataRequest = new XMLHttpRequest(),
    //     method = 'GET',
    //     url = getBaseAPIURL() + 'meta/v?type=playlist';
    // 
    // playlistMetaDataRequest.open(method, url, false);
    // playlistMetaDataRequest.onreadystatechange = function() {
    //     var status;
    //     var data;
    //     if (playlistMetaDataRequest.readyState == 4) {
    //         status = playlistMetaDataRequest.status;
    //         if (status == 200) {
    // 
    //             data = JSON.parse(playlistMetaDataRequest.responseText);
    // 
    //             var temp = {}
    //             for (var i = 0; i < data.length; i++) {
    // 
    //                 temp[data[i]["doc"]["_id"]] = data[i]["doc"]
    //             }
    //             setMetaPlayList(temp)
    //         } else {
    //             var alert = errorFailure();
    //             navigationDocument.presentModal(alert);
    //             throw ("Playback Example: unable to evaluate scripts.");
    //         }
    //     }
    // }
    // playlistMetaDataRequest.send();

    evaluateScripts(javascriptFiles, function(success) {
        if (success) {
            resourceLoader = new ResourceLoader(options.BASEURL);

            var index = resourceLoader.loadResource(`${options.BASEURL}templates/MenuBar.xml.js`,

                function(resource) {
                    var doc = Presenter.makeDocument(resource);
                    doc.addEventListener("select", Presenter.load.bind(Presenter));
                    navigationDocument.pushDocument(doc);
                    // Presenter.defaultPresenter(doc);
                });
        } else {
            var alert = createAlert("Evaluate Scripts Error", "There was an error attempting to evaluate the external JavaScript files.\n\n Please check your network connection and try again later.");
            navigationDocument.presentModal(alert);

            throw ("Playback Example: unable to evaluate scripts.");
        }

    });
}

App.onSuspend = function() {
    //App.reload({when:'onResume'})
    //When the app goes into a suspended state, Try and upload the users
    //watch history to the apprpriate document in Cloudant

    var xmlhttp = new XMLHttpRequest(),
        method = 'PUT',
        url = getBaseAPIURL() + 'sessions/' + getUUID();
    xmlhttp.open(method, url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //alert(xmlhttp.responseText);
            console.log("Saved changes to Cloudant")
        }
    }
    xmlhttp.send(JSON.stringify({
        videoStatus: getVideoList()
    }));
}


// var createAlert = function(title, description) {
//     var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
//     <document>
//         <alertTemplate>
//            <title>Do you want to continue watching?</title>
//            <button>
//               <text>Yes</text>
//            </button>
//            <button>
//               <text>No</text>
//            </button>
//         </alertTemplate>
//     </document>`
// 
//     var parser = new DOMParser();
//     var alertDoc = parser.parseFromString(alertString, "application/xml");
//     return alertDoc
// }

//Get the proper thumbnail for a playlist based on if they have watched all the videos in it or not
// var determineWatchProgress = function(playlistName) {
//     var temp = getMetaPlayList();
//     //Check all the videos in the playlist. If any of them are either not watched at all or have watched 
//     //less than 98%, we consider it not watched, so return the "nDoneThumb", which is the not done thumbnail
//     for (var i = 0; i < temp[playlistName].videos.length; i++) {
//         var tempName = temp[playlistName].videos[i];
//         var tempVidList = getVideoList();
//         var tempVideoMeta = getMetaVideoList();
//         if (typeof tempVidList[tempName] == "undefined" || (tempVidList[tempName].seekToTime / tempVideoMeta[tempName].length < 0.98)) {
//             return temp[playlistName].nDoneThumb;
//         }
//     }
//     return temp[playlistName].doneThumb;
// }

//Generate the proper glyph that goes next to  video in a play list to determine of it is watched,
//Partially watched, or not watched at all
var watchGlyphProducer = function(videoName) {

    var tempWatchList = getVideoList();
    var tempMetaVidList = getMetaVideoList();
    //If the video hasn't been watched or has less then 3 seconds (kinda arbitrary :/), we consider it not wathced at all
    if (typeof tempWatchList[videoName] == "undefined" || tempWatchList[videoName].seekToTime <= 3.0) {
        return "● "; //◉
    }
    //If they've watched less than 98%, its partially watched
    if (tempWatchList[videoName].seekToTime / tempMetaVidList[videoName].length < 0.98) {
        return "◐ ";
    }
    //If they've completed the video its not glyph (or 5 spaces)
    return "     ";
}

var errorFailure = function() {

    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
            <alertTemplate>
                <title>Error: Trouble connecting to the servers. Please try again later.</title>
            </alertTemplate>
        </document>`

    var parser = new DOMParser();

    var alertDoc = parser.parseFromString(alertString, "application/xml");

    return alertDoc
}

var linkCode = function(input) {

    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          
    <alertTemplate>
       <title>Here is your sync code: ${input}</title>
          <!-- <button action="ConnectToWebsite" presentation="modalDialogPresenter">
       		 	<text>OK</text>
       		</button> -->
    </alertTemplate>
        </document>`

    var parser = new DOMParser();

    var alertDoc = parser.parseFromString(alertString, "application/xml");

    return alertDoc;
}

var clearHistory = function() {
    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
            <alertTemplate>
                <title>History has been cleaned.</title>
                    <button>
                        <text>OK</text>
                    </button>
            </alertTemplate>
        </document>`

    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc;
}


var generateSortedWatchHistory = function() {
    var currentVideoListJSON = getVideoList();
    var currentVideoList = [];


    for (var key in currentVideoListJSON) {
        if (currentVideoListJSON.hasOwnProperty(key)) {
            currentVideoList.push([key, currentVideoListJSON[key].timeStamp]);
        }
    }
    currentVideoList.sort(function(a, b) {
        return new Date(b[1]) - new Date(a[1]);
    });
    console.log(currentVideoList)
    return currentVideoList;
}

var findCurrentPlaylist = function() {
    var sortedHistory = generateSortedWatchHistory();
    var lastWatched = sortedHistory[0];
    var tempPlaylist = getMetaPlayList();
    if (typeof lastWatched != "undefined") {
        for (key in tempPlaylist) {
            if (tempPlaylist.hasOwnProperty(key)) {
                console.log(lastWatched);
                if (tempPlaylist[key].videos.indexOf(lastWatched[0]) > -1) {
                    console.log("This is the last playlist:" + key);
                    return tempPlaylist[key].doc_name;
                }
            }
        }
    }
    return "course01.xml.js";
}

var getCodeInAdvance = function() {
    var websiteSync = new XMLHttpRequest();
    var url = "https://agileacademy.mybluemix.net/video/pair";
    var params = "session=" + getUUID();
    websiteSync.open("POST", url, true);

    websiteSync.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    websiteSync.onreadystatechange = function() { //Call a function when the state changes.
        if (websiteSync.readyState == 4 && websiteSync.status == 200) {
            data = JSON.parse(websiteSync.responseText);
            var code = data.code;
            // navigationDocument.presentModal(alert);
            return code;
        }
    }
    websiteSync.send(params);
    // <-Pass in an argument: string from Andre's API call
}

function createDescriptiveAlertDocument(title, description) {
    const template = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
            <descriptiveAlertTemplate>
                <title>${title}</title>
                <description>${description}</description>
            </descriptiveAlertTemplate>
        </document>`;
    return new DOMParser().parseFromString(template, "application/xml");
}

function getCode() {
    return getCodeInAdvance();
}