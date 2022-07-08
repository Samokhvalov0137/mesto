class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._closePopup = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    document.addEventListener("keydown", this._closePopup);
    this._popupSelector.classList.add("popup_opened");
  }

  close() {
    document.removeEventListener("keydown", this._closePopup);
    this._popupSelector.classList.remove("popup_opened");
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close(evt.currentTarget);
      }
    });
  }
}

export { Popup };
