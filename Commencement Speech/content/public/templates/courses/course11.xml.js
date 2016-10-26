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
          <heroImg src="${this.BASEURL}images/stackImage/stack11.png" width="650" height="650" />
        </itemBanner>
      </relatedContent>
      <header>
        <title>A Taste of Agile</title>
        <subtitle>Aware</subtitle>
        <row>
          <text>120 minutes</text>
          <!-- <badge src="resource://cc" class="badge"/> -->
          <badge src="resource://hd" class="badge"/>
        </row>
      </header>

      <section>
        <description allowsZooming="true">This course is a high-level overview for anyone that is thinking about becoming an Agile Team Coach. This course is designed to show you the different roles and practices that Agile Team Coaches perform, it is not intended that you will be able to complete this course and begin working as an Agile Team Coach.
        </description>
      </section>
      <section>
        <listItemLockup autoHighlight="true" videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching1.mp4?temp_url_sig=ff744dff5fc96c5722435a66bfae5b92710e6e16&amp;temp_url_expires=4624968552">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching1.mp4")}1</ordinal>
          <title>Introduction</title>
          <decorationLabel>01:57</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching2.mp4?temp_url_sig=fb86da7d227d67d1310a682814e63fd9991aca53&amp;temp_url_expires=4624968568">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching2.mp4")}2</ordinal>
          <title>Role and Responsibilities</title>
          <decorationLabel>05:03</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching3.mp4?temp_url_sig=4e89ba10b46d233701b10eaa370ba588c9a202a9&amp;temp_url_expires=4624968574">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching3.mp4")}3</ordinal>
          <title>Working With Agile Teams</title>
          <decorationLabel>03:26</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching4.mp4?temp_url_sig=d02efc178930a93a1e1104a1f8b85e549133f153&amp;temp_url_expires=4624968579">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching4.mp4")}4</ordinal>
          <title>Coaching Agile Teams</title>
          <decorationLabel>06:15</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching5.mp4?temp_url_sig=fc4154720bfa4425b3c6ef48ab930e0b99d5a8d1&amp;temp_url_expires=4624968583">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching5.mp4")}5</ordinal>
          <title>Coaching Individuals</title>
          <decorationLabel>09:01</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching6.mp4?temp_url_sig=4697a24511448fe26b5ce2e3bd9c065d278477d2&amp;temp_url_expires=4624968592">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching6.mp4")}6</ordinal>
          <title>Agile Team Coach as Mentor</title>
          <decorationLabel>05:50</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching7.mp4?temp_url_sig=766d5258104a79d56ef5f47d4088ed887b25b71c&amp;temp_url_expires=4624968597">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching7.mp4")}7</ordinal>
          <title>Agile Team Coach as Facilitator</title>
          <decorationLabel>07:21</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching8.mp4?temp_url_sig=485d3f421563103d4fec46fe4f58536ca4068e0f&amp;temp_url_expires=4624968610">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching8.mp4")}8</ordinal>
          <title>Agile Team Coach as Trainer</title>
          <decorationLabel>03:47</decorationLabel>
        </listItemLockup>      
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching9.mp4?temp_url_sig=68eba2f47fcddb93fa303077d1cc42cfc8e6d47b&amp;temp_url_expires=4624968615">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching9.mp4")}9</ordinal>
          <title>Agile Team Coach as Consultant</title>
          <decorationLabel>02:39</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching10.mp4?temp_url_sig=dcff18a774dfad8cb99a15d9f3349c57f6c9c43b&amp;temp_url_expires=4624968619">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching10.mp4")}10</ordinal>
          <title>Agile Team Coach During Project Lifecycle</title>
          <decorationLabel>05:28</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileTeamCoaching11.mp4?temp_url_sig=3a25e92d45f2d61d39d3ab4be864a098afe44151&amp;temp_url_expires=4624968628">
          <ordinal minLength="4">${watchGlyphProducer("AgileTeamCoaching11.mp4")}11</ordinal>
          <title>Attributes of Successful Agile Team Coaches</title>
          <decorationLabel>08:45</decorationLabel>
        </listItemLockup>
      </section>
    </list>
  </compilationTemplate>
</document>`
}