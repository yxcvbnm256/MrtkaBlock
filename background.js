const mrtki_url = 'https://raw.githubusercontent.com/yxcvbnm256/MrtkaBlock/master/assets/mrtki.json';


fetch(mrtki_url).then(r => r.text()).then(result => {
		chrome.storage.local.set({'mrtkiBlock': JSON.parse(result)});
});

chrome.runtime.onStartup.addListener(() => {
	fetch(mrtki_url).then(r => r.text()).then(result => {
		chrome.storage.local.set({'mrtkiBlock': JSON.parse(result)});
	});	
});
