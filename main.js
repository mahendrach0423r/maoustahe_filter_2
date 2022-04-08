function setup()
{
    canvas = createCanvas(500,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    video.center()
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotresults);
}

 function modelloaded()
 {
     console.log("model is inaitialised")
 }

 function gotresults(results)
 {
     console.log(left_eye_x);
     console.log(left_eye_y);
     left_eye_x=results[0].pose.leftEye.x
     left_eye_y=results[0].pose.leftEye.y
     console.log("lefteye_x =" + results[0].pose.leftEye.x)
     console.log("lefteye_y = "+ results[0].pose.leftEye.y)
 }

function draw()
{
    image(video, 0,0,500,500)
}

function take_snapshot()
{
   save('moustahce filter.png')
}