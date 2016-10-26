var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
      .descriptionLayout {
        tv-text-max-lines: 8;
      }
    </style>
  </head>
  <listTemplate>
    <list>
      <header>
        <title>Settings</title>
      </header>
      <section>
        <listItemLockup action = "getCode" presentation="modalDialogPresenter">
          <title>Connect to Website</title>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/EraseWatchHistory.xml.js" presentation="modalDialogPresenter">
          <title>Erase Watch History</title>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Term.xml.js" presentation="modalDialogPresenter">
          <title>Terms of Use</title>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/About.xml.js" presentation="modalDialogPresenter">
          <title>About</title>
        </listItemLockup>
        <!-- <listItemLockup action = "getCodetest" template="${this.BASEURL}templates/ConnectToWebsite.xml.js" presentation="modalDialogPresenter">
          <title>Test</title>
          <relatedContent>
            <lockup> template="${this.BASEURL}templates/ConnectToWebsite.xml.js"
              <img src="${this.BASEURL}images/homeImage/top3.png" width="857" height="482" />
              <description class="descriptionLayout">An alert template displays a message on screen and asks the user to perform some action, such as confirm a purchase or destructive action.</description>
            </lockup>
          </relatedContent>
        </listItemLockup> -->
      </section>
        <relatedContent>
            <img src="${this.BASEURL}images/settings.png" width="1800" height="1500" />
        </relatedContent>
    </list>
  </listTemplate>
</document>`
}


<!-- // <document>
//   <head>
//   </head>
//   <alertTemplate>    
//     <button id="connect">
//       <text>Connect to Website</text>
//     </button>
//     <button id="eraseHistory">
//       <text>Erase Watch History</text>
//     </button>
//   </alertTemplate>
// </document>` -->