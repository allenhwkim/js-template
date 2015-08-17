# js-template
Rewritten and Improved John Resig's micro javascipt template

js-template is based on John Resig's microTemplate function. However the orinal version has got to be improved.

  - No more error with single quote
  - Better error message handling wth line number
  - No more scrambled output by keeping white spaces as it is
  - Less undefined variable errors
  - include feature. e.g. include('partial.html', data)

Install
-------

    npm install js-template

Example
--------

    var jsTemplate = require('js-template');
    var templateHtml = "Hello <b><%= world %></b>";
    var data = {world: "You!!"};
    var output = jsTemplate(templateHrml, data);
    console.log(output); // Hello <b>You!!</b>


<table>
<tr><th>Template<th>Data<th>output</tr>
<tr>
  <td><pre><code>
&lt;div id="&lt;%= id %>" class="&lt;%=(i % 2 == 1 ? "even" : "")%>">'
  &lt;div class="grid_1 alpha right">
    &lt;img class="righted" src="&lt;%= profileImageUrl %>"/>
  &lt;/div>
  &lt;div class="grid_6 omega contents">
    &lt;a href="/&lt;%= fromUser %>">&lt;%= fromUser %>&lt;/a>
  &lt;/div>
&lt;/div>
&lt;% for (var i = 0; i &lt; users.length; i++) { %>
  &lt;a href="&lt;%=users[i].url%>">&lt;%= users[i].name %>&lt;/a>
&lt;% } %>
  </code></pre></td>
  <td><pre><code>
{
  id: 'myid',
  i: 11,
  profileImageUrl: 'myurl',
  fromUser: 'me',
  users: [
    {name: "John", url: "john.com"},
    {name: "Jane", url: "jane.com"}
  ]
};
  </code></pre></td>
  <td><pre><code>
&lt;div id="myid" class="even">
  &lt;div class="grid_1 alpha right">
    &lt;img class="righted" src="myurl"/>
  &lt;/div>
  &lt;div class="grid_6 omega contents">
    &lt;a href="/me">me&lt;/a>:&lt;/b>
  &lt;/div>
&lt;/div>
  &lt;a href="john.com">John&lt;/a>
  &lt;a href="jane.com">Jane&lt;/a>
  </code></pre></td>
</tr>
<tr>
  <td><pre><code>
&lt;div>
  &lt;%= include("spec/test-include.html", data) %>
&lt;/div>
  </code></pre></td>
  <td><pre><code>
{
  users: [
    {name: "John", url: "john.com"},
    {name: "Jane", url: "jane.com"}
  ]
};
  </code></pre></td>
  <td><pre><code>
&lt;div>
  &lt;a href="john.com">John&lt;/a>
  &lt;a href="jane.com">Jane&lt;/a>
&lt;/div>
  </code></pre></td>
</tr>
</table>
