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
    <background>
        <img src="${this.BASEURL}images/stackImage/bg_list_uber.jpg" />
    </background>
    
    <list>
      <!-- <relatedContent>
        <itemBanner>
          <heroImg src="${this.BASEURL}images/stackImage/stack01.png" width="650" height="650" />
          ${getUUID()}
        </itemBanner>
      </relatedContent> -->
      <header>
        <title>A Taste of Agile</title>
        <subtitle>Aware</subtitle>
        <row>
          <text>120 minutes</text>
            <badge src="resource://cc" class="badge"/>
            <!-- <badge src="resource://hd" class="badge"/> -->
        </row>
      </header>
      <section>
        <description class="description" allowsZooming="true">The Agile Academy's first training course is designed to provide a basic awareness of agile - why, where, how, when and more. It provides a foundational understanding of the values and principles of Agile, and the team dynamics that create success. "A Taste of Agile" is appropriate for everyone - executives, managers and practitioners. Subtitle available in: English</description>
      </section>
      <section>
        <listItemLockup autoHighlight="true" videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile1.m4v?temp_url_sig=f2ea13f86c32e1ef6f735bcedb06cf12044ce929&amp;temp_url_expires=4624350881">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile1.m4v")}1</ordinal>
          <title>Agile Challenge - Does anyone have a pencil?</title>
          <decorationLabel>15:28</decorationLabel>
        </listItemLockup>        
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile2.m4v?temp_url_sig=fb067c8e03c732841baecc05d8a4bfe4d0d7ea68&amp;temp_url_expires=4624350892">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile2.m4v")}2</ordinal>
          <title>Agile Principles, Values, and Behaviors</title>
          <decorationLabel>06:12</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile3.m4v?temp_url_sig=830a9c79eb0b8a0312b1cf3b9b1154d528fca8ca&amp;temp_url_expires=4624350902">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile3.m4v")}3</ordinal>
          <title>Agile Practices</title>
          <decorationLabel>23:50</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile4.m4v?temp_url_sig=725e6d09e6a558c54432fa29a9798d834e54a4ea&amp;temp_url_expires=4624350910">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile4.m4v")}4</ordinal>
          <title>The History of Agile</title>
          <decorationLabel>06:42</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile5.m4v?temp_url_sig=cc4400397af4737e953dc342a03788b53df6eb2c&amp;temp_url_expires=4624350916">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile5.m4v")}5</ordinal>
          <title>Review (Quiz 1)</title>
          <decorationLabel>02:58</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile6.m4v?temp_url_sig=8bcbef300154a6c1fbc02b2950d9c77dff1f1ab4&amp;temp_url_expires=4624350923">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile6.m4v")}6</ordinal>
          <title>Agile for Leaders</title>
          <decorationLabel>17:54</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile7.m4v?temp_url_sig=6abb1913d6e0035579321f67e9e3538098d137b1&amp;temp_url_expires=4624350929">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile7.m4v")}7</ordinal>
          <title>Review (Quiz 2)</title>
          <decorationLabel>04:31</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile8.m4v?temp_url_sig=7c60050312bacb957ecf012ee079bd9a510cf349&amp;temp_url_expires=4624350934">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile8.m4v")}8</ordinal>
          <title>Agile Strategy</title>
          <decorationLabel>10:39</decorationLabel>
        </listItemLockup>      
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile9.m4v?temp_url_sig=ed13e6cabc5596af79ec4f79825d9bce2331b42b&amp;temp_url_expires=4624350939">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile9.m4v")}9</ordinal>
          <title>Agile Program Pattern</title>
          <decorationLabel>08:12</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile10.m4v?temp_url_sig=5808909b933cfa1d6a5f25abf5efb9e2079fc76a&amp;temp_url_expires=4624350945">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile10.m4v")}10</ordinal>
          <title>Agile Operations Pattern</title>
          <decorationLabel>14:42</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile11.m4v?temp_url_sig=09f483d7188ad6bfadf474418b8cccd25a10112c&amp;temp_url_expires=4624350951">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile11.m4v")}11</ordinal>
          <title>Agile Myths</title>
          <decorationLabel>10:54</decorationLabel>
        </listItemLockup>
        <listItemLockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/ATasteOfAgile12.m4v?temp_url_sig=7774c609241ecf0162fe11315cfaa9bf16960661&amp;temp_url_expires=4624350957">
          <ordinal minLength="4">${watchGlyphProducer("ATasteOfAgile12.m4v")}12</ordinal>
          <title>Review (Quiz 3)</title>
          <decorationLabel>01:29</decorationLabel>
        </listItemLockup>
      </section>
    </list>
  </compilationTemplate>
</document>`
}