
function getAddressInformation(bitcoinAddress, callbackFunction){
	//Use insight.is web services to get the information
	var url = "http://live.insight.is/api/addr/" + bitcoinAddress;
	//send ajax request
	$.ajax({
		type: "GET", 
		url: url,
	}).done(function(response){
		 callbackFunction(response);
	});
}

function addTooltip(target, bitcoinAddress){
	target.mouseenter(function (e) { //event fired when mouse cursor enters target
	    var $x = e.pageX - this.offsetLeft; //get mouse X coordinate relative to target element
 		if(target.attr('tooltipappended') != 'true')
        	$(this).append('<div class="tooltip"></div>'); //append tooltip markup
 		target.attr('tooltipappended', 'true');

 		//Function to insert content in the tooltip
 		function setContent(msg){
			console.log(msg);
			
			$('.tooltip').append(msg);

		}
		//Get bitcoin address information
		getAddressInformation(bitcoinAddress, setContent);
 
        $("a > div.tooltip.center").css("left", "" + $x - 103 + "px"); //set tooltip position from left
        $("a > div.tooltip.left").css("left", "" + $x + "px"); //set tooltip position from left
        $("a > div.tooltip.right").css("left", "" + $x - 208 + "px"); //set tooltip position from left
 
        $("a > div.tooltip").fadeIn(300); //display, animate and fade in the tooltip
	});
	target.mouseleave(function (e){
		$("a > div.tooltip").hide(); //fadeout the tooltip
	});
}

var target = $('a');
var address = "1C42E62XCkG6WtZ1y1YVVbxQTNn7kHXU6K";
addTooltip(target, address);
