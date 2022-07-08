import './index.css'; // добавьте импорт главного файла стилей

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
} from "../scripts/utils/constants.js";
import { Api } from '../scripts/components/Api';
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
  nameInput.value = userData.userName;
  jobInput.value = userData.userJob;
  popupEdit.open();
}

// функция отправки и кнопки "сохранить" в попапе редактирования имени
function handleProfileFormSubmit() {
  api
  .patchUserInfo({ 
    name: nameInput.value,
    about: jobInput.value
  })
  .then((userData) => {
    userInfo.setUserData(userData);
    popupEdit.close();
  })
  .catch((err) => {
    alert(err);
  });
  resetValidation[formProfileEdit.name].toggleButtonState();
}


function handleEditAvatar() {
  api
  .patchUserAvatar({ avatar: formAvatar.value })
    .then((userData) => {
      userInfo.setUserData(userData);
      popupAvatar.close();
    })
    .catch((err) => {
      alert(err);
    });
    resetValidation[formAvatarEdit.name].toggleButtonState();
}


// //функция открытия попапа с картинкой
function handleCardClick(link, name) {
  popupCardPhoto.open({ link: link, name: name });
}

const api = new Api(fetchSetupData);

//генерация карточки
// функция создания карточек и прохождение по массиву с данными

function createCard(initialData) {
  const card = new Card(initialData, 
    "#elements__template", 
    handleCardClick, 
    userInfo.getUserId(), 
    handleDeleteCardButton, 
    handleLikeButton
    );
  return card.generationCard();
}

// функция отправки формы для создания карточек
function handleAddCardFormSubmit () {
  api
  .postCardData({
      name: placeInput.value,
      link: linkInput.value,
    })
    .then((cardData) => {
      //event.preventDefault();
      const newCard = createCard(cardData);
      section.addItem(newCard);
      popupCard.close();
    })
    .catch((err) => {
      alert(err);
    });
};





function handleConfirmationSubmit(){
  api
  .deleteCard(popupDeleteCard.cardForDelete._id)
    .then(() => {
      popupDeleteCard.cardForDelete.deleteElementCard();
      popupDeleteCard.close();
      popupDeleteCard.cardForDelete = {};
    })
    .catch((err) => {
      alert(err);
    })
}


function handleDeleteCardButton(cardObject){
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


const section = new Section(
  {
    renderer: (item) => {
      const newCard = createCard(item);
      section.addItem(newCard);
    },
  },
  elementsCard
);


api
  .getCardsArray()
  .then((cardsArray) => {
    section.renderItems(cardsArray);
  })
  .catch((err) => {
    alert(err);
  });



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

const popupEdit = new PopupWithForm(popupEditSelector, handleProfileFormSubmit);
popupEdit.setEventListeners();

const popupCard = new PopupWithForm(popupAddSelector, handleAddCardFormSubmit);
popupCard.setEventListeners();



const userInfo = new UserInfo(".profile__name", ".profile__status", ".profile__avatar");

api
  .getUserInfo()
  .then((userData) => {
    userInfo.setUserData(userData);
  })
  .catch((err) => {
    alert(err);
  });


const popupAvatar = new PopupWithForm(popupAvatarEdit, handleEditAvatar);
popupAvatar.setEventListeners();

const popupDeleteCard = new PopupWithConfirmation(popupDeleteSelector, handleConfirmationSubmit);
popupDeleteCard.setEventListeners();
// ОБРАБОТЧИКИ СОБЫТИЙ

popupDeleteClose.addEventListener("click", () => popupDeleteCard.close());

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

formAvatarEdit.addEventListener("submit", handleEditAvatar);
