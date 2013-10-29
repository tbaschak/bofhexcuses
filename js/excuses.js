(function(d){

  var quotes = [
    "Could you give us the EXACT ERROR MESSAGE? 'email doesn't work' tells us nothing.",
    "Problem with upstream.",
    "Asymmetrical routing.",
    "Upstream peering changes.",
    "DNS cache problem.",
    "No, 'Google' is not 'the Internet'.",
    "Sunspots.",
    "CDN cache problem.",
    "CDN upstream problem.",
    "IX made random daytime changes.",
    "Pissed Off the Sysadmin.",
    "Solar Flares.",
    "Have you ever patched your firewall?",
    "Have you rebooted your firewall?"
  ];

  var theQuote = quotes[Math.floor(Math.random() * quotes.length)];

  d.getElementById("drop_the_knowledge").innerHTML = theQuote;

})(this.document);
