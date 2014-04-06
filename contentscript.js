var b = $("body").html();
var Address = require('bitcore').Address;
var regexNonTag = /\>[^\<]*\</gi; //outside of html tags
var regexBTC = /1[^ ]{33}/gi; //bitcoin address candidate
b = b.replace(regexNonTag, function(m1) {
		return m1.replace(regexBTC, function(m2) {
			var addressCandidate =  new Address(m2);
		    if (addr.validate()){
				  return m2 + "<div class='bitchrome-address' address='"+ m2 + "'/>";
		    }
		    else{
		    	return m2;
		    }
		});
	});
$("body").html(b);
