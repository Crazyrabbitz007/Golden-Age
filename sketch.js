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

'use strict'

// Create a variable for each stage in your game //easier way to do/organize this? aarays?
var title;
var beginningQuote;
var openingPassage1, openingPassage2, openingPassage3;
var backstory1, backstory2;
var choice1;
var keepThePhoto;
var leaveThePhoto;
//moon section
var moonIntro1A, moonIntro2A, moonIntro3A, moonIntro4A, moonIntro5A, moonIntro6A, moonIntro7A, moonIntro8A;
var moonIntro1B, moonIntro2B, moonIntro3B, moonIntro4B, moonIntro5B, moonIntro6B, moonIntro7B, moonIntro8B;
var moonChoice1, moonChoice2, moonChoice3;
var lunarLieutenant1, lunarLieutenant2, lunarLieutenant3A, lunarLieutenant3B, lunarLieutenant4, lunarLieutenant5, lunarLieutenant6;
var lunarCommander1, lunarCommander2, lunarCommander3A, lunarCommander3B, lunarCommander4, lunarCommander5, lunarCommander6;
var investigation1A,investigation1B, investigation2, investigation3, investigation4A,investigation4AA, investigation4AB, investigation4B, investigation5, investigation6;
var interrogation1A, interrogation1B, interrogation2A,interrogation2B, interrogation3;
var scroll1,scroll2;
var lunarEnd1, lunarEnd2, lunarEnd3, lunarEnd4A, lunarEnd4B;

// let letterSpacing; //future coding for text animation?

// function typeWriter(sentence, n, x, y, speed) {
//   if (n < (sentence.length)) {
//     text(sentence.substring(0, n+1), x, y);
//     n++;
//     setTimeout(function() {
//       typeWriter(sentence, n, x, y, speed)
//     }, speed);
//   }
// }

//Create a variable to keep track of the current section of the story.
var current;

