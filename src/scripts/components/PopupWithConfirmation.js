import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector(".popup__submit-btn");
    this._handleSubmit = handleSubmit;
  }


  setButtonText(text) {
    this._submitButton.textContent = text;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener("click", () => {
      this._handleSubmit();
    });
  }
}
