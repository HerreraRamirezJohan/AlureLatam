document.addEventListener('DOMContentLoaded', function(){
    startApp();
});

function startApp(){
    scrollNav();
    writeText();
}
/* Generar una navegacion suve al usar los links */
function scrollNav(){
    const links = document.querySelectorAll('.principal-nav');
    
    links.forEach(enlace =>{
        enlace.addEventListener('click', function (e){
            e.preventDefault();

            const sectionScroll = e.target.attributes.href.value;
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({behavior: "smooth"});
        });
    });
};

let index = 0;
function writeText(){
    const phrases = [
        "Studen of Software Enginner from Guadalaja University",
        "Knowlwdge in PHP - C# - JavaScrip - SQL",
        "Imagine, Plan and Create!"
    ];

    const typingText = document.querySelector(".typing-text");
    const currentPhrase = phrases[index];

    let i = 0;
    const interval = setInterval(function() {
        typingText.textContent += currentPhrase[i];
        i++;
        if (i > currentPhrase.length - 1) {
            clearInterval(interval);
            setTimeout(function() {
                eraseText();
            }, 2000); // Agrega una pausa de 2 segundos antes de borrar el texto.
        }
    }, 100);

    function eraseText() {
        const currentText = typingText.textContent;
        const newText = currentText.slice(0, -1);
        typingText.textContent = newText;

        if (newText === '') {
            index++;
            if (index >= phrases.length) {
                index = 0;
            }
            setTimeout(writeText(), 2000); // Agrega una pausa de 2 segundos antes de escribir el texto de la siguiente frase.
        } else {
            setTimeout(eraseText(), 100);
        }
    }
}
