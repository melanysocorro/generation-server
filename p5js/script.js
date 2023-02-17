let currentQuote = "";
let currentBite = "";
let currentBigger = "";
let currentDumb = ""
let buttonOne;
let buttonTwo;
let buttonThree;
let buttonFour;



function setup() {
  createCanvas(650, 450);
  textAlign(CENTER, CENTER);
  textSize(24);
  buttonOne = createButton('Bite Back');
  buttonTwo = createButton('Be the Bigger Person');
  buttonThree = createButton('Play Dumb');
  buttonFour = createButton('start')

  buttonOne.position(118,380);
  buttonTwo.position(260, 380);
  buttonThree.position(473,380);
  buttonOne.mousePressed(biteBack)
  buttonTwo.mousePressed(biggerPerson);
  buttonThree.mousePressed(playDumb);
  buttonFour.mousePressed(restartGame);
}

function draw() {
  background(245, 223, 225);
  noStroke()
  fill(219, 138, 146,90)
  rect(88,50,480,300,5)
  fill(156, 72, 76);
  textFont('courier');
  textSize(13);
  textAlign(CENTER)
  text(currentQuote, 270, 90);
  text(currentBite, 350, 250);
  text(currentBigger, 395, 250);
  text(currentDumb, 400, 250);
  fill(181, 129, 133);
  rect(104,366.5,85,30,2);
  fill(168, 86, 92);
  rect(245.5,366.5,155,30,2);
  fill(156, 33, 43);
  rect(458.5,366.5,94,30,2);
  textStyle(BOLDITALIC)
  text('An Average Day in Customer Service', 325,40)
  textStyle(NORMAL)
}

async function restartGame() {
  console.log("Pressed")
    // make a request to the API to get a new quote
    let response = await fetch("http://localhost:3000/generate", 
  {method: "post", body: {text:"Provide a very rude customer talking to employee, less than 10 words : "}})
  const data = await response.json();
  inputString = data.text;
      currentQuote = inputString;
      currentBigger = ""
      currentBite ="" 
      currentDumb = ""
}
async function biteBack() {
  console.log("Pressed")
    // make a request to the API to get a new quote
    let response = await fetch("http://localhost:3000/generate", 
  {method: "post", body: {text:"Provide a rude answer to a rude customer, less than 10 words : "}})
  const data = await response.json();
  inputString = data.text;
      currentBite = inputString;
      currentDumb = ""
      currentBigger = ""
}
async function biggerPerson() {
  console.log("Pressed")
    // make a request to the API to get a new quote
    let response = await fetch("http://localhost:3000/generate", 
  {method: "post", body: {text:"Provide a useful answer to a rude customer, less than 10 words : "}})
  const data = await response.json();
  inputString = data.text;
      currentBigger = inputString;
      currentBite = ""
      currentDumb =  ""

}
async function playDumb() {
  console.log("Pressed")
    // make a request to the API to get a new quote
    let response = await fetch("http://localhost:3000/generate", 
  {method: "post", body: {text:"Provide a stupid answer to a customer, less than 10 words  : "}})
  const data = await response.json();
  inputString = data.text;
      currentDumb = inputString;
      currentBite = ""
      currentBigger = ""
}