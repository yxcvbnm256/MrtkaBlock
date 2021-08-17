const body = document.body.innerHTML;

fetch('https://yxcvbnm256.pythonanywhere.com/static/mrtki/mrtki.json').then(r => r.text()).then(result => {
    // Result now contains the response text, do what you want...
    alert(result);
})

//alert(markup);