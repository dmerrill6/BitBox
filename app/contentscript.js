var b = $("body").html();
var Address = require('bitcore').Address;
var regexNonTag = /\>[^\<]*\</gi; //outside of html tags
var regexBTC = /[13][^ ^\>^\<]{33}/gi; //bitcoin address candidate
var replacementCount = 0;
b = b.replace(regexNonTag, function(m1) {
	return m1.replace(regexBTC, function(m2) {
		var addressCandidate =  new Address(m2);
		if (addressCandidate.isValid()) {
			replacementCount++;
			return m2 + "<div class='bitchrome-address' address='"+ m2 + "'/>";
			var imgURL = chrome.extension.getURL("bitchrome-address.png");
			$('.bitchrome-address').css('background-image', 'url(' + imgURL + ')'); 
		} else {
			return m2;
		}
	});
});
if(replacementCount > 0) {
	$("body").html(b);
}
