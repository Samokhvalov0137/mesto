class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector(".popup__close");
    this._closePopup = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    document.addEventListener("keydown", this._closePopup);
    this._popup.classList.add("popup_opened");
  }

  close() {
    document.removeEventListener("keydown", this._closePopup);
    this._popup.classList.remove("popup_opened");
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close(evt.currentTarget);
      }
    });

    this._buttonClose.addEventListener("click", this.close.bind(this));
  }
}

export { Popup };
