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
		                //QR Code
		                
		                var content = 'Balance: ' + data.balance + 
		                '<br/>Total Received: ' + data.totalReceived +
		                '<br/>Total Sent: ' + data.totalSent +
		                '<br/>Total Transactions: ' + data.txApperances;
		                console.log($(this));
		                // Now we set the content manually (required!)
		                api.set('content.text', content);
		            }, function(xhr, status, error) {
		                // Upon failure... set the tooltip content to the status and error value
		                api.set('content.text', status + ': ' + error);
		            });

		            return 'Loading...'; // Set some initial loading text
		        }
		    },
		    events: {
		        render: function(event, api) {
		            // Grab the content
		            var tooltip = api.elements.tooltip;
		    		tooltip.qrcode({
						render: 'div',
						width: 100,
						height: 100,
						text: bitcoinAddress
					});
		        }
		    }
		});

}

var target = $('a');
var address = "1C42E62XCkG6WtZ1y1YVVbxQTNn7kHXU6K";
addTooltip(target, address);

