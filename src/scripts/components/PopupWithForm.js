import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector(".form");
    this._submitButton = this._form.querySelector(".popup__submit-btn");
    this._inputList = Array.from(this._form.querySelectorAll(".form__input"));
    this._submitFormHandler = submitFormHandler;
  }

  
  _getInputValues(){
    this._inputsValue = {};
    this._inputList.forEach(
      (input) => {this._inputsValue[input.name] = input.value}
    );
    return this._inputsValue;
  }


  setInputValues(elementName, elementValue){
    this._inputList.forEach((input) => {
      if (input.name === elementName){
        input.value = elementValue;
      }
    });
  }


  setButtonText(text) {
    this._submitButton.textContent = text;
  }



  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this._getInputValues());
    });
  }


  close() {
    super.close();
    this._form.reset();
  }
}
