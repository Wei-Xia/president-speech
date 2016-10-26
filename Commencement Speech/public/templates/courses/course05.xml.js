var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
      .badge {
        tv-tint-color: rgb(255,255,255);
        }
      .description {
        <!-- color: red -->
      }
    </style>
  </head>
  <compilationTemplate theme="dark">
    <list>
      <relatedContent>
        <itemBanner>
          <heroImg src="${this.BASEURL}images/stackImage/stack05.png" width="650" height="650" />
        </itemBanner>
      </relatedContent>
      <header>
        <title>Product Ownership</title>
        <subtitle>Professional</subtitle>
        <row>
          <text>50 minutes</text>
          <!-- <badge src="resource://cc" class="badge"/> -->
          <badge src="resource://hd" class="badge"/>
        </row>
      </header>

      <section>
        <description allowsZooming="true">At the highest level, this course attempts to answer three questions: who and what are Product Owners, how do they do what they do, and what makes them successful? While answering these questions, we look at the specific practices Product Owners follow, the tools and techniques they use.</description>
      </section>
      <section>
        <listItemLockup autoHighlight="true" videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership1.mp4?temp_url_sig=d26ac45dbd224269ce7b199c3c903441f532eab8&amp;temp_url_expires=4624958155">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership1.mp4")}1</ordinal>
          <title>Course Introduction</title>
          <decorationLabel>01:46</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership2.mp4?temp_url_sig=a5f6a489585713343f3898cab290c21ff5876b5d&amp;temp_url_expires=4624958309">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership2.mp4")}2</ordinal>
          <title>The product owner role and responsibilities</title>
          <decorationLabel>06:54</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership3.mp4?temp_url_sig=55cba3e8f7689eede756a6facfd4b0ca7f7ce2d3&amp;temp_url_expires=4624958320">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership3.mp4")}3</ordinal>
          <title>Working with and within agile teams</title>
          <decorationLabel>04:31</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership4.mp4?temp_url_sig=177a2385fdb44b57c4997267e0544c7aa3deba0b&amp;temp_url_expires=4624958326">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership4.mp4")}4</ordinal>
          <title>Epics, features, stories and the MVP</title>
          <decorationLabel>09:35</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership5.mp4?temp_url_sig=0f7a212b5480e564ba798966b8fe7ab22bc3cc25&amp;temp_url_expires=4624958338">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership5.mp4")}5</ordinal>
          <title>Product backlog refinement</title>
          <decorationLabel>05:21</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership6.mp4?temp_url_sig=ba61c70e2c04ff1bde1e1c29a67fd77865b53c59&amp;temp_url_expires=4624958343">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership6.mp4")}6</ordinal>
          <title>Release planning</title>
          <decorationLabel>03:57</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership7.mp4?temp_url_sig=271649f011c18e118103ad43cc71d897a0cd79d6&amp;temp_url_expires=4624958348">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership7.mp4")}7</ordinal>
          <title>Guiding SME's</title>
          <decorationLabel>03:21</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership8.mp4?temp_url_sig=7c0eab8b6c0f00653efdfb72c534518bb1f2981c&amp;temp_url_expires=4624958354">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership8.mp4")}8</ordinal>
          <title>Handling multiple stakeholders</title>
          <decorationLabel>04:50</decorationLabel>
        </listItemLockup>      
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership9.mp4?temp_url_sig=ebb40d547163ba3639982d06b1cf05c4056a0bc7&amp;temp_url_expires=4624958360">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership9.mp4")}9</ordinal>
          <title>Steering and decision making</title>
          <decorationLabel>03:16</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership10.mp4?temp_url_sig=efbf960fb9bba9920d0dbffd89b7bb76a0e21d0f&amp;temp_url_expires=4624958371">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership10.mp4")}10</ordinal>
          <title>Involvement during an iteration</title>
          <decorationLabel>05:50</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProductOwnership11.mp4?temp_url_sig=6b53eca38d9644bdc9f60e344d080266785ae02c&amp;temp_url_expires=4624958378">
          <ordinal minLength="4">${watchGlyphProducer("AgileProductOwnership11.mp4")}11</ordinal>
          <title>Attributes of successful product owners</title>
          <decorationLabel>04:27</decorationLabel>
        </listItemLockup>
      </section>
    </list>
  </compilationTemplate>
</document>`
}