var a = 0
function changeMode (){
    changeClass()
    changeText()
}

function changeClass(){
    body.classList.toggle('dark-mode');
}
function changeText(){
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'

    if(body.classList.contains('dark-mode')){
        h1.innerHTML = darkMode + ' ON'
        botao.innerHTML = 'Change for Light Mode'
    } else{
        h1.innerHTML = lightMode + ' ON'
        botao.innerHTML = 'Change for Dark Mode'

    }
}

const darkModeClass = 'dark-mode'
const botao = document.getElementById("botao")
const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementById("mode")
botao.addEventListener('click', changeMode);