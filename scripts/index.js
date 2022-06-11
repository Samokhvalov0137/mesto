import { initialCards, Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// ПЕРЕМЕННЫЕ

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-btn",
  inactiveButtonClass: ".form__button_inactive",
  inputErrorClass: ".form__input_type_error",
  errorClass: ".form__set",
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

// ДОМ элементы
//const initialContainer = document.querySelector(".elements");
const popupFormAdd = document.querySelector("#form__add");
const placeInput = document.querySelector("#input_add_place");
const linkInput = document.querySelector("#input_add_link");

// попап просмотра картинки

const buttonAddPhoto = document.querySelector("#form__add-bth");
const popupCardPhoto = document.querySelector(".popup_images");
const photoPopupCard = document.querySelector(".popup__image");
const namePopupCard = document.querySelector(".popup__name");
const popupCloseCardPhotoButton = document.querySelector("#popup-card__close");


// ФУНКЦИИ

//функция закрытия попапов по нажатию Esc

function keydownHeandler(evt) {
  if (evt.key === "Escape") {
    const popupOpen = document.querySelector(".popup_opened");
    closePopup(popupOpen);
  }
}

// функция открытия попапа
const openPopup = (popupName) => {
  document.addEventListener("keydown", keydownHeandler);
  popupName.classList.add("popup_opened");
};

// функция закрытия попапа
const closePopup = (popupName) => {
  document.removeEventListener("keydown", keydownHeandler);
  popupName.classList.remove("popup_opened");
};

// функция для подставления значений в попап редактирования
function handleOpenPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
  openPopup(popupEdit);
}

//функция закрытия попапа оверлеем
function closePopupOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    const popupOpen = document.querySelector(".popup_opened");
    closePopup(popupOpen);
  }
}

// функция отправки и кнопки "сохранить" в попапе редактирования имени
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileStatus.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup(popupEdit);
}

//функция открытия попапа с картинкой
function hendleTapCard (link, name){
  photoPopupCard.src = link;
  namePopupCard.textContent = name;
  photoPopupCard.alt = name;

  openPopup(popupCardPhoto);
};

// функция закрытия попапа с катинкой
popupCloseCardPhotoButton.addEventListener("click", () =>
  closePopup(popupCardPhoto)
);

// функция открытия попапа добавления карточек
popupOpenAddCard.addEventListener("click", () => openPopup(popupCard));

// функция закрытия попапа добавления карточек
popupCloseAddCard.addEventListener("click", () => closePopup(popupCard));


// функция отправки формы для создания карточек
const handleAddCardFormSubmit = (event) => {
  event.preventDefault();

  createCard({
    name: placeInput.value,
    link: linkInput.value,
  });

  placeInput.value = "";
  linkInput.value = "";

  closePopup(popupCard);

  disableSubmitButton(buttonAddPhoto);
  debugger;
};


//генерация карточки
// функция создания карточек и прохождение по массиву с данными

function createCard(initialData) {
  const card = new Card(initialData, "#elements__template", hendleTapCard);
  const cardElement = card.generationCard();

  document.querySelector(".elements").prepend(cardElement);
}

initialCards.forEach((initialData) => {
  createCard(initialData);
});


// функция валидации
function enableValidation(object) {
  const formList = Array.from(
    document.querySelectorAll(object.formSelector)
  );
  formList.forEach((formElement) => {
    const validator = new FormValidator(object, formElement);
    validator.enableValidation()
  });
}
enableValidation(validationConfig);


// ОБРАБОТЧИКИ СОБЫТИЙ

//слушатель открытия попапа с картинкой
photoPopupCard.addEventListener("click",hendleTapCard);

// кнопки открыть и закрыть для попапа редактирования
buttonOpenPopupEdit.addEventListener("click", handleOpenPopupEdit);
buttonOpenPopupEdit.addEventListener("click", () => openPopup(popupEdit));
popupCloseEditButton.addEventListener("click", () => closePopup(popupEdit));

// слушатель кнопки "сохранить" в попапе редактирования имени
formProfileEdit.addEventListener("submit", handleProfileFormSubmit);


popupFormAdd.addEventListener("submit", handleAddCardFormSubmit);

// Слушатели закрытия оверлеем

popupEdit.addEventListener("mousedown", closePopupOverlayClick);
popupCard.addEventListener("mousedown", closePopupOverlayClick);
popupCardPhoto.addEventListener("mousedown", closePopupOverlayClick);