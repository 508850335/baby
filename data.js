var data = [];

var dataStr = "001<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
002<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
003<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
"
var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length; i++){
  var c = d[i].split("<br><br>");
  data.push({
    img: c[0]+ ".JPG",
    caption: c[0].split(".")[1],
    desc: c[1]
  });
}

