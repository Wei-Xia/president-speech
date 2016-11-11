var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <alertTemplate>
    <title>Confirmation</title>
    <description>Here is your code: ${getCode()}</description>
    <button action="ConnectToWebsite">
      <text>OK</text>
    </button>
  </alertTemplate>
</document>`
}