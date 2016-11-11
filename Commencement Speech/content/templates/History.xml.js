 var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>  
  <document>  
      <head>
          <style>
              .5Columnshelf {
                  tv-interitem-spacing: 50;
              }
              .blurOverlayImage {
                tv-img-treatment: blurOverlay;
                padding: 210 0 0;
              }
              .blurOverlayBanner {
                padding: 150 0 0;
              }
              .progressOverlay {
                  padding: 0;
              }
              .watchedOverlayImg {
                  tv-position: bottom-right;
                  tv-align: right;
              }
              .body {
                color: white
              }
          </style>
      </head>
   <stackTemplate class="body">  
        <background>
            <img class="blurOverlayImage" src="${this.BASEURL}images/background/stack-top.png"/>
        </background>
        <banner class="blurOverlayBanner">
            <title style="tv-visual-effect: none; color: rgba(255, 255, 255, 1);">History</title>
        </banner>
        
    <collectionList> 

    </collectionList>  
   </stackTemplate>  
  </document>
  `  
 }  
