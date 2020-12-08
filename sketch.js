/*
Think of each of these objects as a section/screen in your story. 'Text' is the
narrative element, option(1/2) is the text that's shown to the user, and
target(1/2) is a reference to the next story section that option activates.
*/
//known bugs
//cannot allow user to go back - temporary fix by coding it to send to next page
//line 52 would not center align, had to set boundries within option1

//desired features
//animated text/strings
//Spite screen
//allow for mouse clicking to advance screens


// Create a variable for each stage in your game //easier way to do/organize this? aarays?
let title;
let beginningQuote;
let openingPassage1, openingPassage2, openingPassage3;
let backstory1, backstory2;
let choice1;
let keepThePhoto;
let leaveThePhoto;
let moonIntro1, moonIntro2, moonIntro3;
let moonChoice1
let lunarLieutenant1, lunarLieutenant2
let lunarCommander1, lunarCommander2

// let letterSpacing; //future coding for text animation?

//Create a variable to keep track of the current section of the story.
let current;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createStory();

  current = title;
  console.log(current)
}

function draw() {
  background(50);

  strokeWeight(10); // screen dividers
  line(0, windowHeight * 0.90, windowWidth, windowHeight * 0.9);
  line(windowWidth * 0.50, windowHeight * 0.9, windowWidth * 0.50, windowHeight);

  textAlign(LEFT); //text styles
  fill(255, 255, 0);
  textSize(windowWidth / 35);
  // Draw the text for the current option on the screen
  text(current.text, windowWidth * 0.0625, windowHeight * 0.0625, windowWidth * 0.9375, windowHeight * 0.8);
  textAlign(CENTER);
  text(current.option1, 0, windowHeight * 0.93, windowWidth * 0.50, windowHeight * 0.9);

  text(current.option2, windowWidth * 0.50, windowHeight * 0.93, windowWidth * 0.5, windowHeight * 0.93);

}

// Simple keymapping to options.
function keyPressed() {
  if (key == 'a') {
    if (current.target1 != null) { // Make sure a valid option exists.
      current = current.target1; // Advance to next story section
    }
  }
  if (key == 'd') {
    if (current.target1 != null) { // Make sure a valid option exists
      current = current.target2; // Advance to next story section
    }
  }
}

class StorySection {
  //Construct the object with necessary section info
  constructor(_text, _option1, _target1, _option2, _target2) {
    this.text = _text;
    this.option1 = _option1;
    this.target1 = _target1;
    this.option2 = _option2;
    this.target2 = _target2;
  }
}


//// STORY ////

