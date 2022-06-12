class FormValidator {
  constructor(object, formElement) {
    this._formSelector = object.formSelector;
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputErrorClass = object.inputErrorClass;
    this._errorClass = object.errorClass;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
  }

  // показать сообщение об ошибке
  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `#error-${inputElement.id}`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
    
  }

    
// спрятать сообщение об ошибке
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `#error-${inputElement.id}`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

// проверка нужно ли выводить сообщение об ошибке. Если поле ввода не валидно, то вызови функцию вывода сообщения об ошибки
// если поле ввода валидно, то скрой сообщение об ошибке
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }


  _hasInvalidInput = () => {
    //this._checkInputValidity(inputElement);
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // функция переключения состояния кнопки
  // toggleButtonState = () => {
  //   if (this._hasInvalidInput()) {
  //     this._buttonElement.disabled = true; 
  //     this._buttonElement.classList.add(this._inactiveButtonClass); 
  //   } else { 
  //     this._buttonElement.disabled = false;
  //     this._buttonElement.classList.remove(this._inactiveButtonClass);
  //   }
  // };

  

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute("disabled");
  }

  _disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", true);
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }


  _setEventListeners = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  };


  enableValidation = () => {
    this._setEventListeners();
  };

  resetError = () => {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this.toggleButtonState();
  };

};

export {FormValidator};