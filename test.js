var assert = require('assert');
var jsTemplate = require(__dirname + '/index.js');

/*******************************************************
 * `<%= %>` expression test
 *******************************************************/
var layout, data, expectedOutput, output;
layout = [
  '<script type="text/html" id="item_tmpl">',
  '  <div id="<%= id %>" class="<%=(i % 2 == 1 ? "even" : "")%>">',
  '    <div class="grid_1 alpha right">',
  '      <img class="righted" src="<%= profile_image_url %>"/>',
  '    </div>',
  '    <div class="grid_6 omega contents">',
  '      <p><b><a href="/<%= from_user %>"><%= from_user %></a>:</b> <%= text %></p>',
  '    </div>',
  '  </div>',
  '</script>'
].join("\n");

data = { //jshint ignore:line
  id: 'myid',
  i: 11,
  profile_image_url: 'myurl', //jshint ignore:line
  from_user: 'me' //jshint ignore:line
};

expectedOutput = [
  '<script type="text/html" id="item_tmpl">',
  '  <div id="myid" class="even">',
  '    <div class="grid_1 alpha right">',
  '      <img class="righted" src="myurl"/>',
  '    </div>',
  '    <div class="grid_6 omega contents">',
  '      <p><b><a href="/me">me</a>:</b> </p>',
  '    </div>',
  '  </div>',
  '</script>',
].join("\n");

output = jsTemplate(layout, data, true);
assert.equal(output.trim(), expectedOutput.trim());
