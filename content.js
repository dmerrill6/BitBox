function getAddressInformation(bitcoinAddress){
	//Use insight.is web services to get the information
	var url = "http://live.insight.is/api/addr/" + bitcoinAddress;

	$.ajax({
		type: "GET", 
		url: url,
	}).done(function(response){
		return response;
	});
}

console.log(getAddressInformation("66b840e77404660ec1d75358d78547f01a1a4a12ee18b6f7a2a855ca511bd172"));