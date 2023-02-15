let inputString = "";
let index = 0

function setup(){
  createCanvas(400,400)
  textSize(32)
  let getTextFromAPI = async ()=> {
    const response = await
    fetch("http:localhost:3000/generate");
    const data = await response.json();
    inputString = data.text;
  }

  getTextFromAPI();
}

function draw(){
  background(230, 218, 2357);
  fill(147, 128, 156)
  textStyle(BOLD)
  textFont('Courier')
  textSize(24);
  text(inputString.substring(0,index),50,200);
  if(index < inputString.length){
    index++;
  }
}

setInterval(function(){
  index++;
}



)


