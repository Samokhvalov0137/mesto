const openPopupButton = document.querySelector('.button_edit');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');

function popupOpenToggle(){
    popup.classList.toggle('popup_opened')
}

openPopupButton.addEventListener('click', popupOpenToggle);

closePopupButton.addEventListener('click', popupOpenToggle);


const addButton = document.querySelector('.button_add');
addButton.addEventListener('click', () => {
alert('Скоро эта кнопка заработает!')
});

let profileName = document.querySelector('.profile__name');
//console.log(profileName.textContent);



let formElement = document.querySelector('.form');

let nameInput = document.querySelector('.popup__form_name');
//console.log(nameInput.value);
let jobInput = document.querySelector('.popup__form_status'); 
//console.log(jobInput.value);

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

  
    let profileName = document.querySelector('.profile__name');
    //console.log(profileName.textContent);

    let profileStatus = document.querySelector('.profile__status');
    //console.log(profileStatus.textContent);
    
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;

    let saveButton = document.querySelector('.form__submit-btn');
    function closeForm(){
        popup.classList.remove('popup_opened')
    }
    saveButton.addEventListener('click', closeForm)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
