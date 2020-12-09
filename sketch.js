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
let moonIntro1A, moonIntro2A, moonIntro3A, moonIntro4A, moonIntro5A, moonIntro6A, moonIntro7A, moonIntro8A;
let moonIntro1B, moonIntro2B, moonIntro3B, moonIntro4B, moonIntro5B, moonIntro6B, moonIntro7B, moonIntro8B;
let moonChoice1;
let lunarLieutenant1, lunarLieutenant2, lunarLieutenant3,lunarLieutenant4;
let lunarCommander1, lunarCommander2, lunarCommander3;

// let letterSpacing; //future coding for text animation?

//Create a variable to keep track of the current section of the story.
let current;

let img1, img2, img3, img4;
//preload function for future assets // where can I design a menu bar?
function preload() {
  // preload() runs once
  img1 = loadImage('assets/Earth.gif');
  img2 = loadImage('assets/Jupiter.gif');
  img3 = loadImage('assets/Sun.gif');
  img4 = loadImage('assets/Player Ship.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createStory();

  current = title;
  console.log(current);
}

function draw() {
  background(50);
  image(img4, mouseX-25,mouseY-25);
  image(img3, windowWidth * 0.010, windowHeight * 0.02, windowWidth * 0.030, windowHeight * 0.055);
  strokeWeight(10); // screen dividers
  line(0, windowHeight * 0.90, windowWidth, windowHeight * 0.9);
  line(windowWidth * 0.50, windowHeight * 0.9, windowWidth * 0.50, windowHeight);

  textAlign(CENTER); //text styles
  fill(255, 255, 0);
  textSize(windowWidth / 35);
  // Draw the text for the current option on the screen
  text(current.text, windowWidth * 0.05, windowHeight * 0.05, windowWidth * 0.95, windowHeight * 0.75);

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
  );
  lunarEnd3 = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1
    null //For end sections, there is no target
  );
  lunarEnd2 = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1S
    null //For end sections, there is no target
  );
  lunarEnd1 = new StorySection(
    "End!", //Descrption for scene
    "End.", //Text for option 1
    null, //For end sections, there is no target
    "End", //Text for option 1
    null //For end sections, there is no target
  );
  lunarCommander3 = new StorySection(
    "Placeholder",
    "(A) Next",
    lunarCommander3,
    "",
    lunarCommander3
  );
  lunarCommander2 = new StorySection(
    "Placeholder",
    "(A) Next",
    lunarCommander3,
    "",
    lunarCommander3
  );
  lunarCommander1 = new StorySection(
    "Placeholder",
    "(A) Next",
    lunarCommander2,
    "",
    lunarCommander2
  );
  //keeping it timeline ^
  lunarLieutenant4 = new StorySection(
    "Placeholder",
    "(A) Next",
    lunarLieutenant4,
    "",
    lunarLieutenant4
  );
  lunarLieutenant3 = new StorySection(
    "Placeholder",
    "(A) Next",
    lunarLieutenant4,
    "",
    lunarLieutenant4
  );
  lunarLieutenant2 = new StorySection(
    "''Hello,'' said the Colonel, from behind his desk looking out the window overlooking the base.",
    "(A) Next",
    lunarLieutenant3,
    "",
    lunarLieutenant3
  );
  lunarLieutenant1 = new StorySection(
    "You pick it up and catch up to the Lieutenant ahead of you. ''Hey you dropped this,'' and hand it back to him. He looks at you profoundly surprised and quickly puts it back into his pocket. He shakes his head, seemingly dissapointed in you. Before you can get a word in, he swipes a card on the door in front of you and it opens up.",
    "(A) Next",
    lunarLieutenant2,
    "",
    lunarLieutenant2
  );
  //Giving it back timeline ^
  moonChoice1 = new StorySection(
    "Day 1, 8:29 AM (Earth Time)\n\n You are greeted entering the station by an officer patiently waiting near the decompression chamber. He waits for you and shakes your hand and leads the way through the pristine hallways. \n\n Suddenly, he drops something on the floor as he walks ahead of you. He strangely didn't seem to notice. It seems to be a tiny metallic tube. What should you do?",
    "(A) Pick it up and keep it",
    lunarCommander1,
    "(D) Pick it up and give it back",
    lunarLieutenant1
  );
  //moon dialogue
  moonIntro8B = new StorySection(
    "Day 1, 7:55 AM\n\n The most surprising thing though, was the giant land escavator that towered behind the base. It made the buildings around it look grossly disproportionate. It was still in contruction but it looks like it could be done anytime.",
    "(A) Next",
    moonChoice1,
    "",
    moonChoice1
  );
  moonIntro7B = new StorySection(
    "Day 1, 7:52 AM\n\n'Dock your ship in the hangar bay. You'll meet me in my office', Ramos orders you as you begin your lunar descent. You follow what he says and that's when you are able to finally see the station in its full glory.\n\n Its a true military base, complimented with multiple barracks and opertational buildings and even components for an airfield. ",
    "(A) Next",
    moonIntro8B,
    "",
    moonIntro8B
  );
  moonIntro6B = new StorySection(
    "Day 1, 7:43 AM\n\nYou navigate your ship to the Moon's Lunar Station. As the moon comes into view, it's not hard to spot the station as it shines a bright metallic orange in the plain grey surface of the Moon. Before you even thought of it, a buzz comes from your radio tranciever.\n\n'Welcome to Luna, Peacekeeper.', a deep and raspy voice announces to you. I am Colonel Ramos, Commanding Officer of the United States Lunar Station.",
    "(A) Next",
    moonIntro7B,
    "",
    moonIntro7B
  );
  moonIntro5B = new StorySection(
    "Day 1, 7:30 AM\n\nYou contact your superiors and tell them the launch went well. They tell you that over the next few months they will launch the rest of your force, but for now you are to report to the US Lunar Station to oversee the US operations. You will be alone, but the US is still part of the United Nations and they should still respect his authority.",
    "(A) Next",
    moonIntro6B,
    "",
    moonIntro6B
  );
  moonIntro4B = new StorySection(
    "Day 1, 6:20 AM\n\nYou look out around and see Earth, in all its glory. Suddenly, you feel insignificant to its size. How you were just a dot, living on this massive planet. You remember your family and wonder how they're doing, if they watched your launch this morning. Maybe you should've brought the photo.",
    "(A) Next",
    moonIntro5B,
    "",
    moonIntro5B
  );
  moonIntro3B = new StorySection(
    "Day 1, 6:00 AM\n\nYou hear the countdown and count with them as you launch the ignition. Training prepared you for this moment, but nothing could be compared to the weight of the Earth leaving you. You feel every shake of the hull, every shudder of ship as it rips through the atmosphere. Eventually it subsides and the ship slows down to dead still.\n\nNothing but the faint buzzing of your flight instruments echoing in the void of space.",
    "(A) Next",
    moonIntro4B,
    "",
    moonIntro4B
  );
  moonIntro2B = new StorySection(
    "Day 1, 5:59 AM\n\nYou follow the launch procedures and prepare the ship for ignition. ",
    "(A) Next",
    moonIntro3B,
    "",
    moonIntro3B
  );
  moonIntro1B = new StorySection(
    "Day 1, 5:54 AM\n\nYou enter your small ship and inspect the controls. You spent the last 6 months in training for this moment but it still feels surreal.",
    "(A) Next",
    moonIntro2B,
    "",
    moonIntro2B
  );
  moonIntro8A = new StorySection(
    "Day 1, 7:55 AM\n\n The most surprising thing though, was the giant land escavator that towered behind the base. It made the buildings around it look grossly disproportionate. It was still in contruction but it looks like it could be done anytime.",
    "(A) Next",
    moonChoice1,
    "",
    moonChoice1
  );
  moonIntro7A = new StorySection(
    "Day 1, 7:52 AM\n\n'Dock your ship in the hangar bay. You'll meet me in my office', Ramos orders you as you begin your lunar descent. You follow what he says and that's when you are able to finally see the station in its full glory.\n\n Its a true military base, complimented with multiple barracks and opertational buildings and even components for an airfield. ",
    "(A) Next",
    moonIntro8A,
    "",
    moonIntro8A
  );
  moonIntro6A = new StorySection(
    "Day 1, 7:43 AM\n\nYou navigate your ship to the Moon's Lunar Station. As the moon comes into view, it's not hard to spot the station as it shines a bright metallic orange in the plain grey surface of the Moon. Before you even thought of it, a buzz comes from your radio tranciever.\n\n'Welcome to Luna, Peacekeeper.', a deep and raspy voice announces to you. I am Colonel Ramos, Commanding Officer of the United States Lunar Station.",
    "(A) Next",
    moonIntro7A,
    "",
    moonIntro7A
  );
  moonIntro5A = new StorySection(
    "Day 1, 7:30 AM\n\nYou contact your superiors and tell them the launch went well. They tell you that over the next few months they will launch the rest of your force, but for now you are to report to the US Lunar Station to oversee the US operations. You will be alone, but the US is still part of the United Nations and they should still respect his authority.",
    "(A) Next",
    moonIntro6A,
    "",
    moonIntro6A
  );
  moonIntro4A = new StorySection(
    "Day 1, 6:20 AM\n\nYou look out around and see Earth, in all its glory. Suddenly, you feel insignificant to its size. How you were just a dot, living on this massive planet. You remember your family and wonder how they're doing, if they watched your launch this morning. You take out the photo from your spacesuit's pockets. You stare at it and it comforts you a bit.",
    "(A) Next",
    moonIntro5A,
    "",
    moonIntro5A
  );
  moonIntro3A = new StorySection(
    "Day 1, 6:00 AM\n\nYou hear the countdown and count with them as you launch the ignition. Training prepared you for this moment, but nothing could be compared to the weight of the Earth leaving you. You feel every shake of the hull, every shudder of ship as it rips through the atmosphere. Eventually it subsides and the ship slows down to dead still.\n\nNothing but the faint buzzing of your flight instruments echoing in the void of space.",
    "(A) Next",
    moonIntro4A,
    "",
    moonIntro4A
  );
  moonIntro2A = new StorySection(
    "Day 1, 5:59 AM\n\nYou follow the launch procedures and prepare the ship for ignition. ",
    "(A) Next",
    moonIntro3A,
    "",
    moonIntro3A
  );
  moonIntro1A = new StorySection(
    "Day 1, 5:54 AM\n\nYou enter your small ship and inspect the controls. You spent the last 6 months in training for this moment but it still feels surreal.",
    "(A) Next",
    moonIntro2A,
    "",
    moonIntro2A
  );
  //first branch - photo timeline
  leaveThePhoto = new StorySection(
    "Day 1, 4:05 AM\n\nYou decide against it. You will be back, and it's probably better to leave it here than to lose it somewhere else. Especially Space.",
    "(A) Next",
    moonIntro1B, //B = no photo
    "",
    moonIntro1B
  );
  keepThePhoto = new StorySection(
    "Day 1, 4:05 AM\n\nYou take the photo out of the frame, and put it in your pocket. There's no telling how long it will be out there, might as well keep something to remember them.",
    "(A) Next",
    moonIntro1A, //A = with photo
    "",
    moonIntro1A
  );

  choice1 = new StorySection(
    "Day 1, 4:00 AM\n\nYou wake up in your house for the last time, in a long time. You're about to leave when you realize you should check if you forgot anything you wanted to bring with you. You walk through your hallway and see a picture of you and your family, one taken a long time ago, before your peacekeeping days. It's been a long time since then.\n\nShould you keep it?",
    "(A) Keep the photo", // text for option 1
    keepThePhoto, //object target option 1
    "(D) Leave the photo",
    leaveThePhoto
  );
  backstory2 = new StorySection(
    "The United Nations has been working hard to send you and your force of 25 military spacejets to be the among the first to be sent into space. You have led multiple sucessful peacekeeping campaigns before, and the United Nations trust that you will influence the best decisions in this uncharted terrority.",
    "(A) Next", //Text for option 1
    choice1, //Object target for option 1
    "",
    choice1
  );
  backstory1 = new StorySection(
    "You have been selected to be in charge of the new and impossibly difficult task, to be a neutral force to observe the nation's actions and respond accordingly in space.\n\nA Space Peacekeeper.",
    "(A) Next", //Text for option 1
    backstory2, //Object target option 1
    "",
    backstory2
  );
  openingPassage3 = new StorySection(
    "This caused the other nations to scramble and organize their own methods to reach the moon and stake a claim before all of it was gone and before international law would have a chance to stop it and regulate it. \n\nThe World's second Space Race had officially begun.",
    "(A) Next", //Text for option 1
    backstory1, //Object target for option 1
    "",
    backstory1
  );
  openingPassage2 = new StorySection(
    "Whether we wanted it or not, space colonization and travel is in full boom. The United States were the first to put make a Space Force that set the standard for United Nations. But before the United Nations could do much to regulate it, the United States had already established the Moon as the first extraterrestrial object to be used by their private industries.",
    "(A) Next", //Text for option 1
    openingPassage3, //Object target for option 1
    "",
    openingPassage3
  );
  openingPassage1 = new StorySection(
    "Humans are not like any other creature in the known universe. We have effectively conquered the Earth in ways animals could not even being to understand. To our current knowledge, we know that we are the only intelligent and sentient creatures that is in our system.\n\nIf no other creature claims the barren planets of our system, does it not belong to all of us?", //Description for scene
    "(A) Next", //Text for option 1
    openingPassage2, //Object target for option 1
    "",
    openingPassage2
  );
  beginningQuote = new StorySection(
    "''The cognizance of any creature increases by the amount of progression they make. The greater the cognizance, the larger the conscience.''", //Beginnning quote by me
    "(A) Next", //Text for option 1
    openingPassage1, //Object target for option 1
    "",
    openingPassage1
  );
  title = new StorySection(
    "The Golden Age\n\nThe Lunar Storm",
    "(A) Next", //Text for option 1
    beginningQuote, //Object target for option 1
    "by Melvin Mingoa",
    beginningQuote
  );

}
