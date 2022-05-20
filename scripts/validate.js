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
  
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  
  // функция переключения состояния кнопки
  const toggleButtonState = (inputList, buttonElement) =>{
    if (hasInvalidInput(inputList)){
      buttonElement.classList.add(validationConfig.inactiveButtonClass);
    }else{
      buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    };
  };
  
  
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
  
  