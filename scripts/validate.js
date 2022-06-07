//функция показа ошибки
    const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
  };
  
  // функция скрытия ошибки
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = '';
  };
  
  
  // функция проверки валидности
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };


  // 
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  
    toggleButtonState(inputList, buttonElement, validationConfig.inactiveButtonClass);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        
        toggleButtonState(inputList, buttonElement, validationConfig.inactiveButtonClass);
      });
    });
  };
  


// функция переключения состояния кнопки

  function enableSubmitButton(buttonElement) {
    buttonElement.classList.remove('form__button_inactive');
    buttonElement.removeAttribute("disabled");
  }
  
  function disableSubmitButton(buttonElement) {
    buttonElement.classList.add('form__button_inactive');
    buttonElement.setAttribute("disabled", true);
  }
  
  function toggleButtonState(inputList, buttonElement, validationConfig) {
    if (hasInvalidInput(inputList)) {
      disableSubmitButton(buttonElement, validationConfig);
    } else {
      enableSubmitButton(buttonElement, validationConfig);
    }
  }

  // 
  const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      
      const fieldsetList = Array.from(formElement.querySelectorAll(validationConfig.errorClass));
     
      fieldsetList.forEach((formElement) =>{
       setEventListeners(formElement);  
      });
  
    });
  };


  //
  const hasInvalidInput = (inputList) =>{
    return inputList.some((inputElement) => {
    
      return !inputElement.validity.valid;
    })
  }; 
  
  enableValidation(validationConfig);