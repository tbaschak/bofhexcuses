(function(d){

  var quotes = [
    "Problem with upstream.",
    "No, 'Google' is not 'the Internet'.",
    "Sunspots.",
    "Solar Flares.",
    "Have you tried rebooting your firewall?"
  ];

  var theQuote = quotes[Math.floor(Math.random() * quotes.length)];

  d.getElementById("drop_the_knowledge").innerHTML = theQuote;

})(this.document);
