noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    createCanvas(100, 100);
    textAlign(CENTER, CENTER);

    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,100)

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "nose = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
    }

function modelLoaded(){
    console.log('PoseNet is Inintialized!');
}
function draw() {
    background('cyan');
    textSize(difference);
    fill('red');
    text('Naitik', 50, 400);
}