class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

    this._photoCard = this._element.querySelector(".element__photo");
    this._cardLike = this._element.querySelector(".element__vector");
    this._cardTrash = this._element.querySelector(".element__trash");

    this._element.querySelector(".element__title").textContent = this._name;
    this._photoCard.src = this._link;
    this._photoCard.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  // слушатели
  _setEventListeners() {
    this._photoCard.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });

    this._cardLike.addEventListener("click", () => {
      this._handleLikeCard();
    });

    this._cardTrash.addEventListener("click", () => {
      this._handleDeleteCard();
    });
  }

  // метод для лайка
  _handleLikeCard() {
    this._cardLike.classList.toggle("element__vector_active");
  }

  //метод удаления карточки
  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
}

export { Card };
