// массив карточек с фото и названиями
const fetchSetupData = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '9d5eb0d3-fb55-4a88-9fe1-f4f0f3428bab',
    'Content-Type': 'application/json'
  }
}

// let initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-btn",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__set",
};

const buttonOpenPopupEdit = document.querySelector(".profile__button-edit");

const popupCloseEditButton = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const nameInput = document.querySelector('input[name="form_name"]');
const jobInput = document.querySelector('input[name="form_status"]');

//попап редактирования аватара
const buttonOpenAvatar = document.querySelector('.profile__button-avatar');
const popupCloseAvatar = document.querySelector('#popup-avatar__close')
const profileAvatarPhoto = document.querySelector('.profile__avatar');
const popupAvatarEdit = ".popop_avatar";
const formAvatar = document.querySelector('input[name="form_avatar"]');
const formAvatarEdit = document.querySelector('#form__avatar');

// переменные попапа добавления карточки
const popupCloseAddCard = document.querySelector("#popup-add__close");
const popupOpenAddCard = document.querySelector(".profile__button-add");
const elementsCard = ".elements";

// попап удаление карточек
const popupDeleteCard = ".popup_delete";
// шаблоны

// ДОМ элементы
const placeInput = document.querySelector("#input_add_place");
const linkInput = document.querySelector("#input_add_link");

// попап просмотра картинки

const popupCloseCardPhotoButton = document.querySelector("#popup-card__close");

const popupImageSelector = ".popup_images";
const popupEditSelector = "#popup-edit";
const formProfileEdit = document.querySelector("#form-edit");

const popupAddSelector = "#popup-add";
const popupFormAdd = document.querySelector("#form__add");

const resetValidation = {};

export {
  validationConfig,
  buttonOpenPopupEdit,
  popupCloseEditButton,
  profileName,
  profileStatus,
  nameInput,
  jobInput,
  popupCloseAddCard,
  popupOpenAddCard,
  elementsCard,
  placeInput,
  linkInput,
  popupCloseCardPhotoButton,
  popupImageSelector,
  popupEditSelector,
  formProfileEdit,
  popupAddSelector,
  popupFormAdd,
  resetValidation,
  buttonOpenAvatar,
  popupCloseAvatar,
  profileAvatarPhoto,
  popupAvatarEdit,
  formAvatar,
  formAvatarEdit,
  fetchSetupData,
  popupDeleteCard
};
