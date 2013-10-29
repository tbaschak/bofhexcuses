(function(d){

  var quotes = [
    "Please supply the EXACT ERROR MESSAGE! 'email doesn't work' tells nothing.",
    "New Apple OS release clogged the pipes.",
    "Upstream problem.",
    "MTS routing problem.",
    "Asymmetrical routing problem.",
    "Upstream peering changes.",
    "DNS cache problem.",
    "No, 'Google' is not 'the Internet'.",
    "Sunspots.",
    "CDN problem.",
    "CDN upstream problem.",
    "IX made random daytime changes.",
    "Apparently you pissed-off the Sysadmin.",
    "Solar Flares.",
    "Area wide power outage.",
    "Have you ever patched your firewall?",
    "Have you rebooted your firewall recently?"
  ];

  var theQuote = quotes[Math.floor(Math.random() * quotes.length)];

  d.getElementById("drop_the_knowledge").innerHTML = theQuote;

})(this.document);
