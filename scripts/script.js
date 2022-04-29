const openPopupButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.popup__form-name');
const jobInput = document.querySelector('.popup__form-status'); 
const saveButton = document.querySelector('.form__submit-btn');

// переменные 

function openPopup(){
    popup.classList.add('popup_opened');
}
// функция открытия попапа


function closePopup(){
    popup.classList.remove('popup_opened')
}
// функция закрытия попапа


openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
//saveButton.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();

    profileStatus.textContent = jobInput.value;
    profileName.textContent = nameInput.value;
closePopup();
}
// функция отправки и кнопки "сохранить"
formElement.addEventListener('submit', formSubmitHandler);