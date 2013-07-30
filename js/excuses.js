function quoteMe(){

    var quotes = new Array ();

    quotes[0] = "That won't fit the grid.";
    quotes[1] = "That's not in the wireframes.";
    quotes[2] = "That's a developer thing.";
    quotes[3] = "I didn't mock it up that way.";
    quotes[4] = "The developer must have changed it.";
    quotes[5] = "Did you try hitting refresh?";
    quotes[6] = "No one uses IE anyway.";
    quotes[7] = "That's not how I designed it.";
    quotes[8] = "That's way too skeuomorphic.";
    quotes[9] = "That's way too flat.";
    quotes[10] = "Just put a long shadow on it.";
    quotes[11] = "It wasn't designed for that kind of content.";
    quotes[12] = "Josef Müller-Brockmann.";
    quotes[13] = "That must be a server thing.";
    quotes[14] = "It only looks bad if it's not on Retina.";
    quotes[15] = "Are you looking at it in IE or something?";
    quotes[16] = "That's not a recognised design pattern.";
    quotes[17] = "It wasn't designed to work with this content.";
    quotes[18] = "The users will never notice that.";
    quotes[19] = "The users might not notice it, but they'll feel it.";
    quotes[20] = "These brand guidelines are shit.";
    quotes[21] = "You wouldn't get it, it's a design thing."

    var theQuote = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("drop_the_knowledge").innerHTML = theQuote;
}

$(document).ready(quoteMe);