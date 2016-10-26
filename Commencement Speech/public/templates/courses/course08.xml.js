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
          <heroImg src="${this.BASEURL}images/stackImage/stack08.png" width="650" height="650" />
        </itemBanner>
      </relatedContent>
      <header>
        <title>Testing</title>
        <subtitle>Devops</subtitle>
        <row>
          <text>120 minutes</text>
          <!-- <badge src="resource://cc" class="badge"/> -->
          <badge src="resource://hd" class="badge"/>
        </row>
      </header>

      <section>
        <description allowsZooming="true">DevOps Testing provides a foundational understanding of continuous testing as a critical step to enable continuous delivery. The course covers practices, techniques and patterns that are successful and recommended. There is a significant focus on test automation and planning.</description>
      </section>
      <section>
        <listItemLockup autoHighlight="true" videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsTesting1.mp4?temp_url_sig=497121d6830199e7e317a88828badffa9dd4e115&amp;temp_url_expires=4624968298">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsTesting1.mp4")}1</ordinal>
          <title>Intro to Testing</title>
          <decorationLabel>10:17</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsTesting2.mp4?temp_url_sig=f313c714e56b41e57c88f9e9676977c2161b0f11&amp;temp_url_expires=4624968319">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsTesting2.mp4")}2</ordinal>
          <title>Test Coverage Strategy</title>
          <decorationLabel>11:08</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsTesting3.mp4?temp_url_sig=7263e821a3296a789389a1df82f3d44d495167f1&amp;temp_url_expires=4624968326">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsTesting3.mp4")}3</ordinal>
          <title>Functional Test Automation</title>
          <decorationLabel>10:48</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsTesting4.mp4?temp_url_sig=9d951e1f374769f6f16c24dccf819dba7624e3c9&amp;temp_url_expires=4624968335">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsTesting4.mp4")}4</ordinal>
          <title>Non-functional Test Automation</title>
          <decorationLabel>13:26</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsTesting5.mp4?temp_url_sig=11a06612f404adca8608270dd123440784646796&amp;temp_url_expires=4624968340">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsTesting5.mp4")}5</ordinal>
          <title>Test Automation Strategy</title>
          <decorationLabel>08:00</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsTesting6.mp4?temp_url_sig=be9db294f5d03e5a6ec9497ea75e0d90a347c841&amp;temp_url_expires=4624968348">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsTesting6.mp4")}6</ordinal>
          <title>Acceptance Testing and BDD</title>
          <decorationLabel>09:07</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsTesting7.mp4?temp_url_sig=900d8ee0aaabf9725da2b9b58db896c8119f77e8&amp;temp_url_expires=4624968358">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsTesting7.mp4")}7</ordinal>
          <title>Test Environment Management</title>
          <decorationLabel>12:39</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsTesting8.mp4?temp_url_sig=58ba33c41537b9bd0c6728eb40d1db430d21ac14&amp;temp_url_expires=4624968367">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsTesting8.mp4")}8</ordinal>
          <title>Embedding Test Into Continuous Integration</title>
          <decorationLabel>08:41</decorationLabel>
        </listItemLockup>      
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsTesting9.mp4?temp_url_sig=643044bbad19225bdbc471d48d567b41297290db&amp;temp_url_expires=4624968375">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsTesting9.mp4")}9</ordinal>
          <title>Incremental Integration and Test Virtualization</title>
          <decorationLabel>08:30</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsTesting10.mp4?temp_url_sig=187d3f1a4a5d650e65fa0148f5bb081d248fa58d&amp;temp_url_expires=4624968380">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsTesting10.mp4")}10</ordinal>
          <title>Testing Metrics</title>
          <decorationLabel>09:22</decorationLabel>
        </listItemLockup>
      </section>
    </list>
  </compilationTemplate>
</document>`
}