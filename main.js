Nose_x = 0;
Nose_y = 0;

function preload()
{

}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialize");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("Nose_X" + Nose_x);
        console.log("Nose_Y" + Nose_y);
        Nose_x = results[0].pose.nose.x;
        Nose_y = results[0].pose.nose.y;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300 );
    circle(Nose_x, Nose_y, 20);
    stroke(255, 0, 0);
    fill(255, 0, 0);
}

function take_snapshot()
{
    save('myFilterImage.png');
}






