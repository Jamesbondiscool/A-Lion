const lion = document.getElementById("lion");
const greeting = document.getElementById("greeting");

function sayHello(language) {
    let text;
    if (language === 'english') {
        text = "Hello";
    } else if (language === 'french') {
        text = "Bonjour";
    } else if (language === 'spanish') {
        text = "Hola";
    } else if (language === 'german') {
        text = "Hallo";
    } else if (language === 'italian') {
        text = "Ciao";
    } else {
        text = "Invalid language";
    }
    greeting.innerHTML = text;
}

lion.addEventListener("click", function() {
    sayHello("english");
});
