let popupBg = document.querySelector('.login-popup-bg'); // Фон попап окна
let popup = document.querySelector('.login-popup'); // Само окно
let openPopupButton = document.querySelector('.menu__list-popup'); // Кнопка для показа окна
let closePopupButton = document.querySelector('.close-elem__btn'); // Кнопка для скрытия окна
let openRegister = document.querySelector('.text__link');
let popupRegist = document.querySelector('.registration-popup'); 

openPopupButton.addEventListener('click', () => { 
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    popup.classList.add('active'); // И для самого окна
});



closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});


openRegister.addEventListener('click', ()=>{
    popup.classList.remove('active');
    popupBg.classList.remove('active');
    popupRegist.classList.add('active');
    popupBground.classList.add('active');
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});


let showPassword = document.getElementById("showPassword");
let passwordField = document.getElementById("password");

showPassword.onclick = function(){
    if(passwordField.type == "password"){
            passwordField.type = "text";
            showPassword.src = "images/eye-open.png";
    }else{
            passwordField.type = "password";
            showPassword.src = "images/eye-close.png";
        }
}