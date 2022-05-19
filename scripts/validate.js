//функция показа ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
  };
  
  // функция скрытия ошибки
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove('form__input_type_error');
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
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.form__submit-btn');
  
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
      buttonElement.classList.add('form__button_inactive');
    }else{
      buttonElement.classList.remove('form__button_inactive');
    };
  };
  
  
  // 
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      
      const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
     
      fieldsetList.forEach((fieldSet) =>{
       setEventListeners(fieldSet);  
      });
  
    });
  };
  
  
  //
  const hasInvalidInput = (inputList) =>{
    return inputList.some((inputElement) => {
    
      return !inputElement.validity.valid;
    })
  }; 
  
  enableValidation();
  
  