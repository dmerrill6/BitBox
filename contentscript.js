var b = $("body").html();

function getAddressInformation(bitcoinAddress){
	//Use insight.is web services to get the information
	var url = "http://live.insight.is/api/addr/" + bitcoinAddress;
	//send ajax request
	$.ajax({
		type: "GET", 
		url: url,
	}).done(function(response){
		 callback(response);
	});
}

function callback(msg){
	console.log(msg);
}

var regexNonTag = /\>[^\<]*\</gi; //outside of html tags
var regexBTC = /1[^ ]{33}/gi; //bitcoin address candidate
console.log(b);
b = b.replace(regexNonTag, function(m1) {
		return m1.replace(regexBTC, function(m2) {
			return '<div style="height:5em;background:red" onClick="getAddressInformation(\''+m2+'\')">'+m2+'</div>';
		});
	});
$("body").html(b);

