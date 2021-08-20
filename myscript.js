chrome.storage.local.get('mrtkiBlock', (result) => {
	const html = document.querySelector('html');
	const walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
	var node;


	while (node = walker.nextNode()) {
	    for (i=0; i<result.mrtkiBlock.length;i++) {

	        const regex = new RegExp(result.mrtkiBlock[i].match,"gm");
	        const groups = regex.exec(node.nodeValue);
	        if (!!groups) {
	        	const index = groups.slice(1).findIndex(item => !!item);
	        	node.nodeValue = node.nodeValue.replace(regex, result.mrtkiBlock[i].replacements[Math.floor(Math.random() * result.mrtkiBlock[i].replacements.length)][index]);
	        }	        

	    }
	}
});
