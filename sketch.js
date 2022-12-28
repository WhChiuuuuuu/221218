var song
var songIsplay=false //false代表音樂沒撥放,true撥放
var amp

var face_x = []
var face_y = []
var face_size = []

function setup() {
  //background("#ffe5d9")
  createCanvas(windowWidth, windowHeight);

{
  for (var i=0 ; i<7 ; i++){
  face_size[i] = random(0,400)
  face_x [i]= random(0,width)
  face_y [i] = random(0,height)
 }
}

  music_btn = createButton("音樂跳舞")
  music_btn.position(10,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', '#95d5b2');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)

  mouse_btn = createButton("滑鼠跳動")
  mouse_btn.position(10,150)
  mouse_btn.size(350, 100);
  mouse_btn.style('background-color', '#b7e4c7');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

  Speech_btn = createButton("語音辨識(跳舞/不要跳)")
  Speech_btn.position(10,300)
  Speech_btn.size(350, 100);
  Speech_btn.style('background-color', '#d8f3dc');
  Speech_btn.style('font-size', '32px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed) 
}

function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mosueIsplay = false
  amp=new p5.Amplitude()  

}
function mouse_btn_pressed(){
  song.pause()
  mosueIsplay = true
  songIsplay = false

}
function Speech_btn_pressed(){
  myRec.onResult = showResult;
  myRec.start();  

}


function draw() {
  background(255);
  textSize(20)
  text("x:"+mouseX+" Y:"+mouseY,50,50)
  push()
  translate(width/2,height/2)
  //臉
  noStroke()
  fill("#386641")
  ellipse(0,0,400)

  //眼皮
  noStroke()
  fill("#386641")
  ellipse(-150,-175,130)
  ellipse(150,-175,130)

  //黃眼球
  noStroke
  fill("#fcbf49")
  ellipse(-150,-175,100)
  ellipse(150,-175,100)

  //黑眼球
  noStroke()
  fill(0)
  ellipse(-150+mouseX/25,-175+mouseY/25,70)
  ellipse(150+mouseX/25,-175+mouseY/25,70)
 
  //嘴巴
  fill("#d90429")
  ellipse(0-random(-10,10),60,60,140)
  
  //腮紅
  fill("#ffafcc")
  ellipse(-150,-40,30,10)
  ellipse(150,-40,30,10)

  //鼻子
  stroke(0)
  strokeWeight(5)
  line(10,-45,15,-35)
  line(-10,-45,-15,-35)

}
