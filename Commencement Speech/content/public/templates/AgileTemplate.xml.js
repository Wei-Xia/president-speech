var Template = function() {
    return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <catalogTemplate> 
      <banner> 
        <title>Agile Academy Highlight</title>
      </banner>
      <list> 
        <section> 
	  <listItemLockup> 
	    <title>Somers Agile Team</title>
	    <decorationLabel>2</decorationLabel>
            //1. add from here
	    <relatedContent> 
	      <grid>
	        <section> 
                  //2
		  <lockup videoURL="file:///Users/weixia/Desktop/client/videos/001.mp4">
		    <img src="${this.BASEURL}images/IBM1.jpg" width="500" height="308" />
		  </lockup>
		  <lockup videoURL="http://agile-academy-tvos-content.mybluemix.net/static/videos/001.mp4">
		    <img src="${this.BASEURL}images/IBM2.jpg" width="500" height="308" />
		  </lockup>
		</section>
	      </grid>
	    </relatedContent>
	  </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}