//In your final game this bit could live in a separate file
function createStory() {
  // In this example you need to initialise these in reverse order, so that
  // when you assign a target it already exists. I.e., start at the end!

  lunarEnd4 = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1
    null //For end sections, there is no target
  )
  lunarEnd3 = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1
    null //For end sections, there is no target
  )

  lunarEnd2 = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1S
    null //For end sections, there is no target
  )

  lunarEnd1 = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1
    null //For end sections, there is no target
  )


  lunarCommander2 = new StorySection(
    "Placeholder",
    "(A)Next",
    moonIntro3,
    "",
    moonIntro3
  )
  lunarCommander1 = new StorySection(
    "Placeholder",
    "(A)Next",
    lunarCommander2,
    "",
    lunarCommander2
  )
  lunarLieutenant2 = new StorySection(
    "Placeholder",
    "(A)Next",
    moonIntro3,
    "",
    moonIntro3
  )
  lunarLieutenant1 = new StorySection(
    "Placeholder",
    "(A)Next",
    lunarLieutenant2,
    "",
    lunarLieutenant2
  )
  moonChoice1 = new StorySection(
    "Commander says: bro \n\nLieutenant says: broooooo",
    "(A) Talk to the Lunar Commander",
    lunarCommander1,
    "(D) Talk to the 1st Lieutenant",
    lunarLieutenant1,
  )
  moonIntro5 = new StorySection(
    "Day 1\n\nYou navigate your ship into the  ",
    "(A)Next",
    moonChoice1,
    "",
    moonChoice1
  )

  moonIntro4 = new StorySection(
    "Day 1\n\nYou contact your superiors and tell them the launch went well. They tell you that over the next few months they will launch the rest of his force, but for now I am to report to the Lunar Station to oversee the US operations. I will be alone, but the US is still part of the United Nations and they should still respect his authority.",
    "(A)Next",
    moonIntro5,
    "",
    moonIntro5
  )

  moonIntro3 = new StorySection(
    "Day 1\n\nYou hear the countdown and count with them as you launch the ignition. Training prepared you for this moment, but nothing could be compared to the weight of the Earth leaving you. Nothing but the faint buzzing of your flight instruments echoing in the void of space.",
    "(A)Next",
    moonIntro4,
    "",
    moonIntro4
  )
  moonIntro2 = new StorySection(
    "Day 1\n\nYou follow the launch procedures and prepare the ship for ignition. ",
    "(A)Next",
    moonIntro3,
    "",
    moonIntro3
  )
  moonIntro1 = new StorySection(
    "Day 1\n\nYou enter your small ship and inspect the controls. You spent the last 6 months in training for this moment but it still feels surreal.",
    "(A)Next",
    moonIntro2,
    "",
    moonIntro2
  )
  leaveThePhoto = new StorySection(
    "Day 1\n\nYou decide against it. You will be back, and it's probably better to leave it here than to lose it somewhere else. Especially Space.",
    "(A) Next",
    moonIntro1,
    "",
    moonIntro1
  )
  keepThePhoto = new StorySection(
    "Day 1\n\nYou take the photo out of the frame, and put it in your pocket. There's no telling how long it will be out there, might as well keep something to remember them.",
    "(A) Next",
    moonIntro1,
    "",
    moonIntro1,
  )

  choice1 = new StorySection(
    "Day 1\n\nYou wake up in your house for the last time, in a long time. You're about to leave when you realize you should check if you forgot anything you wanted to bring with you. You walk through your hallway and see a picture of you and your family, one taken a long time ago, before your peacekeeping days. It's been a long time since then.\n\nShould you keep it?",
    "(A) Keep the photo", // text for option 1
    keepThePhoto, //object target option 1
    "(D) Leave the photo",
    leaveThePhoto
  )
  backstory2 = new StorySection(
    "The United Nations has been working hard to send you and your force of 25 military spacejets to be the among the first to be sent into space. You have led multiple sucessful peacekeeping campaigns before, and the United Nations trust that you will influence the best decisions in this uncharted terrority.",
    "(A) Next", //Text for option 1
    choice1, //Object target for option 1
    "",
    choice1
  )
  backstory1 = new StorySection(
    "You have been selected to be in charge of the new and impossibly difficult task, to be a neutral force to observe and act accordingly in space.\n\nA Space Peacekeeper.",
    "(A) Next", //Text for option 1
    backstory2, //Object target option 1
    "",
    backstory2
  )
  openingPassage3 = new StorySection(
    "This caused the other nations to scramble and organize their own methods to reach the moon and stake a claim before all of it was gone and before international law would have a chance to stop it and regulate it. \n\nThe World's second Space Race had officially begun.",
    "(A) Next", //Text for option 1
    backstory1, //Object target for option 1
    "",
    backstory1
  )
  openingPassage2 = new StorySection(
    "Whether we wanted it or not, space colonization and travel is in full boom. The United States were the first to put make a Space Force that set the standard for United Nations. But before the United Nations could do much to regulate it, the United States had already established the Moon as the first extraterrestrial object to be used by their private industries.",
    "(A) Next", //Text for option 1
    openingPassage3, //Object target for option 1
    "",
    openingPassage3
  )
  openingPassage1 = new StorySection(
    "Humans are not like any other creature in the known universe. We have effectively conquered the Earth in ways animals could not even being to understand. To our current knowledge, we know that we are theonly intelligent and sentient creatures that is in our system. If no other creature claims the barren planets of our system, does it not belong to all of us?", //Description for scene
    "(A) Next", //Text for option 1
    openingPassage2, //Object target for option 1
    "",
    openingPassage2
  )
  beginningQuote = new StorySection(
    "The cognizance of any creature increases by the amount of progression they make. The greater the cognizance, the larger the conscience.", //Description for scene
    "(A) Next", //Text for option 1
    openingPassage1, //Object target for option 1
    "",
    openingPassage1
  )
  title = new StorySection(
    "The Golden Age\n\nThe Lunar Storm",
    "(A) Next", //Text for option 1
    beginningQuote, //Object target for option 1
    "by Melvin Mingoa",
    beginningQuote
  )

}
