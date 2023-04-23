img="";

function setup()
{
    canvas = createCanvas(700,600);
    canvas.center();
}

function preload()
{
    img=loadImage("Tv and AC.jpg");
}

function draw()
{
    image(img,0,0,700,600);
    fill("#ff0000")
    text("TV And AC",35,60);
    noFill();
    stroke("#FF0000"); 
    rect(30,60,750,600);
}

function back()
{
    window.location="iindex.html";
}