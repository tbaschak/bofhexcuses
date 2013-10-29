(function(d){

  var quotes = [
    "New Apple OS release clogged the pipes.",
    "No, a router is not the same as a firewall.",
    "Last-mile connectivity apparently being delivered by ADHD squirrel.",
    "Lovely. No contact info.",
    "Fibers dirty.",
    "Your website is distributing malware.",
    "Buffers bloated.",
    "The Cloud. Giving your data directly to the NSA.",
    "iCloud. Giving your data directly to the NSA.",
    "Upstream problem.",
    "Updates broke email.",
    "CLEC inbound problem.",
    "CLEC DTMF problem.",
    "MTS routing problem.",
    "Asymmetrical routing problem.",
    "Upstream peering changes.",
    "DNS cache problem.",
    "No, 'Google' is not 'the Internet'.",
    "Sunspots.",
    "Yes, your 4-year old router is slowing down your Internets.",
    "CDN problem.",
    "CDN upstream problem.",
    "IX made random daytime changes.",
    "Apparently you pissed-off the Sysadmin.",
    "Solar Flares.",
    "Area wide power outage.",
    "Have you ever updated your firewall?",
    "Have you rebooted your firewall recently?"
  ];

  var theQuote = quotes[Math.floor(Math.random() * quotes.length)];

  d.getElementById("drop_the_knowledge").innerHTML = theQuote;

})(this.document);
