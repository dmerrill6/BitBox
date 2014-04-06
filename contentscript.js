var b = $("body").html();


var regexNonTag = /\>[^\<]*\</gi; //outside of html tags
var regexBTC = /1[^ ]{33}/gi; //bitcoin address candidate
b = b.replace(regexNonTag, function(m1) {
		return m1.replace(regexBTC, function(m2) {
			return '<div style="height:5em;background:red" onClick="getAddressInformation(\''+m2+'\')">'+m2+'</div>';
		});
	});
$("body").html(b);

