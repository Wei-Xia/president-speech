var currentVideo = "" //Keep track of the current video being presented
var Presenter = {
  
    modalDialogPresenter: function(xml) {
        navigationDocument.presentModal(xml);
    },

    defaultPresenter: function(xml, replaceDoc) {

        /*
        If a loading indicator is visible, we replace it with our document, otherwise
        we push the document on the stack
        */
        if (this.loadingIndicatorVisible) {
            navigationDocument.replaceDocument(xml, this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        } else {
            if (replaceDoc && navigationDocument.documents.indexOf(replaceDoc) > -1) {
                navigationDocument.replaceDocument(xml, replaceDoc);
            } else {
                navigationDocument.pushDocument(xml);
            }
        }
    },

    menuBarItemPresenter: function(xml, ele) {
        var feature = ele.parentNode.getFeature("MenuBarDocument");
        if (feature) {
            var currentDoc = feature.getDocument(ele);
            if (!currentDoc) {
                feature.setDocument(xml, ele);
            }
        }
    },

    /**
     * @description This function handles the select event and invokes the appropriate presentation method.
     * This is only one way to implent a system for presenting documents. You should determine
     * the best system for your application and data model.
     *
     * @param {Event} event - The select event
     */
    load: function(event) {

        var self = this,
            ele = event.target,
            templateURL = ele.getAttribute("template"),
            templateParameter = ele.getAttribute("templateParameter"),
            videoURL = ele.getAttribute("videoURL"),
            action = ele.getAttribute("action"),
            parameter = ele.getAttribute("parameter"),
            presentation = ele.getAttribute("presentation"),
            favourite = ele.getAttribute("favourite");

        var actions = {
            "ConnectToWebsite": function() {
                navigationDocument.dismissModal();
                console.log("ConnectToWebsite");
            },
            "EraseWatchHistory": function() {
                setVideoList({})
                navigationDocument.dismissModal();
                console.log("EraseWatchHistory");
            },
            "removeDocument": function() {
                navigationDocument.dismissModal();
            },
            "getCode": function() {
                //Make an API call to generate a pair code
                var websiteSync = new XMLHttpRequest();
                var url = "https://agile-academy-nodejs.mybluemix.net/video/pair";
                var params = "session=" + getUUID();
                websiteSync.open("POST", url, true);

                websiteSync.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                websiteSync.onreadystatechange = function() { //Call a function when the state changes.
                    if (websiteSync.readyState == 4 && websiteSync.status == 200) {
                        data = JSON.parse(websiteSync.responseText)
                        var alert = linkCode(data.code);
                        navigationDocument.presentModal(alert);
                    }
                }
                websiteSync.send(params);
            },
        }

        if (action) {
            actions[action]();
        }
      

        if (ele.tagName === 'description') {
            const body = ele.textContent;
            const alertDocument = createDescriptiveAlertDocument('', body);
            navigationDocument.presentModal(alertDocument);
        }

        /*
        Check if the selected element has a 'template' attribute. If it does then we begin
        */

        //Setting up the video player
        if (videoURL) {
            var currentVideoList = getVideoList();
            var metaData = getMetaVideoList();
            //Split the video URL on /
            var splitArray = videoURL.split('/');
            //This is where the actual video name is in the array
            var vidName = splitArray[6];
            vidName = vidName.split('?');
            vidName = vidName[0];

            var player = new Player();
            var playlist = new Playlist();
            var mediaItem = new MediaItem("video", videoURL);

            if (typeof currentVideoList[vidName] == "undefined") {
                currentVideoList[vidName] = {
                    seekToTime: 0.0
                }
            }
            currentVideo = vidName;
            //Set all data for the video mediaItem
            mediaItem.resumeTime = currentVideoList[vidName].seekToTime;
            mediaItem.description = metaData[vidName].description;
            mediaItem.title = metaData[vidName].title;
            mediaItem.thumbnail = metaData[vidName].thumbnail;
            mediaItem.link = metaData[vidName].link;
            player.playlist = playlist;
            //Push the video
            player.playlist.push(mediaItem);
            player.present();
            self.setPlaybackEventListeners(player);




        } else if (templateURL) {

            self.showLoadingIndicator(presentation, parameter);

            /*
            Here we are retrieving the template listed in the templateURL property.
            */
            resourceLoader.loadResource(templateURL,
                function(resource) {
                    if (resource) {
                        /*
                        The XML template must be turned into a DOMDocument in order to be
                        presented to the user. See the implementation of makeDocument below.
                        */
                        var doc = self.makeDocument(resource);

                        /*
                        Event listeners are used to handle and process user actions or events. Listeners
                        can be added to the document or to each element. Events are bubbled up through the
                        DOM heirarchy and can be handled or cancelled at at any point.

                        Listeners can be added before or after the document has been presented.

                        For a complete list of available events, see the TVMLKit DOM Documentation.
                        */
                        doc.addEventListener("select", self.load.bind(self));
                        //doc.addEventListener("highlight", self.load.bind(self));


                        /*
                        This is a convenience implementation for choosing the appropriate method to
                        present the document.
                        */
                        if (self[presentation] instanceof Function) {
                            self[presentation].call(self, doc, ele);
                        } else {
                            self.defaultPresenter.call(self, doc);
                        }
                    }
                },
                templateParameter);
        }
    },

    /**
     * This function creates a XML document from the contents of a template file.
     * In this example we are utilizing the DOMParser to transform the Index template from a
     * string representation into a DOMDocument.
     *
     * @param {String} resource - The contents of the template file
     * @return {Document} - XML Document
     */
    makeDocument: function(resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }
        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },

    /**
     * @description This function handles the display of loading indicators.
     *
     * @param {String} presentation - The presentation function name
     */
    showLoadingIndicator: function(presentation, parameter) {
        /*
        You can reuse documents that have previously been created. In this implementation
        we check to see if a loadingIndicator document has already been created. If it
        hasn't then we create one.
        */
        if (!this.loadingIndicator) {
            this.loadingIndicator = this.makeDocument(this.loadingTemplate);
        }

        /*
        Only show the indicator if one isn't already visible and we aren't presenting a modal.
        */
        if (!this.loadingIndicatorVisible && presentation != "modalDialogPresenter" && presentation != "menuBarItemPresenter" && presentation != "searchPresenter" && presentation != "historyPresenter") {
            if (parameter == "replace") {
                var replaceDoc = navigationDocument.documents[navigationDocument.documents.length - 1];
                navigationDocument.replaceDocument(this.loadingIndicator, replaceDoc);
            } else {
                navigationDocument.pushDocument(this.loadingIndicator);
            }

            this.loadingIndicatorVisible = true;
        }
    },

    /**
     * @description This function handles the removal of loading indicators.
     * If a loading indicator is visible, it removes it from the stack and sets the loadingIndicatorVisible attribute to false.
     */
    removeLoadingIndicator: function() {
        if (this.loadingIndicatorVisible) {
            navigationDocument.removeDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        }
    },


    /**
     * @description Instead of a loading a template from the server, it can stored in a property
     * or variable for convenience. This is generally employed for templates that can be reused and
     * aren't going to change often, like a loadingIndicator.
     */
    loadingTemplate: `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <loadingTemplate>
            <activityIndicator>
              <text>Loading...</text>
            </activityIndicator>
          </loadingTemplate>
        </document>`,

    lastRecommendedPage: null,

    setPlaybackEventListeners: function(currentPlayer) {

        var currentVideoList = getVideoList();
        var currentTime = 0;

        //Look for when the system state changes from or to the video player
        currentPlayer.addEventListener("stateDidChange", function(event) {
            //If it does, get the current video time and record it to the object and set the object
            currentVideoList[currentVideo].seekToTime = currentTime;
            currentVideoList[currentVideo].timeStamp = event.timeStamp;
            setVideoList(currentVideoList);
        });
        //When the time changes (every second), record that time 
        currentPlayer.addEventListener("timeDidChange", function(event) {

            currentTime = event.time;
            var temp = getMetaVideoList();

            //If its the end of the video, pause the video and display a "continue screen"
            if ((Math.round(currentTime)) == temp[currentVideo]["length"] - 1) {
                // currentPlayer.pause();
                // var alert = createAlert();
                // navigationDocument.presentModal(alert);
            }
        }, {
            interval: 1
        });

    },

    //Handle the history screen presentation
    historyPresenter: function(xml, ele) {

        //Call the menuBarItemPresenter in order to put the screen in the menubar
        this.menuBarItemPresenter(xml, ele);

        //Get the videoWatch history lists
        var currentVideoListJSON = getVideoList();
        var currentVideoList = generateSortedWatchHistory();
        var metaList = getMetaVideoList();
        var doc = xml;

        //Top and bottom tags for the view.
        var topTag = "<grid><header></header><section> ";
        var endTag = "</section></grid>";

        //For every video in the watch history, generate a lockup for iy be looking at the metadata for it.
        if (currentVideoList.length > 0) {
            var workingTag = "";
            for (var i in currentVideoList) {
                workingTag += "<lockup videoURL='";
                workingTag += metaList[currentVideoList[i][0]]["link"];
                workingTag += "'><img src='";
                workingTag += getBaseURL();
                workingTag += metaList[currentVideoList[i][0]]["thumbnail"];
                workingTag += "' width='445.28' height='247.808'/><title>";
                workingTag += metaList[currentVideoList[i][0]]["title"];
                //If the user has watched 98% or more of a video, we consider it "done" and put the check mark next to it.
                if (currentVideoListJSON[currentVideoList[i][0]]["seekToTime"] / metaList[currentVideoList[i][0]]["length"] >= 0.98) {
                    workingTag += "</title><overlay class='progressOverlay'><badge class='watchedOverlayImg' src='resource://overlay-checkmark'/></overlay></lockup>";
                } else {
                    //Otherwise put a progress bar there and adjust the length of it 
                    workingTag += "</title><overlay class='progressOverlay'><progressBar value='";
                    workingTag += currentVideoListJSON[currentVideoList[i][0]]["seekToTime"] / metaList[currentVideoList[i][0]]["length"];
                    workingTag += "'/></overlay></lockup>";
                }
            }
            doc.getElementsByTagName("collectionList").item(0).innerHTML = topTag + workingTag + endTag;
        } else {
            // Replace any existing shelf with an empty shelf if they have not watched a video
            doc.getElementsByTagName("collectionList").item(0).innerHTML = `&lt;shelf /&gt;`;
        }
    },
    
    //Handle search function 
     searchPresenter: function(xml, ele) {  
       
      //Call the menuBarItemPresenter in order to put the screen in the menubar
      this.menuBarItemPresenter(xml, ele);
                  
      var doc = xml;  
      // Set a reference to the search field.  
      var searchField = doc.getElementsByTagName("searchField").item(0);  
      // Set a reference to the searchField's keyboard feature.  
      var keyboard = searchField.getFeature("Keyboard");  
      // Register an onTextChange event for the keyboard.  
      
              //Top and bottom tags for the view.
              var topTag = "<grid><header></header><section> ";
              var endTag = "</section></grid>";
              
              
      keyboard.onTextChange = function() {  
           // Get the text that has been entered.  
           var searchText = keyboard.text; 
           console.log("Search text changed " + searchText);
           // Encode the text.  
           searchText = encodeURIComponent(searchText);        
           // If more 4+ characters have been entered...  
           if ( keyboard.text.length >= 1 ) {  
                // Create an XMLHttpRequest.  
                var xhttp;  
                xhttp = new XMLHttpRequest();                 
                // Add a "load" event listener.  
                xhttp.addEventListener("load", function() {   
                     // And the dynamically generated shelf to the collection list.  
                     doc.getElementsByTagName("collectionList").item(0).innerHTML = topTag+xhttp.responseText+endTag;  
                     console.log(xhttp.responseText);
                 }, false);  
                // Sets the request's method, URL, and synchronous flag.  
                xhttp.open("GET", "http://agile-academy-tvos-content.mybluemix.net/static/json/" + searchText + ".json");  
                // Send the request.  
                xhttp.send();       
           } else {                                     
                // Replace any existing shelf with an empty shelf.  
                doc.getElementsByTagName("collectionList").item(0).innerHTML = `&lt;shelf /&gt;`;  
           }                 
      }  
    }
}