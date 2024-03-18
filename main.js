function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(400,400)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  function gotPoses(results){
    if (results.length>0){
      console.log(results)
      console.log('noseX ='+ results[0].pose.nose.x)
      console.log('noseY ='+ results[0].pose.nose.y)
  }
}
function draw() {
  image(video, 0, 0, 400, 400)
}

function modelLoaded(){
    console.log('¡El modelo cargo exitosamente papu!')
}

function preload() {
   
}

function take_snapshot(){
    save('Imagen')
}