var Template = function() {
    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
    <head>
        <style>
            .showTextOnHighlight {
                <!-- tv-text-highlight-style: show-on-highlight; -->
                color: black
            }
            .3Columnshelf {
                tv-interitem-spacing: 48;
            }
            .5Columnshelf {
                tv-interitem-spacing: 48;
            }
            .6Columnshelf {
                tv-interitem-spacing: 48;
            }
            .blurOverlayImage {
              tv-img-treatment: blurOverlay;
              padding: 455 0 0 0;
            }
            .blurOverlayBanner {
              padding: 150 0 0;
            }
            .body {
              color: grey
            }
            tv-text-style:none
        </style>
    </head>
    <stackTemplate class = "body">
          <background>
            <!-- <img class="blurOverlayImage" src="${this.BASEURL}images/background/home-bg4.jpg" /> -->
          </background>
        <collectionList>
            <carousel>
                <section>
                    <!-- <lockup template="${this.BASEURL}/templates/Stack.xml.js">
                        <img src="${this.BASEURL}images/homeImage/top1.png" width="1740" height="784"/>
                    </lockup> -->
                    <!-- <lockup template="${this.BASEURL}/templates/courses/${findCurrentPlaylist()}"> -->
                    <lockup template="${this.BASEURL}/templates/courses/test.xml.js">
                        <!-- <title style="tv-text-style:title; margin: 0 10; color:white;">Featured Videos</title> -->
                        <img src="${this.BASEURL}images/homeImage/top1.jpg" width="1740" height="700"/>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/chef.xml.js">
                        <img src="${this.BASEURL}images/homeImage/top2.jpg" width="1740" height="700"/>
                    </lockup>
                </section>
            </carousel>
            
            <separator>
                <text style="tv-text-style:body; margin: 0 10; color:grey;">2016 Election Speeches</text>
            </separator>
            <shelf class="6Columnshelf">
	              <header>
                    <title>Donald Trump</title>
                </header>
                <section>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney1.m4v?temp_url_sig=efb767096831c6a31009abfda5c10c54a21a796e&amp;temp_url_expires=4624350692">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Iteration Zero</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney2.m4v?temp_url_sig=e57f1e4f2821cb3d790306efbbb61d98e0189f90&amp;temp_url_expires=4624350729">
                        <img src="${this.BASEURL}images/homeImage/chefImage/002.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Backlog Refinement</title>
                    </lockup>
                </section>
            </shelf>
            
            <shelf class="6Columnshelf">
	              <header>
                    <title>Hillary Clinton</title>
                </header>
                <section>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney1.m4v?temp_url_sig=efb767096831c6a31009abfda5c10c54a21a796e&amp;temp_url_expires=4624350692">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Iteration Zero</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney2.m4v?temp_url_sig=e57f1e4f2821cb3d790306efbbb61d98e0189f90&amp;temp_url_expires=4624350729">
                        <img src="${this.BASEURL}images/homeImage/chefImage/002.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Backlog Refinement</title>
                    </lockup>
                </section>
            </shelf>
            
            <separator>
                <text style="tv-text-style:body; margin: 0 10; color:grey;">Latest Speeches</text>
            </separator>
            <shelf class="6Columnshelf">
	              <header>
                    <title>Year of 2016</title>
                </header>
                <section>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney1.m4v?temp_url_sig=efb767096831c6a31009abfda5c10c54a21a796e&amp;temp_url_expires=4624350692">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Iteration Zero</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney2.m4v?temp_url_sig=e57f1e4f2821cb3d790306efbbb61d98e0189f90&amp;temp_url_expires=4624350729">
                        <img src="${this.BASEURL}images/homeImage/chefImage/002.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Backlog Refinement</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney3.m4v?temp_url_sig=2a78e42c880b1a4d65872edaab9f4cf6d4650548&amp;temp_url_expires=4624350735">
                        <img src="${this.BASEURL}images/homeImage/chefImage/003.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">User Stories</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney4.m4v?temp_url_sig=76ecc0725fdc0c67fe49cc239af0be1fc7a13e35&amp;temp_url_expires=4624350742">
                        <img src="${this.BASEURL}images/homeImage/chefImage/004.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Planning Poker</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney5.m4v?temp_url_sig=3ef20926154b0586316aeeb5d29e103fe28f1372&amp;temp_url_expires=4624350749">
                        <img src="${this.BASEURL}images/homeImage/chefImage/005.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Iteration Planning</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/chef.xml.js">
                        <img src="${this.BASEURL}images/homeImage/more.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">More</title>
                    </lockup>
                </section>
            </shelf>
            
            <separator>
                <text style="tv-text-style:body; margin: 0 10; color:grey;">Featured Speeches</text>
            </separator>

            <shelf class="3Columnshelf">
                <header>
                    <title>Barack Obama</title>
                </header>
                <section>
                    <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">A Taste of Agile</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course03.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Operations Fundamentals</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course04.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Project, Iteration, Change Management</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course05.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Product Ownership</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Team Coaching</title>
                    </lockup>
                </section>
            </shelf>

            <shelf class="5Columnshelf">
                <header>
                    <title>George Walker Bush</title>
                </header>
                <section>
                    <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">A Taste of Agile</title>
                    </lockup>
                   <lockup template="${this.BASEURL}/templates/courses/course02.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Program Fundamentals</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course04.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Project, Iteration, Change Management</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course07.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Development</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course08.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Testing</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course09.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Deployment</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course10.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Infrastructure</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Team Coaching</title>
                    </lockup>
                </section>
            </shelf>

            <shelf class="3Columnshelf">
                <header>
                    <title>Bill Clinton</title>
                </header>
                <section>
                    <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">A Taste of Agile</title>
                    </lockup>
                   <lockup template="${this.BASEURL}/templates/courses/course02.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Program Fundamentals</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course04.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Project, Iteration, Change Management</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course05.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Product Ownership</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Team Coaching</title>
                    </lockup>
                </section>
            </shelf>
            
        </collectionList>
    </stackTemplate>
</document>`
}

<!-- <img src="${this.BASEURL}${determineWatchProgress("01ATasteOfAgile")}" width="438.4" height="244"/> -->
