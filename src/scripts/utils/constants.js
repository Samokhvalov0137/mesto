// массив карточек с фото и названиями new
const fetchSetupData = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-44",
  headers: {
    authorization: "9d5eb0d3-fb55-4a88-9fe1-f4f0f3428bab",
    "Content-Type": "application/json",
  },
};

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__set",
};

const buttonOpenPopupEdit = document.querySelector(".profile__button-edit");

const popupCloseEditButton = document.querySelector(".popup__close");
const nameInput = document.querySelector('input[name="form_name"]');
const jobInput = document.querySelector('input[name="form_status"]');

const popupCloseAvatar = document.querySelector("#popup-avatar__close");
const popupDeleteClose = document.querySelector("#popup-delete__close");
// переменные попапа добавления карточки
const popupCloseAddCard = document.querySelector("#popup-add__close");

const placeInput = document.querySelector("#input_add_place");
const linkInput = document.querySelector("#input_add_link");

// попап просмотра картинки

const popupCloseCardPhotoButton = document.querySelector("#popup-card__close");


const formAvatar = document.querySelector('input[name="form_avatar"]');
//попап редактирования аватара
const buttonOpenAvatar = document.querySelector(".profile__button-avatar");

const popupDeleteForm = ".popup_delete";
// переменные попапа добавления карточки
const popupOpenAddCard = document.querySelector(".profile__button-add");
const elementsCard = ".elements";

const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const profileAvatar = document.querySelector(".profile__avatar");

// попап удаление карточек

// шаблоны

// ДОМ элементы

const popupAvatarEdit = ".popup_avatar";
const formAvatarEdit = document.querySelector(popupAvatarEdit).querySelector("form");

const popupImageForm = ".popup_images";
const popupEditForm = "#popup-edit";
const formProfileEdit = document.querySelector(popupEditForm).querySelector("form");

const popupAddForm = "#popup-add";
const popupFormAdd = document.querySelector(popupAddForm).querySelector("form");

const resetValidation = {};

export {
  validationConfig,
  buttonOpenPopupEdit,
  popupCloseEditButton,
  nameInput,
  jobInput,
  popupCloseAddCard,
  popupOpenAddCard,
  elementsCard,
  placeInput,
  linkInput,
  popupCloseCardPhotoButton,
  popupImageForm,
  popupEditForm,
  formProfileEdit,
  popupAddForm,
  popupFormAdd,
  resetValidation,
  buttonOpenAvatar,
  popupCloseAvatar,
  popupAvatarEdit,
  formAvatar,
  formAvatarEdit,
  fetchSetupData,
  popupDeleteForm,
  popupDeleteClose,
  profileName,
  profileStatus,
  profileAvatar,
};
