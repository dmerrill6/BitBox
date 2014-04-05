
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

getAddressInformation("1C42E62XCkG6WtZ1y1YVVbxQTNn7kHXU6K");
