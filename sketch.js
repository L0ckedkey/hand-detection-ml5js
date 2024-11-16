let video;
let handPose;
let hands = [];
let painting;
let px = 0;
let py = 0;
let sw = 8;

function preload() {
  handPose = ml5.handPose({ flipped: true });
}

function mousePressed() {
  console.log(hands);
}

function gotHands(results) {
  hands = results;
}

function setup() {
  createCanvas(640, 480);
  painting = createGraphics(640, 480);
  painting.clear();

  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  handPose.detectStart(video, gotHands);
}

function draw(){
  image(video, 0, 0);
  
  
  if(hands.length > 0){
    let hand = hands[0]
    let index = hand.index_finger_tip
    let thumb = hand.thumb_tip
    let x = (index.x + thumb.x) / 2
    let y = (index.y + thumb.y) / 2
    painting.noStroke()

    let d = dist(index.x, index.y, thumb.x, thumb.y)
    if(d < 50){
      painting.fill(255,255,0)
      painting.circle(x,y,d)
    }

    px = x
    py = y
    sw = d / 2
  }
  
  image(painting, 0, 0)
  
}