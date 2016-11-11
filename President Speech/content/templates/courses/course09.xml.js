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
          <heroImg src="${this.BASEURL}images/stackImage/stack09.png" width="650" height="650" />
        </itemBanner>
      </relatedContent>
      <header>
        <title>Deployment</title>
        <subtitle>Devops</subtitle>
        <row>
          <text>120 minutes</text>
          <badge src="resource://cc" class="badge"/>
          <badge src="resource://hd" class="badge"/>
        </row>
      </header>

      <section>
        <description allowsZooming="true">The DevOps Deployment course provides the foundational understanding of continuous deployment into production as a critical step to enable continuous delivery. The course covers practices, techniques and patterns used by companies that have been successful at deploying with speed while minimizing risk.</description>
      </section>
      <section>
        <listItemLockup autoHighlight="true" videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDeployment1.m4v?temp_url_sig=f7545cab3d154ae72c3c0a347aed821c0b1ce0a8&amp;temp_url_expires=4624968410">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDeployment1.m4v")}1</ordinal>
          <title>Introduction</title>
          <decorationLabel>15:14</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDeployment2.m4v?temp_url_sig=aa120de22ce096c188e3601a97394247c73a7c3b&amp;temp_url_expires=4624968428">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDeployment2.m4v")}2</ordinal>
          <title>Continuous Delivery Introduction</title>
          <decorationLabel>07:59</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDeployment3.m4v?temp_url_sig=cc4cbaee75b079874827e55a120d3afbb8f92ae3&amp;temp_url_expires=4624968439">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDeployment3.m4v")}3</ordinal>
          <title>Deployment Patterns Part 1</title>
          <decorationLabel>11:18</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDeployment4.m4v?temp_url_sig=60504dce05894a6aebf6c6fff000ff14f23b94a9&amp;temp_url_expires=4624968448">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDeployment4.m4v")}4</ordinal>
          <title>Deployment Patterns Part 2</title>
          <decorationLabel>11:57</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDeployment5.m4v?temp_url_sig=2dda75509fa05ed111966e4888135bb943a807d6&amp;temp_url_expires=4624968455">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDeployment5.m4v")}5</ordinal>
          <title>Deployment Automation</title>
          <decorationLabel>11:32</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDeployment6.m4v?temp_url_sig=96a5588e23985c33591940b05f65b7f972a2e6be&amp;temp_url_expires=4624968461">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDeployment6.m4v")}6</ordinal>
          <title>UCD Certification Process</title>
          <decorationLabel>06:07</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDeployment7.m4v?temp_url_sig=d03396cf571f87776cbb96030375afa9bf082387&amp;temp_url_expires=4624968466">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDeployment7.m4v")}7</ordinal>
          <title>Automated Data Migration to Production</title>
          <decorationLabel>10:56</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDeployment8.m4v?temp_url_sig=c6d24519ed3d2046d5e16d6d69c3394c3e1e7113&amp;temp_url_expires=4624968471">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDeployment8.m4v")}8</ordinal>
          <title>Versioning, Configuration &amp; Script management</title>
          <decorationLabel>10:30</decorationLabel>
        </listItemLockup>      
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDeployment9.m4v?temp_url_sig=437b52faf5fb13d3635c788f37fbbad641910388&amp;temp_url_expires=4624968478">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDeployment9.m4v")}9</ordinal>
          <title>Business Controls and Compliance Automation</title>
          <decorationLabel>09:32</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/AgileDevOpsDeployment10.m4v?temp_url_sig=5511476097c312d702da691b494d9788275745b7&amp;temp_url_expires=4624968485">
          <ordinal minLength="4">${watchGlyphProducer("AgileDevOpsDeployment10.m4v")}10</ordinal>
          <title>Deployment Metrics</title>
          <decorationLabel>07:53</decorationLabel>
        </listItemLockup>
      </section>
    </list>
  </compilationTemplate>
</document>`
}