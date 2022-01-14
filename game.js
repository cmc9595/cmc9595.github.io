function Shape(x, y, w, h, fill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = fill;

    this.move = function(){
      this.x += Math.floor(Math.random()*2 - 1); //0, 1
      this.y += Math.floor(Math.random()*2 - 1);
    }
  }
function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}
  // get canvas element.
var elem = document.getElementById('myCanvas');

// check if context exist
if (elem.getContext) {

  var myRect = [];
  myRect.push(new Shape(10, 0, 25, 25, "#0000FF"))
  myRect.push(new Shape(0, 40, 25, 25, "#0000FF"))
  myRect.push(new Shape(0, 80, 25, 25, "#0000FF"))

  context = elem.getContext('2d');
  for (var i in myRect) {
      oRec = myRect[i];
      context.fillStyle = oRec.fill;
      context.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);

  }
  function drawRecs(){
    for(var i in myRect){
      oRec = myRect[i];
      oRec.move();
      context.fillStyle = oRec.fill;
      context.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);
    }
  }
  var cnt = 0;
  while(cnt<100){
    cnt++;
    sleep(3000);
    drawRecs();
  }
  //// x, y, width, height
  //context.fillRect(0, 0, 50, 50);

  //// x, y, width, height      
  //context.fillRect(75, 0, 50, 50);
}