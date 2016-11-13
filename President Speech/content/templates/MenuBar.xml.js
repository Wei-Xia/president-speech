var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <menuBarTemplate>
    <menuBar>
      <menuItem template="${this.BASEURL}templates/Home.xml.js" presentation="menuBarItemPresenter">
        <title>Feature</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/Stack.xml.js" presentation="menuBarItemPresenter">
        <title>Presidents</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/Catalog.xml.js" presentation="historyPresenter">
        <title>Catalog</title>
      </menuItem>
      <!-- <menuItem template="${this.BASEURL}templates/Search.xml.js" presentation="searchPresenter">
        <title>Search</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/Settings.xml.js" presentation="menuBarItemPresenter">
        <title>Settings</title>
      </menuItem> -->
    </menuBar>
  </menuBarTemplate>
</document>`
}