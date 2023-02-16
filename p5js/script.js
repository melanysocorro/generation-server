let currentQuote = "quotes!";

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(230, 218, 2357);
  fill(147, 128, 156)
  textStyle(BOLD)
  textFont('Courier')
  textSize(7);
  text(currentQuote, width/2, height/2);
}

async function keyPressed() {
  console.log("Pressed")
    // make a request to the API to get a new quote
    let response = await fetch("http://localhost:3000/generate", 
  {method: "post", body: {text:"Provide a quote : "}})
  const data = await response.json();
  inputString = data.text;
      currentQuote = inputString;
}


