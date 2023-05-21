noseX = 0;
noseY = 0;
right_wrist_x = 0;
left_wrist_x = 0;
difference = 0;

function preload() {

}

function draw() {
    background('bisque');

    document.getElementById('square').innerHTML = "Width and Height of the square is = " + difference + "px😍😴";
    fill('orangered');
    stroke('red');
    textSize(difference);
    text('ARWA', noseX, noseY);
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(750, 250);
    camera = createCapture(VIDEO);
    camera.size(400, 400);
    camera.position(750, 650);

    posenet = ml5.poseNet(camera, model_loaded);
    posenet.on('pose', got_poses);
}

function model_loaded() {
    console.log("Your program has been initialized!");
}

function got_poses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = Math.floor(left_wrist_x - right_wrist_x);
    } else {
        console.log('error');
    }
}