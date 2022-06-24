import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, {submitFormHandler}) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector('.form');
    this._inputList = this._popupSelector.querySelectorAll('.form__input');
    this._submitFormHandler = submitFormHandler;
  }

  _submitFormHandlerFunction = (evt) => {
    evt.preventDefault();
    this._submitFormHandler(this._getInputValues());
}

  _getInputValues(){
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[ input.name ] = input.value;
    });
    return  this._formValues
  }


  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitFormHandlerFunction);
  }

  close(){;
    super.close();
    this._form.reset();
  }

}
