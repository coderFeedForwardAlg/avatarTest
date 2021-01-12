
let text;
let ans = "avatar";

function setup() {
  createCanvas(400, 400);
  noCanvas();
  createP("what is this show");
  text = createInput();
  
}



function draw() {
  background(220);
  text.changed(isItRight); // get value and do call back a
  
}

function isItRight(){
  if(text.value() === ans){
    createP("yes");
  }else{
    createP("no");
    let b = createButton("need Help?");
    b.mouseClicked(getHelp);
  }
}

function getHelp(){
  createP("it is also a name for the main charicter");
}