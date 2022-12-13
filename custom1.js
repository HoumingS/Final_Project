for(let i = 0; i < 6; i++){
  var width = Math.random()*150+300;
  var w = width.toString()+"px";
  var xPos = Math.random()*60+10;
  var x = xPos.toString()+"%";
  var yPos = Math.random()*50+10;
  var y = yPos.toString()+"%";
  var id = i.toString();
  document.write("<img id = 'ad"+i+"' src='images/apple.jpg'"+"style='border: black 1px solid;position:absolute; width:"+w+"; left:"+x+"; top:"+y+";' onclick = 'change();'>");
  document.write("<button id = 'buttona"+i+"'type='button' style='position:absolute;border:#c1c3c3 solid 2px; background-color:transparent;color:#c1c3c3;opacity:0.5;left:"+x+";top:"+y+";' onclick = 'direct(this.id);'>X</button>");
}

for(let i = 0; i < 6; i++){
  var width = Math.random()*150+100;
  var w = width.toString()+"px";
  var xPos = Math.random()*60+5;
  var x = xPos.toString()+"%";
  var yPos = Math.random()*40+20;
  var y = yPos.toString()+"%";
  var id = i.toString();
  document.write("<img id = 'fb"+i+"' src='images/fb.jpg'"+"style='border: black 1px solid;position:absolute; width:"+w+"; left:"+x+"; top:"+y+";' onclick = 'change1();'>");
  document.write("<button id = 'buttonf"+i+"'type='button' style='position:absolute;border:#c1c3c3 solid 2px; background-color:transparent;color:#c1c3c3;opacity:0.5;left:"+x+";top:"+y+";' onclick = 'direct2(this.id);'>X</button>");
}

for(let i = 0; i < 6; i++){
  var width = Math.random()*150+300;
  var w = width.toString()+"px";
  var xPos = Math.random()*60+30;
  var x = xPos.toString()+"%";
  var yPos = Math.random()*60+20;
  var y = yPos.toString()+"%";
  var id = i.toString();
  document.write("<img id = 'google"+i+"' src='images/google.jpg'"+"style='border: black 1px solid;position:absolute; width:"+w+"; left:"+x+"; top:"+y+";' onclick = 'change2();'>");
  document.write("<button id = 'buttong"+i+"'type='button' style='position:absolute;border:#c1c3c3 solid 2px; background-color:transparent;color:#c1c3c3;opacity:0.5;left:"+x+";top:"+y+";' onclick = 'direct1(this.id);'>X</button>");
}
function direct2(clicked_id){
  var index = clicked_id.charAt(clicked_id.length-1);
  console.log(index);
  const ele = document.getElementById(clicked_id);
  ele.remove();
  const ele1 = document.getElementById("fb"+index);
  ele1.remove();
}
function direct1(clicked_id){
  var index = clicked_id.charAt(clicked_id.length-1);
  console.log(index);
  const ele = document.getElementById(clicked_id);
  ele.remove();
  const ele1 = document.getElementById("google"+index);
  ele1.remove();
}
function direct(clicked_id){
  var index = clicked_id.charAt(clicked_id.length-1);
  console.log(index);
  const ele = document.getElementById(clicked_id);
  ele.remove();
  const ele1 = document.getElementById("ad"+index);
  ele1.remove();

}
function change(){
  location.href = "apple.html";
}
function change1(){
  location.href = "fb.html";
}
function change2(){
  location.href = "google.html";
}
