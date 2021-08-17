noseX= 0;
noseY= 0;
function preload(){
    beard= loadImage('https://i.postimg.cc/hvx01N9m/18-183191-beard-png-free-icons-and-png-backgrounds-santa-beard-png.jpg');
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();



    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(beard,noseX-50,noseY, 100, 100);
}

function take_snapshot(){
    save('myselfie.png');
}

function modelLoaded(){
    console.log("Pose is started")
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    console.log("nose"+results[0].pose.nose.x);
    console.log("nose"+results[0].pose.nose.y);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
}
}