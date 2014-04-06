var b = $("body").html();
var Address = require('bitcore').Address;
var regexNonTag = /\>[^\<]*\</gi; //outside of html tags
var regexBTC = /[13][^ ^\>^\<]{33}/gi; //bitcoin address candidate
b = b.replace(regexNonTag, function(m1) {
		return m1.replace(regexBTC, function(m2) {
			var addressCandidate =  new Address(m2);
			console.log(addressCandidate);
		    if (addressCandidate.isValid()) {
				console.log("is address. m2 is " + m2);
				return m2 + "<div class='bitchrome-address' address='"+ m2 + "'/>";
		    }
		    else{
		    	return m2;
		    }
		});
	});
$("body").html(b);
