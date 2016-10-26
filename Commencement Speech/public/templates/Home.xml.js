var Template = function() {
    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
    <head>
        <style>
            .showTextOnHighlight {
                <!-- tv-text-highlight-style: show-on-highlight; -->
                color: white
            }
            .3Columnshelf {
                tv-interitem-spacing: 48;
            }
            .5Columnshelf {
                tv-interitem-spacing: 50;
            }
            .6Columnshelf {
                tv-interitem-spacing: 48;
            }
            .blurOverlayImage {
              tv-img-treatment: blurOverlay;
              padding: 660 0 0 0;
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
            <img class="blurOverlayImage" src="${this.BASEURL}images/background/home-bg.png" />
          </background>
        <collectionList>
            <carousel>
                <section>
                    <!-- <lockup template="${this.BASEURL}/templates/Stack.xml.js">
                        <img src="${this.BASEURL}images/homeImage/top1.png" width="1740" height="784"/>
                    </lockup> -->
                    <lockup template="${this.BASEURL}/templates/courses/${findCurrentPlaylist()}">
                        <!-- <title style="tv-text-style:title; margin: 0 10; color:white;">Featured Videos</title> -->
                        <img src="${this.BASEURL}images/homeImage/top2.png" width="1740" height="784"/>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/chef.xml.js">
                        <img src="${this.BASEURL}images/homeImage/top3.png" width="1740" height="784"/>
                    </lockup>
                </section>
            </carousel>
            
            <separator>
                <text style="tv-text-style:body; margin: 0 10; color:grey;">Featured Videos</text>
            </separator>
            <shelf class="6Columnshelf">
                <header>
                    <title>The SousChef Journey</title>
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
                    <!-- <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/chef_006.mp4?temp_url_sig=b6463586fe236a05c052ec3229f6898651bf6f6b&amp;temp_url_expires=1468607192">
                        <img src="${this.BASEURL}images/homeImage/chefImage/006.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Stand-up</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/chef_007.mp4?temp_url_sig=21d3cd618b31213d24103edd7f37e395d02e9aa4&amp;temp_url_expires=1468607199">
                        <img src="${this.BASEURL}images/homeImage/chefImage/007.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Walls of Work</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/chef_008.mp4?temp_url_sig=ee1d6d10cae82be0dcbae00ca579d79eee78a8bf&amp;temp_url_expires=1468607205">
                        <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Showcase</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/chef_009.mp4?temp_url_sig=8f99155f4cd1e2d405ce17573812f3ce1cd3909d&amp;temp_url_expires=1468607212">
                        <img src="${this.BASEURL}images/homeImage/chefImage/009.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Retrospective</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/chef_010.mp4?temp_url_sig=04f946c0f0fcad00cfb6b56e3e729f8867cf95d8&amp;temp_url_expires=1468607219">
                        <img src="${this.BASEURL}images/homeImage/chefImage/010.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Cross-functional teams</title>
                    </lockup>-->
                    <lockup template="${this.BASEURL}/templates/courses/chef.xml.js">
                        <img src="${this.BASEURL}images/homeImage/more.png" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">More</title>
                    </lockup>
                    
                </section>
            </shelf>
            
            <separator>
                <text style="tv-text-style:body; margin: 0 10; color:grey;">Agile Curriculum Playlists</text>
            </separator>

            <shelf class="3Columnshelf">
                <header>
                    <title>Sales</title>
                </header>
                <section>
                    <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">A Taste of Agile</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course03.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Operations Fundamentals</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course04.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Project, Iteration, Change Management</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course05.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Product Ownership</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Team Coaching</title> -->
                    </lockup>
                </section>
            </shelf>

            <shelf class="5Columnshelf">
                <header>
                    <title>Designers, Developers</title>
                </header>
                <section>

                    <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">A Taste of Agile</title> -->
                    </lockup>
                   <lockup template="${this.BASEURL}/templates/courses/course02.xml.js">
                                             <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Program Fundamentals</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course04.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Project, Iteration, Change Management</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course07.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Development</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course08.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Testing</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course09.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Deployment</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course10.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Infrastructure</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Team Coaching</title> -->
                    </lockup>
                </section>
            </shelf>

            <shelf class="3Columnshelf">
                <header>
                    <title>General Stakeholders</title>
                </header>
                <section>
                    <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">A Taste of Agile</title> -->
                    </lockup>
                   <lockup template="${this.BASEURL}/templates/courses/course02.xml.js">
                                             <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Program Fundamentals</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course04.xml.js">
                                            <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Project, Iteration, Change Management</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course05.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Product Ownership</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Team Coaching</title> -->
                    </lockup>
                </section>
            </shelf>

            <shelf class="5Columnshelf">
                <header>
                    <title>Managers</title>
                </header>
                <section>
                    <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">A Taste of Agile</title> -->
                    </lockup>
                   <lockup template="${this.BASEURL}/templates/courses/course02.xml.js">
                                             <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Program Fundamentals</title> -->
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course06.xml.js">
                                              <img src="${this.BASEURL}images/homeImage/chefImage/008.jpg" width="438.4" height="244"/>
                        <!-- <title class="showTextOnHighlight">Leadership and Strategy</title> -->
                    </lockup>
                </section>
            </shelf>

        </collectionList>
    </stackTemplate>
</document>`
}