Nose_x = 0;
Nose_y = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
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
        Nose_x = results[0].pose.nose.x-15;
        Nose_y = results[0].pose.nose.y-15;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300 );
    stroke(255, 0, 0);
    fill(255, 0, 0);
    image(clown_nose, Nose_x, Nose_y, 30, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}






