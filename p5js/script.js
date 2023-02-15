let currentQuote ="";
let charIndex = 0;

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
  textSize(20);
  text(currentQuote, width/2, height/2);
}

function keyPressed() {
  if (charIndex >= currentQuote.length) {
    // make a request to the API to get a new quote
    httpGet("http://localhost:3000/generate", "text",
     function(response) {
      currentQuote = response;
      charIndex = 0;
    });
  } else {
    // show the next character
    charIndex++;
  }
}


