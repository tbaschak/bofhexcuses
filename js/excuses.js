(function(d){

  var quotes = [
    "That won’t fit the grid.",
    "That’s not in the wireframes.",
    "That’s a developer thing.",
    "I didn’t mock it up that way.",
    "The developer must have changed it.",
    "Did you try hitting refresh?",
    "No one uses IE anyway.",
    "That’s not how I designed it.",
    "That’s way too skeuomorphic.",
    "That’s way too flat.",
    "Just put a long shadow on it.",
    "It wasn’t designed for that kind of content.",
    "Josef Müller-Brockmann.",
    "That must be a server thing.",
    "It only looks bad if it’s not on Retina.",
    "Are you looking at it in IE or something?",
    "That’s not a recognised design pattern.",
    "It wasn’t designed to work with this content.",
    "The users will never notice that.",
    "The users might not notice it, but they’ll feel it.",
    "These brand guidelines are shit.",
    "You wouldn’t get it, it's a design thing.",
    "Jony wouldn’t do it like this.",
    "That’s a dark pattern.",
    "I don’t think that’s very user friendly.",
    "That’s not what the research says.",
    "I didn’t get a change request for that.",
    "No, that would break the vertical rhythm.",
    "Why’s this type so ugly? Did a developer do it?",
    "Because that’s not my design style.",
    "If the user can’t figure this out, they’re an idiot.",
    "Ever heard of apostrophes?",
    "It looked fine in the mockups.",
    "Just put some gridlines on it.",
    "No, I didn’t test it on Firefox. I don’t install that trash on my Mac.",
    "If they don’t have JavaScript turned on, it’s their own damn fault.",
    "I don’t care if they don’t have a recent browser, this is 2013!",
    "It’s a responsive layout, of course it has widows."
  ];

  var theQuote = quotes[Math.floor(Math.random() * quotes.length)];

  d.getElementById("drop_the_knowledge").innerHTML = theQuote;

})(this.document);
