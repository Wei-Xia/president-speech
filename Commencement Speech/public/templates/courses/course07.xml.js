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
          <heroImg src="${this.BASEURL}images/stackImage/stack07.png" width="650" height="650" />
        </itemBanner>
      </relatedContent>
      <header>
        <title>Development</title>
        <subtitle>Devops</subtitle>
        <row>
          <text>80 minutes</text>
          <badge src="resource://cc" class="badge"/>
          <!-- <badge src="resource://hd" class="badge"/> -->
        </row>
      </header>

      <section>
        <description allowsZooming="true">The DevOps Development course provides foundational insight into critical software development techniques, approaches and metrics that need to be planned for and implemented by delivery teams in their journey toward continuous delivery. The goal is not just to deliver fast but to rigorously, predictably and incrementally delivery. Subtitle available in: English</description>
      </section>
      <section>
        <listItemLockup autoHighlight="true" videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDevelopment1.m4v?temp_url_sig=7d5027da75daae29b4ce689c187751dd262887d9&amp;temp_url_expires=4624968202">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDevelopment1.m4v")}1</ordinal>
          <title>Strategy</title>
          <decorationLabel>09:50</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDevelopment2.m4v?temp_url_sig=23431d26da262a110ca801cabef969bf95824061&amp;temp_url_expires=4624968227">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDevelopment2.m4v")}2</ordinal>
          <title>Extreme Programming</title>
          <decorationLabel>13:35</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDevelopment3.m4v?temp_url_sig=b7c8eac9cd0d7896c191c64c76004b2e672b52a5&amp;temp_url_expires=4624968241">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDevelopment3.m4v")}3</ordinal>
          <title>Test Driven Development</title>
          <decorationLabel>05:51</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDevelopment4.m4v?temp_url_sig=13a02c74b85ab3a928ff4c74f3994f2be28aa4cf&amp;temp_url_expires=4624968247">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDevelopment4.m4v")}4</ordinal>
          <title>Static Analysis and Technical Debt</title>
          <decorationLabel>06:52</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDevelopment5.m4v?temp_url_sig=455037c92175a621f0d4f190f4721b726f94d6d3&amp;temp_url_expires=4624968254">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDevelopment5.m4v")}5</ordinal>
          <title>Continuous Build and Integration</title>
          <decorationLabel>09:26</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDevelopment6.m4v?temp_url_sig=60d63a8017c727539bf00964c975b7e47f24d79b&amp;temp_url_expires=4624968259">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDevelopment6.m4v")}6</ordinal>
          <title>Design Patterns</title>
          <decorationLabel>08:00</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDevelopment7.m4v?temp_url_sig=259f046a11042da152b29e3cb4cca1fac185ab94&amp;temp_url_expires=4624968264">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDevelopment7.m4v")}7</ordinal>
          <title>Born on the Cloud - Design</title>
          <decorationLabel>06:36</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDevelopment8.m4v?temp_url_sig=2148c7c534a18b9b4b453f10a8f15c0ed863f341&amp;temp_url_expires=4624968269">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDevelopment8.m4v")}8</ordinal>
          <title>Born on the Cloud - Failure and Resiliency</title>
          <decorationLabel>06:19</decorationLabel>
        </listItemLockup>      
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDevelopment9.m4v?temp_url_sig=cf3f90e956e25f85663bf200a7c9851d9c67be6e&amp;temp_url_expires=4624968275">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDevelopment9.m4v")}9</ordinal>
          <title>Feature Decoupling from Release</title>
          <decorationLabel>07:10</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDevelopment10.m4v?temp_url_sig=44f6084ba1fc2d1909c140bac1d12e4b4b6b3310&amp;temp_url_expires=4624968281">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDevelopment10.m4v")}10</ordinal>
          <title>Development Metrics and Measurements</title>
          <decorationLabel>08:05</decorationLabel>
        </listItemLockup>
      </section>
    </list>
  </compilationTemplate>
</document>`
}