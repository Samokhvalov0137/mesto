import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._submitButton = this._popupSelector.querySelector(".form__submit-btn");
    this._handleSubmit = handleSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener("click", () => {
        this._submitButton.textContent = 'Удаляю...'  
      this._handleSubmit();
    });
  }
}