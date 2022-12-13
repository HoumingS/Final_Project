
function skip(){

  let xPos = Math.random()*50+30;
  let yPos = Math.random()*50+30;
  let difX = xPos - 1.5;
  let diffX = difX.toString();
  let difY = yPos-12;
  let diffY = difY.toString();
  let x = xPos.toString();
  let y = yPos.toString();
  console.log(x);
  document.getElementById("textArea").style.left = x+"%";
  document.getElementById("tab").style.left = diffX+"%"
  document.getElementById("textArea").style.top = y+"%";
  document.getElementById("tab").style.top = diffY+"%";
}
function popUp(){
  alert("YOU CANNOT");
}
