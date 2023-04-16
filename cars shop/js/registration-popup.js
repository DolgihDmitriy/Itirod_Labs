let popupBground = document.querySelector('.registration-popup-bg'); // Фон попап окна
// let popupBg = document.querySelector('.login-popup-bg');
let popupReg = document.querySelector('.registration-popup'); // Само окно
let popupLog = document.querySelector('.login-popup'); 
let openPopup = document.querySelector('.menu__list-reg'); // Кнопка для показа окна
let closePopup = document.querySelector('.close-elem__button'); // Кнопка для скрытия окна
let openLogin = document.querySelector('.login__link'); // Ссылка на логин форму


openPopup.addEventListener('click', () => { 
        popupBground.classList.add('active'); // Добавляем класс 'active' для фона
        popupReg.classList.add('active'); // И для самого окна
});

closePopup.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBground.classList.remove('active'); // Убираем активный класс с фона
    popupReg.classList.remove('active'); // И с окна
});

openLogin.addEventListener('click', ()=>{
    popupReg.classList.remove('active');
    popupBground.classList.remove('active');
    popupLog.classList.add('active');
    popupBg.classList.add('active');
})




document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBground) { // Если цель клика - фон, то:
        popupBground.classList.remove('active'); // Убираем активный класс с фона
        popupReg.classList.remove('active'); // И с окна
    }
});


let firstEye = document.getElementById("firstEye");
let firstField = document.getElementById("firstPassword");
let secondEye = document.getElementById("eyeicon");
let secondField = document.getElementById("passwordConfirm");

firstEye.onclick = function(){
    if(firstField.type == "password"){
            firstField.type = "text";
            firstEye.src = "images/eye-open.png";
    }else{
            firstField.type = "password";
            firstEye.src = "images/eye-close.png";
        }
}

secondEye.onclick = function(){
    if(secondField.type == "password"){
            secondField.type = "text";
            secondEye.src = "images/eye-open.png";
    }else{
            secondField.type = "password";
            secondEye.src = "images/eye-close.png";
        }
}