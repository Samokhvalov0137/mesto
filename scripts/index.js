// ПЕРЕМЕННЫЕ
const popup = document.querySelector('.popup');
const buttonOpenPopupEdit = document.querySelector(".profile__button-edit");
const popupEdit = document.querySelector("#popup-edit");
const closePopupEditButton = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const formProfileEdit = document.querySelector("#form-edit");
const nameInput = document.querySelector('input[name="form_name"]');
const jobInput = document.querySelector('input[name="form_status"]');
// переменные попапа добавления карточки
const popupCard = document.querySelector("#popup-add");
const closePopupAddCard = document.querySelector("#popup-add__close");
const openPopupAddCard = document.querySelector(".profile__button-add");
// шаблоны
const initialCardTemplate = document
  .querySelector("#elements__template")
  .content.querySelector(".element");
// ДОМ элементы
const initialContainer = document.querySelector(".elements");
const popupFormAdd = document.querySelector("#form__add");
const placeInput = document.querySelector("#input_add_place");
const linkInput = document.querySelector("#input_add_link");
const photoPopupCard = document.querySelector(".popup__image");
const namePopupCard = document.querySelector(".popup__name");
// попап просмотра картинки
const popupCardPhoto = document.querySelector(".popup_images");
const closePopupCardPhotoButton = document.querySelector("#popup-card__close");


// ФУНКЦИИ
// функция открытия попапа
const openPopup = (popupName) => {
  popupName.classList.add("popup_opened");
};

// функция для подставления значений в попап редактирования
function handleOpenPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
  openPopup(popupEdit);
}

// функция закрытия попапа

const closePopup = (popupName) => {
  popupName.classList.remove("popup_opened");
};


//функция закрытия попапов по нажатию Esc
document.addEventListener('keydown', function(event){
 if (event.key === 'Escape'){
    closePopup(popupEdit);
    closePopup(popupCard);
    closePopup(popupCardPhoto);
  }
});


//функция закрытия попапа оверлеем
function closePopupOverlayClick(evt){
  if (evt.target === evt.currentTarget){
    closePopup(popupEdit);
    closePopup(popupCard);
    closePopup(popupCardPhoto);
  }
}


// функция отправки и кнопки "сохранить" в попапе редактирования имени
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileStatus.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup(popupEdit);
}


// функция открытия попапа добавления карточек
openPopupAddCard.addEventListener("click", () => openPopup(popupCard));

// функция закрытия попапа добавления карточек
closePopupAddCard.addEventListener("click", () => closePopup(popupCard));

// функция закрытия попапа с фото
closePopupCardPhotoButton.addEventListener("click", () =>
  closePopup(popupCardPhoto)
);

// функция для лайка
const handleLikeCard = (event) => {
  event.target.classList.toggle("element__vector_active");
};

// функция для корзины
const handleDeleteCard = (event) => {
  event.target.closest(".element").remove();
};

// функция отправки формы для создания карточек
const handleAddCardFormSubmit = (event) => {
  event.preventDefault();

  renderCard({
    name: placeInput.value,
    link: linkInput.value,
  });

  placeInput.value = "";
  linkInput.value = "";

  closePopup(popupCard);
};


//функция показа ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
};

// функция скрытия ошибки
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.textContent = '';
};


// функция проверки валидности
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};


// ОБРАБОТЧИКИ СОБЫТИЙ

// кнопки открыть и закрыть для попапа редактирования
buttonOpenPopupEdit.addEventListener("click", handleOpenPopupEdit);
buttonOpenPopupEdit.addEventListener("click", () => openPopup(popupEdit));
closePopupEditButton.addEventListener("click", () => closePopup(popupEdit));

// слушатель кнопки "сохранить" в попапе редактирования имени
formProfileEdit.addEventListener("submit", handleProfileFormSubmit);

//генерация карточки

const generateCard = (initialData) => {
  const newInitialCard = initialCardTemplate.cloneNode(true);

  const elementTitle = newInitialCard.querySelector(".element__title");
  elementTitle.textContent = initialData.name;

  const elementPhoto = newInitialCard.querySelector(".element__photo");
  elementPhoto.src = initialData.link;
  elementPhoto.alt = initialData.name;


  // функция нажатия на картинку в карточке
  function hendleTapCard (){
    photoPopupCard.src = initialData.link;
    namePopupCard.textContent = initialData.name;
    photoPopupCard.alt = initialData.name;
  
    openPopup(popupCardPhoto);
  };

  elementPhoto.addEventListener("click",hendleTapCard);

  // like card
  const likeButton = newInitialCard.querySelector(".element__vector");
  likeButton.addEventListener("click", handleLikeCard);

  // delete card
  const deleteButton = newInitialCard.querySelector(".element__trash");
  deleteButton.addEventListener("click", handleDeleteCard);

  return newInitialCard;
};

//Рендер карточки
const renderCard = (initialData) => {
  initialContainer.prepend(generateCard(initialData));
};

initialCards.forEach((initialData) => {
  renderCard(initialData);
});

popupFormAdd.addEventListener("submit", handleAddCardFormSubmit);





// 
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit-btn');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      
      toggleButtonState(inputList, buttonElement);
    });
  });
};


// функция переключения состояния кнопки
const toggleButtonState = (inputList, buttonElement) =>{
  if (hasInvalidInput(inputList)){
    buttonElement.classList.add('form__button_inactive');
  }else{
    buttonElement.classList.remove('form__button_inactive');
  };
};


// 
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
   
    fieldsetList.forEach((fieldSet) =>{
     setEventListeners(fieldSet);  
    });

  });
};


//
const hasInvalidInput = (inputList) =>{
  return inputList.some((inputElement) => {
  
    return !inputElement.validity.valid;
  })
}; 

enableValidation();


// Слушатели закрытия оверлеем

popupEdit.addEventListener('mousedown', closePopupOverlayClick); 
popupCard.addEventListener('mousedown', closePopupOverlayClick); 
popupCardPhoto.addEventListener('mousedown', closePopupOverlayClick); 
