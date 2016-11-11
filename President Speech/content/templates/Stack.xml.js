var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .5ColumnGrid {
      tv-interitem-spacing: 50;
    }
    .blurOverlayImage {
      tv-img-treatment: blurOverlay;
      padding: 210 0 0;
    }
    .blurOverlayBanner {
      padding: 150 0 0;
    }
    .showTextOnHighlight {
        <!-- tv-text-highlight-style: show-on-highlight; -->
    }
    .body {
      color: white
    }
    </style>
  </head>
  <stackTemplate class="body">
    <background>
      <img class="blurOverlayImage" src="${this.BASEURL}images/background/home-bg4.jpg" />
    </background>
    <banner class="blurOverlayBanner">
      <title style="tv-visual-effect: none; color: black;">Presidents of the United States</title>
    </banner>
    <collectionList>
      <grid class="5ColumnGrid">
        <section>
          <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">Barack Obama</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course02.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">George W. Bush</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course03.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">Bill Clinton</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course04.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">George H. W. Bush</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course05.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">Ronald Reagan</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course06.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">Jimmy Carter</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course07.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">Gerald Ford</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course08.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">Richard Nixon</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course09.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">Lyndon B. Johnson</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course10.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">John F. Kennedy</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">Dwight D. Eisenhower</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">Harry S. Truman</title>
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
            <img src="${this.BASEURL}images/homeImage/chefImage/001.png" width="460" height="256" />
            <title class="showTextOnHighlight">Franklin D. Roosevelt</title>
          </lockup>
        </section>
      </grid>
    </collectionList>
  </stackTemplate>
</document>`
}


