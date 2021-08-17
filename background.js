let color = "#3AA757";

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({color});
	console.log('default background set to ' + color);
});

fetch('https://yxcvbnm256.pythonanywhere.com/static/mrtki/mrtki.json').then(r => r.text()).then(result => {
    // Result now contains the response text, do what you want...
    console.log(result);
})