// массив карточек с фото и названиями
export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  //генерация карточки
  generationCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__photo").src = this._link;
    this._element.querySelector(".element__photo").alt = this._name;

    this._photoCard = this._element.querySelector(".element__photo");
    this._cardLike = this._element.querySelector(".element__vector");
    this._cardTrash = this._element.querySelector(".element__trash");

    this._setEventListeners();

    return this._element;
  }

  // слушатели
  _setEventListeners() {
    this._photoCard.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    popupCloseCardPhotoButton.addEventListener("click", () => {
      this._handleClosePopup();
    });

    this._cardLike.addEventListener("click", () => {
      this._handleLikeCard();
    });

    this._cardTrash.addEventListener("click", () => {
      this._handleDeleteCard();
    });
  }

  // метод открытия попапа карточки
  _handleOpenPopup() {
    photoPopupCard.src = this._link;
    namePopupCard.textContent = this._name;
    photoPopupCard.alt = this._name;

    openPopup(popupCardPhoto);
  }

  //метод закрытия попапа карточки
  _handleClosePopup() {
    photoPopupCard.src = "";
    closePopup(popupCardPhoto);
  }

  // метод для лайка
  _handleLikeCard() {
    this._cardLike.classList.toggle("element__vector_active");
  }

  // метод удаления карточки
  _handleDeleteCard() {
    this._element.remove();
  }
}
