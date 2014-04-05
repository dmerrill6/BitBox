var regex = /1../gi;
matches = document.body.innerText.match(regex);
if (matches) {
  for(i=0; i<matches.length; i++ ) {
    console.log("hi " + matches[i]);
  }
  // mess with the page:
  document.body.style.backgroundColor="red";

  // with manifest containing "permissions" : [ "infobars" ],
  // var payload = {
  //   count: matches.length    // Pass the number of matches back.
  // };
  // chrome.extension.sendRequest(payload, function(response) {});
}
