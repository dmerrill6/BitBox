function addTooltip(target, bitcoinAddress){
		target.qtip({
		    content: {
		        text: function(event, api) {
		            $.ajax({
		            	// TODO: Leo 2014-11-22: The API changed. Is this the correct spot? Can't test it right now but this should be right:
		            	url: "https://insight.bitpay.com/api/addr/" + bitcoinAddress, // URL to the JSON file
		                // url: "http://live.insight.is/api/addr/" + bitcoinAddress, // URL to the JSON file
		                type: 'GET', // POST or GET
		                dataType: 'json' // Tell it we're retrieving JSON
		            })
		            .then(function(data) {
		                /* Process the retrieved JSON object
		                 *    Retrieve a specific attribute from our parsed
		                 *    JSON string and set the tooltip content.
		                 */
		                //QR Code
		                
		                var content = 'Balance: ' + data.balance + " BTC" + 
		                '<br/>Total Received: ' + data.totalReceived + " BTC" + 
		                '<br/>Total Sent: ' + data.totalSent + " BTC" + 
		                '<br/>Total Transactions: ' + data.txApperances;
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
						background: '#FFF',
						text: bitcoinAddress
					});
		        }
		    }
		});

}

var target = $('.bitchrome-address');
target.each(function(){
	currentTarget = $(this);
	addTooltip(currentTarget, currentTarget.attr('address'));
});

