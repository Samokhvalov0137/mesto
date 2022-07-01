import './index.css'; // добавьте импорт главного файла стилей

import {
  initialCards,
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
  formAvatarEdit
} from "../scripts/utils/constants.js";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";


// ФУНКЦИИ

// функция для подставления значений в попап редактирования
function handleOpenPopupEdit() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.userName;
  jobInput.value = userData.userJob;
  popupEdit.open();
}

// функция отправки и кнопки "сохранить" в попапе редактирования имени
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileStatus.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  popupEdit.close();

  resetValidation[formProfileEdit.name].toggleButtonState();
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();

  profileAvatarPhoto.src = formAvatar.value;
  popupAvatar.close();
  resetValidation[formAvatarEdit.name].toggleButtonState();
}

// //функция открытия попапа с картинкой
function handleCardClick(link, name) {
  popupCardPhoto.open({ link: link, name: name });
}


// функция отправки формы для создания карточек
const handleAddCardFormSubmit = (event) => {
  event.preventDefault();

  const newCard = createCard({
    name: placeInput.value,
    link: linkInput.value,
  });

  section.addItem(newCard);

  popupCard.close();
  resetValidation[popupFormAdd.name].toggleButtonState();
};

//генерация карточки
// функция создания карточек и прохождение по массиву с данными

function createCard(initialData) {
  const card = new Card(initialData, "#elements__template", handleCardClick);
  return card.generationCard();
}

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = createCard(item);
      section.addItem(newCard);
    },
  },
  elementsCard
);

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

const popupEdit = new PopupWithForm(popupEditSelector, {
  handleProfileFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupEdit.close();
  },
});
popupEdit.setEventListeners();

const popupCard = new PopupWithForm(popupAddSelector, handleAddCardFormSubmit);
popupCard.setEventListeners();

const userInfo = new UserInfo(".profile__name", ".profile__status");

const popupAvatar = new PopupWithForm(popupAvatarEdit, handleAvatarFormSubmit);
popupAvatar.setEventListeners();


// ОБРАБОТЧИКИ СОБЫТИЙ


// закрытие попапа с катинкой
popupCloseCardPhotoButton.addEventListener("click", () =>
  popupCardPhoto.close()
);

// открытие попапа добавления карточек
popupOpenAddCard.addEventListener("click", () => {
  resetValidation[popupFormAdd.name].resetError();
  popupCard.open()
});

// закрытие попапа добавления карточек
popupCloseAddCard.addEventListener("click", () => popupCard.close());


// кнопка открытия и закрытия для попапа редактирования
buttonOpenPopupEdit.addEventListener("click", () => {
  handleOpenPopupEdit;
  resetValidation[formProfileEdit.name].resetError();
  popupEdit.open()
});

popupCloseEditButton.addEventListener("click", () => popupEdit.close());

// попап редактирования аватара
buttonOpenAvatar.addEventListener("click", () => {
  resetValidation[formAvatarEdit.name].resetError();
  popupAvatar.open()
});

popupCloseAvatar.addEventListener("click", () => popupAvatar.close());


// слушатель кнопки "сохранить" в попапе редактирования имени
formProfileEdit.addEventListener("submit", handleProfileFormSubmit);

popupFormAdd.addEventListener("submit", handleAddCardFormSubmit);

formAvatarEdit.addEventListener("submit", handleAvatarFormSubmit);
