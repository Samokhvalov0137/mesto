// ПЕРЕМЕННЫЕ
//const popup = document.querySelector('.popup');

const validationData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
};

const buttonOpenPopupEdit = document.querySelector(".profile__button-edit");
const popupEdit = document.querySelector("#popup-edit");
const popupCloseEditButton = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const formProfileEdit = document.querySelector("#form-edit");
const nameInput = document.querySelector('input[name="form_name"]');
const jobInput = document.querySelector('input[name="form_status"]');
// переменные попапа добавления карточки
const popupCard = document.querySelector("#popup-add");
const popupCloseAddCard = document.querySelector("#popup-add__close");
const popupOpenAddCard = document.querySelector(".profile__button-add");
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
const popupCloseCardPhotoButton = document.querySelector("#popup-card__close");
const buttonAddPhoto = document.querySelector('#form__add-bth')
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
popupOpenAddCard.addEventListener("click", () => openPopup(popupCard));

// функция закрытия попапа добавления карточек
popupCloseAddCard.addEventListener("click", () => closePopup(popupCard));

// функция закрытия попапа с фото
popupCloseCardPhotoButton.addEventListener("click", () =>
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
  
  buttonAddPhoto.classList.add('form__button_inactive');
};


// ОБРАБОТЧИКИ СОБЫТИЙ

// кнопки открыть и закрыть для попапа редактирования
buttonOpenPopupEdit.addEventListener("click", handleOpenPopupEdit);
buttonOpenPopupEdit.addEventListener("click", () => openPopup(popupEdit));
popupCloseEditButton.addEventListener("click", () => closePopup(popupEdit));

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






// Слушатели закрытия оверлеем

popupEdit.addEventListener('mousedown', closePopupOverlayClick); 
popupCard.addEventListener('mousedown', closePopupOverlayClick); 
popupCardPhoto.addEventListener('mousedown', closePopupOverlayClick); 
