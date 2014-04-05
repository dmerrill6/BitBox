// Example sytax: #DONATE#[DOGE][DP875D1fhq76trrZ9dxvt5tjQjKEB4FXVg](100)
chrome.app.runtime.onLaunched.addListener(function() {
	var search_criteria = "#DONATE#";
	console.log("searching for: "+search_criteria);
});