// PRIVACY POLICY FOR VIEWERS:
// An innocent person like Fun X Time does NOT record your IP. We do not record IPs.
// This file existed for just storing this piece of hackerpiece.

$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
});