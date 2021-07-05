song1 = "";
song2 = "";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);

}

function preload() 
{
     song1 = loadSound("Harry Potter Theme Song.mp3"); 
     song2 = loadSound("Dance Monkey mp3.mp3");
 }

 function draw() { 
     image(video, 0, 0, 600, 500); 
     song1_status = song1.isPlaying(); 
     song2_status = song2.isPlaying();
      fill("#FF0000"); 
      stroke("#FF0000"); 
      if(scoreRightWrist > 0.2)
       { circle(rightWristX,rightWristY,20);
        
         song2.stop(); if(song1_status == false) 
             
         { song1.play(); document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song" }
       }
          if(scoreLeftWrist > 0.2) { circle(leftWristX,leftWristY,20);
                                    song1.stop(); if(song2_status == false)
             { song2.play();
              document.getElementById("song").innerHTML = "Playing - Dance Monkey Song" } 
                                   }
 }
