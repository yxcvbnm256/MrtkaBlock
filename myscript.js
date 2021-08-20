chrome.storage.local.get('mrtkiBlock', (result) => {

	const html = document.querySelector('html');
	const walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
	var node;


	while (node = walker.nextNode()) {
	    for (i=0; i<result.length;i++) {

	        const regex = new RegExp(result[i].match,"gm");
	        const groups = one.exec(node.nodeValue);
	        if (!!groups) {
	        	const index = groups.slice(1).findIndex(item => !!item);
	        	node.nodeValue = node.nodeValue.replace(one, result[i].replacements[Math.floor(Math.random() * result[i].replacements.length)][index]);
	        }	        

	    }
	}
});
