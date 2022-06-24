import { initialCards } from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js"
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

// ПЕРЕМЕННЫЕ

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-btn",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__set",
};

const buttonOpenPopupEdit = document.querySelector(".profile__button-edit");
//const popupEdit = document.querySelector("#popup-edit");
const popupCloseEditButton = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const nameInput = document.querySelector('input[name="form_name"]');
const jobInput = document.querySelector('input[name="form_status"]');
// переменные попапа добавления карточки
//const popupCard = document.querySelector("#popup-add");
const popupCloseAddCard = document.querySelector("#popup-add__close");
const popupOpenAddCard = document.querySelector(".profile__button-add");
const elementsCard = ".elements";
// шаблоны

// ДОМ элементы
//const initialContainer = document.querySelector(".elements");
const placeInput = document.querySelector("#input_add_place");
const linkInput = document.querySelector("#input_add_link");

// попап просмотра картинки

const buttonAddPhoto = document.querySelector("#form__add-bth");
//const popupCardPhoto = document.querySelector(".popup_images");
// const photoPopupCard = document.querySelector(".popup__image");
// const namePopupCard = document.querySelector(".popup__name");
const popupCloseCardPhotoButton = document.querySelector("#popup-card__close");

const popupImageSelector = ('.popup_images')
const popupEditSelector = ('#popup-edit')
//const popupEditForm = document.querySelector(popupEditSelector).querySelector('form')
const formProfileEdit = document.querySelector("#form-edit");


const popupAddSelector = ('#popup-add')
//const popupAddForm = document.querySelector(popupEditSelector).querySelector('form')
const popupFormAdd = document.querySelector("#form__add");


const resetValidation = {};




// ФУНКЦИИ

// //функция закрытия попапов по нажатию Esc

// function keydownHeandler(evt) {
//   if (evt.key === "Escape") {
//     const popupOpen = document.querySelector(".popup_opened");
//     closePopup(popupOpen);
//   }
// }

// // функция открытия попапа
// const openPopup = (popupName) => {
//   document.addEventListener("keydown", keydownHeandler);
//   popupName.classList.add("popup_opened");
// };

// // функция закрытия попапа
// const closePopup = (popupName) => {
//   document.removeEventListener("keydown", keydownHeandler);
//   popupName.classList.remove("popup_opened");
// };

// //функция закрытия попапа оверлеем
// function closePopupOverlayClick(evt) {
//   if (evt.target === evt.currentTarget) {
//     //const popupOpen = document.querySelector(".popup_opened");
//     closePopup(evt.currentTarget);
//   }
// }

// функция для подставления значений в попап редактирования
function handleOpenPopupEdit() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.userName;
  jobInput.value = userData.userJob;
  popupEdit.open();
}


// функция отправки и кнопки "сохранить" в попапе редактирования имени
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();

//   profileStatus.textContent = jobInput.value;
//   profileName.textContent = nameInput.value;
//   closePopup(popupEdit);
//   resetValidation[formProfileEdit.name].toggleButtonState();
// }
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileStatus.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  popupEdit.close();
  resetValidation[formProfileEdit.name].toggleButtonState();
}


// //функция открытия попапа с картинкой
// function hendleTapCard(link, name) {
//   photoPopupCard.src = link;
//   namePopupCard.textContent = name;
//   photoPopupCard.alt = name;

//   openPopup(popupCardPhoto);
// }
function handleCardClick(link, name) {
  popupCardPhoto.open({ link: link, name: name });
}

// функция закрытия попапа с катинкой
popupCloseCardPhotoButton.addEventListener("click", () =>
  popupCardPhoto.close()
);

// функция открытия попапа добавления карточек
popupOpenAddCard.addEventListener("click", () => popupCard.open());

// функция закрытия попапа добавления карточек
popupCloseAddCard.addEventListener("click", () => popupCard.close());

// функция отправки формы для создания карточек
const handleAddCardFormSubmit = (event) => {
  event.preventDefault();

  const newCard = createCard({
    name: placeInput.value,
    link: linkInput.value,
  });

  section.addItem(newCard);

  placeInput.value = "";
  linkInput.value = "";

  popupCard.close();
  //section.addItem(card);
  resetValidation[popupFormAdd.name].toggleButtonState();
};

//генерация карточки
// функция создания карточек и прохождение по массиву с данными

function createCard(initialData) {
  const card = new Card(initialData, "#elements__template", handleCardClick);
  //elementsCard.prepend(card.generationCard());
  return card.generationCard();
}

// initialCards.forEach((initialData) => {
//   // createCard(initialData);
//   renderCard(initialData);
// });

// function renderCard(initialData) {
//   const newCard = createCard(initialData);
//   elementsCard.prepend(newCard);
// }

const section = new Section ({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);
    section.addItem(newCard)
  },
}, elementsCard)

section.renderItems();

// функция валидации
function enableValidation(object) {
  const formList = Array.from(document.querySelectorAll(object.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(object, formElement);
    resetValidation[formElement.name] = validator;
    validator.enableValidation();
  });
}


enableValidation(validationConfig);



const popupCardPhoto = new PopupWithImage(popupImageSelector);
popupCardPhoto.setEventListeners();

const popupEdit = new PopupWithForm(popupEditSelector, 
  {handleProfileFormSubmit: (data) => {
    userInfo.setUserInfo(data)
    popupEdit.close()
  }
  });
popupEdit.setEventListeners();

const popupCard = new PopupWithForm(popupAddSelector, handleAddCardFormSubmit);
popupCard.setEventListeners()

const userInfo = new UserInfo('.profile__name', '.profile__status')

// ОБРАБОТЧИКИ СОБЫТИЙ

//слушатель открытия попапа с картинкой
//photoPopupCard.addEventListener("click", hendleTapCard);

// кнопки открыть и закрыть для попапа редактирования
buttonOpenPopupEdit.addEventListener("click", handleOpenPopupEdit);
buttonOpenPopupEdit.addEventListener("click", () => popupEdit.open());
popupCloseEditButton.addEventListener("click", () => popupEdit.close());

// слушатель кнопки "сохранить" в попапе редактирования имени
formProfileEdit.addEventListener("submit", handleProfileFormSubmit);

popupFormAdd.addEventListener("submit", handleAddCardFormSubmit);

// Слушатели закрытия оверлеем

// popupEdit.addEventListener("mousedown", closePopupOverlayClick);
// popupCard.addEventListener("mousedown", closePopupOverlayClick);
// popupCardPhoto.addEventListener("mousedown", closePopupOverlayClick);