var img1, img2, img3, img4;
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
  image(img4, mouseX - 25, mouseY - 25);
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
  lunarEnd4B = new StorySection(
    "The Escavator explodes, falling backwards into one of the many craters of the moon. It was a brief explosion but it brightened up the hull of your ship for a moment before leaving behind a fiery mess near the Lunar Base. ",
    "(A) Next", //Text for option 1
    lunarEnd4B, //For end sections, there is no target
    "", //Text for option 1
    lunarEnd4B //For end sections, there is no target
  ); // best environment ending //blow up the escavator
  lunarEnd4A = new StorySection(
    "You follow West's idea. You asked the Colonel about the Escavator and left the backpack in a closet when no one was looking. You the Colonel you'll be in touch, as leave the station into a loose orbit around the moon. \n\n It doesn't take much longer when you see it happen. ",
    "(A) Next", //Text for option 1
    lunarEnd4B, //For end sections, there is no target
    "", //Text for option 1
    lunarEnd4B //For end sections, there is no target
  ); // best environment ending //blow up the escavator
  lunarEnd3 = new StorySection(
    "You end up telling the Colonel that if he doesn't shut down the drill, that you would report him to both the UN and his superiors about the situation. This holds up the US in its expansion plans, and inevitable helps the other nations catch up in technology and resources. The space race is still ongoing.", //Descrption for scene
    "", //Text for option 1
    null, //For end sections, there is no target
    "", //Text for option 1
    null //For end sections, there is no target
  ); // okay ending //blackmail the colonel into not selling the drill materials
  lunarEnd2 = new StorySection(
    "You report the Lt. Colonel West to both your superiors and the Colonel about his plans. You were never able to figure out if the Colonel was actually privately earning money through this trade but it doesn't matter much. The world spurs faster than ever with an increase of the materials dug from the moon.\n\n", //Descrption for scene
    "", //Text for option 1
    null, //For end sections, there is no target
    "", //Text for option 1
    null //For end sections, there is no target
  ); // bad ending //report the lt Colonel
  lunarEnd1 = new StorySection(
    "You leave the Lunar station with more questions than answers but ultimately decided it wasn't within your power to stop. You stay in orbit for about a week when you hear news about the Giant Moon Excavator being finished. The Colonel was right, the minerals they mined ended up being full of crucial elements. It propelled the US to being a space superpower and only furthered their ambitions in space. China was somehow able to acquire much of these rare materials and used to to further their stocks.", //Descrption for scene
    "", //Text for option 1
    null, //For end sections, there is no target
    "", //Text for option 1
    null //For end sections, there is no target
  ); // worst ending // do nothing after finding out everything
  //moon ending
  moonChoice3 = new StorySection(
    "Well this has escalated quickly. There's no way I'm blowing up an escavator, corruption or not, that'll only give them international support. But if I tell Ramos about West's intentions, there won't be anyone to stop him in the future.\\What should we do?",
    "(A) Leave Now",
    lunarEnd1,
    "(D) Report the Lt. Colonel",
    lunarEnd2
  );
  //final decision for the moon
  investigation6 = new StorySection(
    "As he walks away, you look inside the bag, and check what he gave you. You immediately recognize it to be military grade C$ explosives. He...wants to blow up the excavator?! What can- what should you do?",
    "(A) Follow his plan",
    lunarEnd4A,
    "(B) Go back to your ship to think",
    moonChoice3
  );
  investigation5 = new StorySection(
    "Good. Since you haven't ratted me out, that means you're on my side,''He hands you a backpack that was behind him. ''I've heard you're experienced, you should know how to use these. Tell the Colonel you want to see the the Excavator tonight before you leave, and leave this in there. I'll handle the rest.''",
    "(A) Take the bag",
    investigation6,
    "(B) Don't take the bag",
    moonChoice3
  ); // Lt. Colonel whistleblower
  investigation4B = new StorySection(
    "Colonel Ramos is standing at his desk when you come in. ",
    "(A) Next",
    investigation5,
    "",
    investigation5
  ); // Lt Colonel has the metal tube
  investigation4AB = new StorySection(
    "You walk forward not sure why he signalled and he points at the ceiling as you walk through a camera's field of view. That's when West takes out a small device and points it at the camera which immediately powers down.\n\n He looks even more dissapointed than he was earlier and says, ''You really can't take a hint can you?'' as rushes off behind you and into the hangar. ",
    "(A) Next",
    investigation5,
    "(D) Continue",
    investigation4AB
  ); //goes through camera
  investigation4AA = new StorySection(
    "You stop as you look at him in confusion, and he points at the ceiling where a camera is panning left and right. He takes out a small device and points it at the camera which immediately powers down.\n\n He walks up to you and whispers, did you read it?",
    "(A) Yes",
    investigation5,
    "",
    investigation5
  ); //doesn't go through camera
  investigation4A = new StorySection(
    "It doesn't take long for you to find West. He was quite literally around the corner of the entrance of the hangar waiting for you. As you approach him, he puts his hand up to signal for you to stop.",
    "(A) Stop",
    investigation4AA,
    "(D) Continue",
    investigation4AB
  ); // You have read the contents of the tube, looking for Lt Colonel West
  interrogation3 = new StorySection(
    "''I dont't have to tell you anything. Get off my station.'' he says as he gets up, clearly agitated about this coming to light. His guards walk in and escort you to your ship, where you're forced to leave the base.",
    "(A) Next",
    lunarEnd1,
    "",
    lunarEnd1
  );
  interrogation2B = new StorySection(
    "''You decide its better not to say. ''I can't say, but the allegations are pretty serious either way. Is that what you planned to do with the drill? The moon is international land, did the UN sanction your privatization of the moon?",
    "(A) Next",
    interrogation3,
    "",
    interrogation3
  );
  interrogation2A = new StorySection(
    "You decide to tell him, ''Your Lt. Colonel West did. He managed to hand me and I'm here to get your side of the story.''\n\n ''My 'side' of the story? The truth is that we are here as a nation to build the forward station to humanity. I have nothing to do wtih China,''",
    "(A) Next",
    interrogation3,
    "",
    interrogation3
  );
  interrogation1A = new StorySection(
    "You put the note on to Ramo's desk as he walks overs and picks it up. He looks at you obviously furious, but still attempt to put a facade of calmness. ''This is quite the allegation. Who may I ask, gave you this?''he says with a tinge of frustration.",
    "(A) Tell him",
    interrogation2A,
    "(D) Don't tell him",
    interrogation2B
  ); //Lt Colonel West has the letter
  investigation3 = new StorySection(
    "Colonel Ramos is sitting at his desk reading something on his desk screen when you walk in abruptly. ''Ah, to what do I owe the pleasure?'' Ramos says as he leans back on his chair and stares you down.",
    "(A) Show him the letter",
    interrogation1A,
    "(D) Accuse him without the letter",
    interrogation2B
  );
  scroll2 = new StorySection(
    "Well that explains the drill and the speed of them building everything up so fast. How long has it been, 3 months since the US came here, and they already have a drill almost fully built? Although, why would Lt Colonel West reveal this to you? What should you do?",
    "(A) Confront Colonel Ramos",
    investigation3,
    "(D) Confront Lt. Colonel West",
    investigation4A
  );
  scroll1 = new StorySection(
    "It reads, ''The US had the means, but China funded the way\nRamos made private deal with China for minerals exports''",
    "(A) Next",
    scroll2,
    "",
    scroll2
  );
  investigation2 = new StorySection(
    "You look at the 2 inch metallic tube and see that there's a very thin line in the middle. Is this a container? You pulled as hard as you can and it pops open abruptly, revealing a scrolled piece of paper that drops onto the floor.",
    "(A) Read it",
    scroll1,
    "",
    scroll1
  );
  investigation1B = new StorySection(
    "You return to the hangar and sit near your ship. \nYou take out the tube in your pocket. I wonder what this is?",
    "(A) Inspect the metal tube",
    investigation2,
    "",
    investigation2
  ); // you have the letter
  investigation1A = new StorySection(
    "You return to the hangar and sit near your ship. \nWhat should you do?",
    "(A) Look around the base ",
    investigation5,
    "(D) Talk to the Lt. Colonel",
    investigation4B
  ); // you don't have the letter
  //unfinished section
  // investigation of the moon
  lunarLieutenant6 = new StorySection(
    "''Well, if there's nothing else to discuss,''he lifts his hand and gestures to the door. ''You're free to go.'' You get up and briskly walk to the door and leave back into the hall way. ",
    "(A) Next",
    investigation1B,
    "",
    investigation1B
  );
  lunarLieutenant5 = new StorySection(
    "''I know why you're here. Command told me you were coming as the UN's representative to keep an eye on this station, and the US. Now, I'm going to tell you this once, I will let you stay, but if you get in the way of my men, I will personally launch you and your ''ship'', back to Earth faster than you can say, 'oops'. ",
    "(A) Next",
    lunarLieutenant6,
    "",
    lunarLieutenant6
  );
  lunarLieutenant4 = new StorySection(
    "You get a good look at Colonel Ramos as he relaxes into his seat. While standing he was quite tall, but now you can see that his face is scarred with cuts and burns. His face is stoic as he locks eyes with you.",
    "(A) Next",
    lunarLieutenant5,
    "",
    lunarLieutenant5
  );
  lunarLieutenant3B = new StorySection(
    "The Colonel turns and raises his eyebrow at you. ''Lieutenant Colonel West? He's just jittery.'', he says as he takes a seat into his large office chair.",
    "(A) Next",
    lunarLieutenant4,
    "",
    lunarLieutenant4
  );
  lunarLieutenant3A = new StorySection(
    "''I hope the ride wasn't unpleasant in your...aircraft.'', he says somewhat mockingly. He turns around and sits back into this large office chair.",
    "(A) Next",
    lunarLieutenant4,
    "",
    lunarLieutenant4
  );
  lunarLieutenant2 = new StorySection(
    "''Hello,'' said the Colonel calmly, from behind his desk looking out the window overlooking the base. The Lieutenant Colonel steps out and closes the door behind you. ",
    "(A) Hello, sir.",
    lunarLieutenant3A,
    "(D) Is your Lieutenant Colonel alright?",
    lunarLieutenant3B
  ); //unique dialogue choice (edit later to differ from other dialogue)
  lunarLieutenant1 = new StorySection(
    "You pick it up and put it in your pocket, as you catch back up to the officer. When you get to him, you find him standing next to a locked door as he waits for you. He whispers something to you under his breath that sounds like ''read it later'', he swipes a card on the door in front of you and it opens up.",
    "(A) Next",
    lunarLieutenant2,
    "",
    lunarLieutenant2
  );
  //keeping it timeline ^
  lunarCommander6 = new StorySection(
    "''Well, if there's nothing else to discuss,'' lifts his hand and gestures to the door. ''You're free to go.''. You get up and briskly walk to the door and leave back into the hall way. ",
    "(A) Next",
    investigation1A,
    "",
    investigation1A
  );
  lunarCommander5 = new StorySection(
    "''I know why you're here. Command told me you were coming as the UN's representative to keep an eye on this station, and the US. Now, I'm going to tell you this once, I will let you stay, but if you get in the way of my men, I will personally launch you and your ''ship'', back to Earth faster than you can say, 'oops'. ",
    "(A) Next",
    lunarCommander6,
    "",
    lunarCommander6
  );
  lunarCommander4 = new StorySection(
    "You get a good look at Colonel Ramos as he relaxes into his seat. While standing he was quite tall, but now you can see that his face is scarred with cuts and burns. His face is stoic as he locks eyes with you.",
    "(A) Next",
    lunarCommander5,
    "",
    lunarCommander5
  );
  lunarCommander3B = new StorySection(
    "The Colonel turns and raises his eyebrow at you. ''Lieutenant Colonel West? He's just jittery.'', he says as he takes a seat into his large office chair.",
    "(A) Next",
    lunarCommander4,
    "",
    lunarCommander4
  );
  lunarCommander3A = new StorySection(
    "''I hope the ride wasn't unpleasant in your...aircraft.'', he says somewhat mockingly. He turns around and sits back into this large office chair.",
    "(A) Next",
    lunarCommander4,
    "",
    lunarCommander4
  );
  lunarCommander2 = new StorySection(
    "''Hello,'' said the Colonel calmly, from behind his desk looking out the window overlooking the base. The Lieutenant Colonel steps out and closes the door behind you. ",
    "(A) Hello, sir.",
    lunarCommander3A,
    "(D) Is your Lieutenant Colonel alright?",
    lunarCommander3B
  ); //unique dialogue choice
  lunarCommander1 = new StorySection(
    "You pick it up and catch up to the officer ahead of you. ''Excuse me sir, you dropped this,'' and hand it back to him. He looks at you profoundly surprised and quickly puts it back into his pocket. He shakes his head, seemingly dissapointed in you. You get a good look at his insignia and see that he is the Lieutenant Colonel here.\n\nBefore you can get a word in, he swipes a card on the door in front of you and it opens up.",
    "(A) Next",
    lunarCommander2,
    "",
    lunarCommander2
  );

  //Giving it back timeline ^
  moonChoice1 = new StorySection(
    "Day 1, 8:29 AM (Earth Time)\n\n You are greeted entering the station by an officer patiently waiting near the decompression chamber. He waits for you and shakes your hand and leads the way through the pristine hallways. \n\n Suddenly, he drops something on the floor as he walks ahead of you. He strangely didn't seem to notice. It seems to be a tiny metallic tube. What should you do?",
    "(A) Pick it up and keep it",
    lunarLieutenant1,
    "(D) Pick it up and give it back",
    lunarCommander1
  );
  //moon dialogue
  moonIntro8B = new StorySection(
    "Day 1, 7:55 AM\n\n The most surprising thing though, was the giant land escavator that towered behind the base. It made the buildings around it look grossly disproportionate. It is still in contruction but it looks like it could be done anytime.",
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
  //second branch - no photo timeline (B)
  moonIntro8A = new StorySection(
    "Day 1, 7:55 AM\n\n The most surprising thing though, was the giant land escavator that towered behind the base. It made the buildings around it look grossly disproportionate. It is still in contruction but it looks like it could be done anytime.",
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
  //first branch - photo timeline (A)
  //moon story
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
  //story start
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
  //introduction
}
