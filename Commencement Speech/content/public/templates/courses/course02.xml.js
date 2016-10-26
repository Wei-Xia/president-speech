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
          <heroImg src="${this.BASEURL}images/stackImage/stack02.png" width="650" height="650" />
        </itemBanner>
      </relatedContent>
      <header>
        <title>Program Fundamentals</title>
        <subtitle>Practitioner</subtitle>
        <row>
          <text>90 minutes</text>
          <badge src="resource://cc" class="badge"/>
          <badge src="resource://hd" class="badge"/>
        </row>
      </header>

      <section>
        <description allowsZooming="true">Agile Program Fundamentals helps project teams develop the foundational skills to plan, structure and deliver on programs and projects incrementally and iteratively. This builds on the foundational awareness from The Taste of Agile. Subtitle available in: English</description>
      </section>
      <section>
        <listItemLockup autoHighlight="true" videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals1.m4v?temp_url_sig=fc384060c3e42b5f787c6ca4911edace40510cc6&amp;temp_url_expires=4624956664">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals1.m4v")}1</ordinal>
          <title>Pattern Introduction</title>
          <decorationLabel>02:07</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals2.m4v?temp_url_sig=ffbcf98912671f5fba7d9f4f66b184e513627794&amp;temp_url_expires=4624956738">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals2.m4v")}2</ordinal>
          <title>Team Roles and Responsibilities</title>
          <decorationLabel>10:38</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals3.m4v?temp_url_sig=1718e2d0cd9d0d1eb519cf4041f06c23c52bc7f7&amp;temp_url_expires=4624956748">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals3.m4v")}3</ordinal>
          <title>Discovery 1</title>
          <decorationLabel>12:28</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals4.m4v?temp_url_sig=7185e26e06f5b126dd99f449a533b725ea363393&amp;temp_url_expires=4624956756">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals4.m4v")}4</ordinal>
          <title>Discovery 2</title>
          <decorationLabel>06:10</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals5.m4v?temp_url_sig=a815d89ed90e497cbcb82d4c0cc320d7bffb7ab6&amp;temp_url_expires=4624956763">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals5.m4v")}5</ordinal>
          <title>Discovery 3</title>
          <decorationLabel>07:00</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals6.m4v?temp_url_sig=3638db35e8b194c1845190aafae7632165a3dfff&amp;temp_url_expires=4624956771">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals6.m4v")}6</ordinal>
          <title>Delivery and Iteration Basics</title>
          <decorationLabel>08:57</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals7.m4v?temp_url_sig=a664eed4db41bce5af9cdd213546dc57333e9721&amp;temp_url_expires=4624956777">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals7.m4v")}7</ordinal>
          <title>Stories</title>
          <decorationLabel>06:41</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals8.m4v?temp_url_sig=bbb20ecf9824851a9b2f29f761743c6c6d65fc74&amp;temp_url_expires=4624956784">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals8.m4v")}8</ordinal>
          <title>Delivery Setup - Iteration Zero</title>
          <decorationLabel>05:52</decorationLabel>
        </listItemLockup>      
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals9.m4v?temp_url_sig=f89e9002f907ad64c2941b9b9c0ef9d9f50c48c8&amp;temp_url_expires=4624956790">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals9.m4v")}9</ordinal>
          <title>Release and Iteration Planning</title>
          <decorationLabel>12:40</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals10.m4v?temp_url_sig=7a39b3ba5af0e489afb2263d2ab3b6a6065207a6&amp;temp_url_expires=4624956796">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals10.m4v")}10</ordinal>
          <title>Iteration Execution</title>
          <decorationLabel>06:47</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals11.m4v?temp_url_sig=e22e4505e53e9b608c552e3c664bf9c9697716e3&amp;temp_url_expires=4624956866">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals11.m4v")}11</ordinal>
          <title>Big Visible Charts</title>
          <decorationLabel>04:07</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals12.m4v?temp_url_sig=d9893e3084e373dee0bc7268562412e1c30aa813&amp;temp_url_expires=4624956858">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals12.m4v")}12</ordinal>
          <title>Distributed Teams</title>
          <decorationLabel>02:53</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileProgramFundamentals13.m4v?temp_url_sig=bbdc7eb3f499a68ddbea707c41f49f94992263f3&amp;temp_url_expires=4624956873">
          <ordinal minLength="4">${watchGlyphProducer("AgileProgramFundamentals13.m4v")}13</ordinal>
          <title>Tips and Tricks</title>
          <decorationLabel>03:49</decorationLabel>
        </listItemLockup>
      </section>
    </list>
  </compilationTemplate>
</document>`
}