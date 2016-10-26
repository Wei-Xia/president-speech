var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <menuBarTemplate>
    <menuBar>
      <menuItem template="${this.BASEURL}templates/Home.xml.js" presentation="menuBarItemPresenter">
        <title>Home</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/Stack.xml.js" presentation="menuBarItemPresenter">
        <title>Agile Courses</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/History.xml.js" presentation="historyPresenter">
        <title>History</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/Search.xml.js" presentation="searchPresenter">
        <title>Search</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/Settings.xml.js" presentation="menuBarItemPresenter">
        <title>Settings</title>
      </menuItem>
    </menuBar>
  </menuBarTemplate>
</document>`
}