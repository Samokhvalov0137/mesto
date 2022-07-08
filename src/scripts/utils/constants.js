// массив карточек с фото и названиями
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
  submitButtonSelector: ".form__submit-btn",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__set",
};

const buttonOpenPopupEdit = document.querySelector(".profile__button-edit");

const popupCloseEditButton = document.querySelector(".popup__close");
const nameInput = document.querySelector('input[name="form_name"]');
const jobInput = document.querySelector('input[name="form_status"]');

//попап редактирования аватара
const buttonOpenAvatar = document.querySelector(".profile__button-avatar");
const popupCloseAvatar = document.querySelector("#popup-avatar__close");
const popupAvatarEdit = ".popup_avatar";
const formAvatar = document.querySelector('input[name="form_avatar"]');
const formAvatarEdit = document.querySelector("#form__avatar");
const popupDeleteSelector = ".popup_delete";
const popupDeleteClose = document.querySelector("#popup-delete__close");
// переменные попапа добавления карточки
const popupCloseAddCard = document.querySelector("#popup-add__close");
const popupOpenAddCard = document.querySelector(".profile__button-add");
const elementsCard = ".elements";

// попап удаление карточек

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
  popupAvatarEdit,
  formAvatar,
  formAvatarEdit,
  fetchSetupData,
  popupDeleteSelector,
  popupDeleteClose,
};
