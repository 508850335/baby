var data = [];

var dataStr = "3.001<br><br>宝贝<br><br><br>2.002<br><br>宝贝<br><br><br>3.003<br><br>宝贝"
var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length; i++){
  var c = d[i].split("<br><br>");
  data.push({
    img: c[0]+ ".JPG",
    caption: "宝贝",
    desc: c[1]
  });
}

