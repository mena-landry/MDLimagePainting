var img;  // Declare variable 'img'.

function setup() {
  createCanvas(1630, 1480);
  img = loadImage("assets/sunflower.png");  // Load the image
    frameRate(1);
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, mouseX, mouseY);
  // Displays the image at point (0, height/2) at half size
    //for (var i=100; i<300; i++) {
    //    rotate(0.01);
    //    image(img, i, i, img.width/random(16), img.height/random(16));
    //}
  
}