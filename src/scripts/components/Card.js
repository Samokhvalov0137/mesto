class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    curentUserId,
    handleDeleteCardButton,
    handleLikeButton
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likesArray = data.likes;
    this._likesCounter = data.likes.length;
    this._curentUserId = curentUserId;
    this._like = false;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._isCurentUserCard = this._curentUserId === data.owner._id;
    this._handleDeleteCardButton = handleDeleteCardButton;
    this._handleLikeButton = handleLikeButton;
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
    this._cardTitle = this._element.querySelector(".element__title");
    this._cardLikesCounter = this._element.querySelector(
      ".element__vector-counter"
    );

    this.updateLikeState(this._likesArray);

    if (!this._isCurentUserCard) {
      this._cardTrash.remove();
    }

    this._element.id = this._id;
    this._photoCard.src = this._link;
    this._photoCard.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  // слушатели
  _setEventListeners() {
    this._photoCard.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });

    this._cardLike.addEventListener("click", () => {
      this._handleLikeButton(this);
    });

    if (this._isCurentUserCard) {
      this._cardTrash.addEventListener("click", () => {
        this._handleDeleteCardButton(this);
      });
    }
  }

  updateLikeState(likesArray) {
    this._likesArray = likesArray;
    this._likesCounter = likesArray.length;
    this._cardLikesCounter.textContent = this._likesCounter;
    const newLikeState = this._likesArray.some(
      (arrayItem) => arrayItem._id === this._curentUserId
    );
    if (newLikeState !== this._like) {
      this._toggleLikeCard();
    }
  }

  //метод удаления карточки
  deleteElementCard() {
    this._element.remove();
    this._element = null;
  }

  // метод для лайка
  _toggleLikeCard() {
    this._cardLike.classList.toggle("element__vector_active");
    this._like = !this._like;
  }
}

export { Card };
