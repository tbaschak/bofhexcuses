(function(d){

  var quotes = [
    "Problem with upstream.",
    "Asymmetrical routing.",
    "No, 'Google' is not 'the Internet'.",
    "Sunspots.",
    "CDN cache problem.",
    "IX made random changes.",
    "Pissed Off the Sysadmin.",
    "Solar Flares.",
    "Have you tried rebooting your firewall?"
  ];

  var theQuote = quotes[Math.floor(Math.random() * quotes.length)];

  d.getElementById("drop_the_knowledge").innerHTML = theQuote;

})(this.document);
