var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
      .badge {
      tv-tint-color: rgb(255,255,255);
      }
      .button {
      				font-size: 100px;
      }
    </style>
  </head>
  <compilationTemplate theme="dark">
    <list>
      <relatedContent>
        <itemBanner>
          <heroImg src="${this.BASEURL}images/homeImage/chefImage/home.jpg" width="800" height="800" />
            <!-- <row>
                <decorationImage src="${this.BASEURL}images/cc/de.png" width="75" height="38" />
                <decorationImage src="${this.BASEURL}images/cc/en.png" width="75" height="38" />
                <decorationImage src="${this.BASEURL}images/cc/es.png" width="75" height="38" />
                <decorationImage src="${this.BASEURL}images/cc/fr.png" width="75" height="38" />
                <decorationImage src="${this.BASEURL}images/cc/ja.png" width="75" height="38" />
                <decorationImage src="${this.BASEURL}images/cc/ko.png" width="75" height="38" />
                <decorationImage src="${this.BASEURL}images/cc/zh.png" width="75" height="38" />
            </row>
            <row>
              <buttonLockup class="button">
                <badge src="resource://button-play" class="whiteButton" />
                <title>Continue</title>
              </buttonLockup>
            </row> -->
        </itemBanner>
      </relatedContent>

      <header>
        <title>The SousChef Journey</title>
        <subtitle>Series</subtitle>
        <row  class="subtitle">
          <text>39 minutes</text>
              <!-- <badge src="resource://cc" class="badge"/> -->
              <badge src="resource://hd" class="badge"/>
        </row>
      </header>
      <section>
        <description allowsZooming="true">This series follows an Agile team as it attempts to bring a culinary robot to life — like Frankenstein. Each episode models one Agile practice in 3 to 5 minutes, and is served with a touch of humor. Bet you can't watch just one.</description>
      </section>
      <section>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney1.m4v?temp_url_sig=efb767096831c6a31009abfda5c10c54a21a796e&amp;temp_url_expires=4624350692">
          <ordinal minLength="4">${watchGlyphProducer("SousChefJourney1.m4v")}1</ordinal>
          <title>Iteration Zero</title>
          <decorationLabel>04:10</decorationLabel>
        </listItemLockup>        
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney2.m4v?temp_url_sig=e57f1e4f2821cb3d790306efbbb61d98e0189f90&amp;temp_url_expires=4624350729">
          <ordinal minLength="4">${watchGlyphProducer("SousChefJourney2.m4v")}2</ordinal>
          <title>Backlog Refinement</title>
          <decorationLabel>03:42</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney3.m4v?temp_url_sig=2a78e42c880b1a4d65872edaab9f4cf6d4650548&amp;temp_url_expires=4624350735">
          <ordinal minLength="4">${watchGlyphProducer("SousChefJourney3.m4v")}3</ordinal>
          <title>User Stories</title>
          <decorationLabel>03:46</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney4.m4v?temp_url_sig=76ecc0725fdc0c67fe49cc239af0be1fc7a13e35&amp;temp_url_expires=4624350742">
          <ordinal minLength="4">${watchGlyphProducer("SousChefJourney4.m4v")}4</ordinal>
          <title>Planning Poker</title>
          <decorationLabel>03:29</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney5.m4v?temp_url_sig=3ef20926154b0586316aeeb5d29e103fe28f1372&amp;temp_url_expires=4624350749">
          <ordinal minLength="4">${watchGlyphProducer("SousChefJourney5.m4v")}5</ordinal>
          <title>Iteration Planning</title>
          <decorationLabel>03:45</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney6.m4v?temp_url_sig=c17c47f122fb2982da29d3003004b975e0b1a391&amp;temp_url_expires=4624350757">
          <ordinal minLength="4">${watchGlyphProducer("SousChefJourney6.m4v")}6</ordinal>
          <title>Stand-up</title>
          <decorationLabel>03:53</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney7.m4v?temp_url_sig=5110067505928fb112e4b2b7f5c79c473fc9a660&amp;temp_url_expires=4624350764">
          <ordinal minLength="4">${watchGlyphProducer("SousChefJourney7.m4v")}7</ordinal>
          <title>Walls of Work</title>
          <decorationLabel>03:41</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney8.m4v?temp_url_sig=2f5f868e9563f36ee531bf416b7a66595272f74a&amp;temp_url_expires=4624350772">
          <ordinal minLength="4">${watchGlyphProducer("SousChefJourney8.m4v")}8</ordinal>
          <title>Showcase</title>
          <decorationLabel>04:22</decorationLabel>
        </listItemLockup>      
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney9.m4v?temp_url_sig=bd4c61b600542185ebfe8f8b92850905c437969f&amp;temp_url_expires=4624350778">
          <ordinal minLength="4">${watchGlyphProducer("SousChefJourney9.m4v")}9</ordinal>
          <title>Retrospective</title>
          <decorationLabel>03:18</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney10.m4v?temp_url_sig=92e7f2465f06e464daa53fd2bb380c973b5da761&amp;temp_url_expires=4624350785">
          <ordinal minLength="4">${watchGlyphProducer("SousChefJourney10.m4v")}10</ordinal>
          <title>Cross-functional teams</title>
          <decorationLabel>05:06</decorationLabel>
        </listItemLockup>
      </section>
    </list>
  </compilationTemplate>
</document>`
}