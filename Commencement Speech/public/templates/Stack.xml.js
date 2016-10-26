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
      <img class="blurOverlayImage" src="${this.BASEURL}images/background/agilecourse_top.png" />
    </background>
    <banner class="blurOverlayBanner">
      <title style="tv-visual-effect: none; color: rgba(255, 255, 255, 1);">Agile Course Playlists</title>
    </banner>
    <collectionList>
      <grid class="5ColumnGrid">
        <section>
          <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("01ATasteOfAgile")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">A Taste of Agile</title> -->
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course02.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("02AgileProgramFundamentals")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">Program Fundamentals</title> -->
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course03.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("03AgileOperationsFundamentals")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">Operations Fundamentals</title> -->
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course04.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("04AgileProjectIterationChangeManagement")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">Project, Iteration, and Change Management</title> -->
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course05.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("05AgileProductOwnership")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">Product Ownership</title> -->
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course06.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("06AgileLeadershipStrategy")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">Leadership and Strategy</title> -->
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course07.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("07AgileDevOpsDevelopment")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">Development</title> -->
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course08.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("08AgileDevOpsTesting")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">Testing</title> -->
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course09.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("09AgileDevOpsDeployment")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">Deployment</title> -->
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course10.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("10AgileDevOpsInfrastructure")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">Infrastructure</title> -->
          </lockup>
          <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
            <img src="${this.BASEURL}${determineWatchProgress("11AgileTeamCoaching")}" width="460" height="256" />
            <!-- <title class="showTextOnHighlight">Team Coaching</title> -->
          </lockup>
        </section>
      </grid>
    </collectionList>
  </stackTemplate>
</document>`
}


