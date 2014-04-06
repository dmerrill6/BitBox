var b = $("body").html();
var Address = require('bitcore').Address;
var regexNonTag = /\>[^\<]*\</gi; //outside of html tags
var regexBTC = /1[^ ]{33}/gi; //bitcoin address candidate
b = b.replace(regexNonTag, function(m1) {
		return m1.replace(regexBTC, function(m2) {
			var addressCandidate =  new Address(m2);
			console.log(addressCandidate);
		    if (addressCandidate.data != undefined){
				  return m2 + "<div class='bitchrome-address' address='"+ m2 + "'/>";
          var imgURL = chrome.extension.getURL("bitchrome-address.png");
          $('.bitchrome-address').css('background-image', 'url(' + imgURL + ')');
		    }
		    else{
		    	return m2;
		    }
		});
	});
$("body").html(b);
