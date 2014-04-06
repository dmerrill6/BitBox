function addTooltip(target, bitcoinAddress){
		target.qtip({
		    content: {
		        text: function(event, api) {
		            $.ajax({
		                url: "http://live.insight.is/api/addr/" + bitcoinAddress, // URL to the JSON file
		                type: 'GET', // POST or GET
		                dataType: 'json' // Tell it we're retrieving JSON
		            })
		            .then(function(data) {
		                /* Process the retrieved JSON object
		                 *    Retrieve a specific attribute from our parsed
		                 *    JSON string and set the tooltip content.
		                 */
		                var content = 'Balance: ' + data.balance + 
		                '<br/>Total Received: ' + data.totalReceived +
		                '<br/>Total Sent: ' + data.totalSent +
		                '<br/>Total Transactions: ' + data.txApperances;

		                console.log(data);
		                // Now we set the content manually (required!)
		                api.set('content.text', content);
		            }, function(xhr, status, error) {
		                // Upon failure... set the tooltip content to the status and error value
		                api.set('content.text', status + ': ' + error);
		            });

		            return 'Loading...'; // Set some initial loading text
		        }
		    }
		});
}

var target = $('a');
var address = "1C42E62XCkG6WtZ1y1YVVbxQTNn7kHXU6K";
addTooltip(target, address);
