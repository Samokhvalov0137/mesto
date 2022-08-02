import "./index.css"; // добавьте импорт главного файла стилей

import {
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
} from "../scripts/utils/constants.js";
import { Api } from "../scripts/components/Api";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithConfirmation } from "../scripts/components/PopupWithConfirmation.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";

// ФУНКЦИИ
// функция для подставления значений в попап редактирования
function handleOpenPopupEdit() {
  const userData = userInfo.getUserInfo();
  popupEdit.setInputValues("form_name", userData.name);
  popupEdit.setInputValues("form_status", userData.status);
  resetValidation[formProfileEdit.name].resetError();
  popupEdit.open();
}

// функция отправки и кнопки "сохранить" в попапе редактирования имени
function handleProfileFormSubmit({form_name, form_status}) {
  popupEdit.setButtonText("Сохранение...");
  api
    .patchUserInfo({
      name: form_name,
      about: form_status
    })
    .then((userData) => {
      userInfo.setUserData(userData);
      popupEdit.close();
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      popupEdit.setButtonText("Сохранить");
    });
  resetValidation[formProfileEdit.name].toggleButtonState();
}


function handleEditAvatar({form_avatar}) {
  popupAvatar.setButtonText("Сохранение...");
  api
    .patchUserAvatar({ avatar: form_avatar})
    .then((userData) => {
      userInfo.setUserData(userData);
      popupAvatar.close();
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      popupAvatar.setButtonText("Сохранить");
    });
  resetValidation[formAvatarEdit.name].toggleButtonState();
}

// //функция открытия попапа с картинкой
function handleCardClick(link, name) {
  popupCardPhoto.open({ link: link, name: name });
}

//генерация карточки
// функция создания карточек и прохождение по массиву с данными

function createCard(initialData) {
  const card = new Card(
    initialData,
    "#elements__template",
    handleCardClick,
    userInfo.getUserId(),
    handleDeleteCardButton,
    handleLikeButton
  );
  return card.generationCard();
}

// функция отправки формы для создания карточек
function handleAddCardFormSubmit({form_place, form_link}) {
  popupCard.setButtonText("Сохранение...");
  api
    .postCardData({
      name: form_place,
      link: form_link,
    })
    .then((cardData) => {
      const newCard = createCard(cardData);
      section.addItem(newCard);
      popupCard.close();
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      popupCard.setButtonText("Создать");
    });
}


function handleConfirmationSubmit() {
  popupDeleteCard.setButtonText("Удаление...");
  api
    .deleteCard(popupDeleteCard.cardForDelete._id)
    .then(() => {
      popupDeleteCard.cardForDelete.deleteElementCard();
      popupDeleteCard.close();
      popupDeleteCard.cardForDelete = {}
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      popupDeleteCard.setButtonText("Да");
    })
}

function handleDeleteCardButton(cardObject) {
  popupDeleteCard.cardForDelete = cardObject;
  popupDeleteCard.open();
}

function handleLikeButton(cardObject) {
  if (cardObject._like) {
    api
      .deleteLike(cardObject._id)
      .then((cardData) => {
        cardObject.updateLikeState(cardData.likes);
      })
      .catch((err) => {
        alert(err);
      });
  } else {
    api
      .setLike(cardObject._id)
      .then((cardData) => {
        cardObject.updateLikeState(cardData.likes);
      })
      .catch((err) => {
        alert(err);
      });
  }
}

const api = new Api(fetchSetupData);

const section = new Section(
  {
    renderer: (item) => {
      const newCard = createCard(item);
      section.addItem(newCard);
    },
  },
  elementsCard
);

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

  
const popupCardPhoto = new PopupWithImage(popupImageForm);
popupCardPhoto.setEventListeners();

const popupEdit = new PopupWithForm(popupEditForm, handleProfileFormSubmit);
popupEdit.setEventListeners();

const popupCard = new PopupWithForm(popupAddForm, handleAddCardFormSubmit);
popupCard.setEventListeners();

const userInfo = new UserInfo(
  { userName: profileName,
    userJob: profileStatus,
    userAvatar: profileAvatar,
  });

const popupAvatar = new PopupWithForm(popupAvatarEdit, handleEditAvatar);
popupAvatar.setEventListeners();

const popupDeleteCard = new PopupWithConfirmation(popupDeleteForm, handleConfirmationSubmit);
popupDeleteCard.setEventListeners();


// ОБРАБОТЧИКИ СОБЫТИЙ

// открытие попапа добавления карточек
popupOpenAddCard.addEventListener("click", () => {
  resetValidation[popupFormAdd.name].resetError();
  popupCard.open();
});

// кнопка открытия попапа редактирования
buttonOpenPopupEdit.addEventListener("click", handleOpenPopupEdit);

// попап редактирования аватара
buttonOpenAvatar.addEventListener("click", () => {
  resetValidation[formAvatarEdit.name].resetError();
  popupAvatar.open();
});


Promise.all([
  api.getUserInfo(),
  api.getCardsArray() ])
  .then((data) => {
    userInfo.setUserData(data[0]);
    section.reverseRenderItems(data[1]);
  })
  .catch((err) => {
    alert(err);
  });


