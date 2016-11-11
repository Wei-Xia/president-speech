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
          <heroImg src="${this.BASEURL}images/stackImage/stack10.jpg" width="650" height="650" />
        </itemBanner>
      </relatedContent>
      <header>
        <title>Infrastructure</title>
        <subtitle>Devops</subtitle>
        <row>
          <text>120 minutes</text>
          <!-- <badge src="resource://cc" class="badge"/>
          <badge src="resource://hd" class="badge"/> -->
        </row>
      </header>

      <section>
        <description allowsZooming="true">In this course we want to show you how Agile can be applied to infrastructure, along with ways to embrace Agile values and practices as part of an evolving whole team that seeks to be more inclusive of infrastructure and operations skills. 
        </description>
      </section>
      <section>
        <listItemLockup autoHighlight="true" videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsInfrastructure1.mp4?temp_url_sig=21a13a838ae3f33ff89b60d2d5709b04f4c85fd9&amp;temp_url_expires=4624968499">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsInfrastructure1.mp4")}1</ordinal>
          <title>Infrastructure Strategy</title>
          <decorationLabel>10:41</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsInfrastructure2.mp4?temp_url_sig=5068c80a2171586f5cb57bd0602d939d28d764a8&amp;temp_url_expires=4624968519">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsInfrastructure2.mp4")}2</ordinal>
          <title>Virtualization and Self-Service Provisioning</title>
          <decorationLabel>12:45</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsInfrastructure3.mp4?temp_url_sig=121862628cee7b48f9455c6fe34364da16196041&amp;temp_url_expires=4624968527">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsInfrastructure3.mp4")}3</ordinal>
          <title>Operations</title>
          <decorationLabel>10:10</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsInfrastructure4.mp4?temp_url_sig=2e55da31daa62ec54151e9b86106222711a9eed0&amp;temp_url_expires=4624968532">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsInfrastructure4.mp4")}4</ordinal>
          <title>Operational Technical Debt</title>
          <decorationLabel>08:11</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsInfrastructure5.mp4?temp_url_sig=c6272c8b77026419bbbfa9e5acc8520d00a2e917&amp;temp_url_expires=4624968537">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsInfrastructure5.mp4")}5</ordinal>
          <title>Operations Metrics</title>
          <decorationLabel>11:34</decorationLabel>
        </listItemLockup>
      </section>
    </list>
  </compilationTemplate>
</document>`
}