import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, {submitFormHandler}) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector("form");
    this._submitButton = this._form.querySelector(".form__submit-btn");
    this._inputList = this._popupSelector.querySelectorAll(".form__input");
    this._submitFormHandler = submitFormHandler;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = 'Сохранение...';
      this._submitFormHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._submitButton.textContent = 'Сохранить';
    this._form.reset();
  }
}
