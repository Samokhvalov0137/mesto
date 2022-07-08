import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { submitFormHandler }) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector("form");
    this._submitButton = this._form.querySelector(".form__submit-btn");
    this._submitFormHandler = submitFormHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = "Сохранение...";
    });
  }

  close() {
    super.close();
    this._submitButton.textContent = "Сохранить";
    this._form.reset();
  }
}
