// переменные 

const openPopupEdit = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('input[name="form_name"]');
const jobInput = document.querySelector('input[name="form_status"]');
// переменные попапа добавления карточки 
const popupCard = document.querySelector('#popup-add');
const closePopupAddCard = document.querySelector('#popup-add__close');
const openPopupAddCard = document.querySelector('.profile__button-add');


// ПОПАП РЕДАКТИРОВАНИЯ ИМЕНИ
// функция открытия попапа редактирования имени
function openPopup(){
    popupEdit.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatus.textContent;
}

// функция закрытия попапа редактирования имени

function closePopup(){
    popupEdit.classList.remove('popup_opened')
}

openPopupEdit.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);


// функция отправки и кнопки "сохранить" в попапе редактирования имени

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileStatus.textContent = jobInput.value;
    profileName.textContent = nameInput.value;
closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);



// ПОПАП ДОБАВЛЕНИЯ КАРТОЧЕК

// функция открытия попапа добавления карточек
function openPopupCard(){
    popupCard.classList.add('popup_opened');
}

// функция закрытия попапа добавления карточек

function closePopupCard(){
    popupCard.classList.remove('popup_opened');
}

openPopupAddCard.addEventListener('click', openPopupCard);
closePopupAddCard.addEventListener('click', closePopupCard);



// массив карточек с фото и названиями

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


  // шаблоны
  const initialCardTemplate = document
  .querySelector("#elements__template")
  .content.querySelector('.element');
  
  // ДОМ элементы
  const initialContainer = document.querySelector('.elements');
  const popupFormAdd = document.querySelector('#form__add');
  const placeInput = document.querySelector('#input_add_place'); 
  const linkInput = document.querySelector('#input_add_link');
  const photoPopupCard = document.querySelector('.popup__image');
  const namePopupCard = document.querySelector('.popup__name');
  
  // обработчики событий
  
  const handleSubmitAddInitialForm = (event) => {
    event.preventDefault();
    
    renderInitialCard({
        name: placeInput.value,
        link: linkInput.value
     });

    placeInput.value = '';
    linkInput.value = '';  
    
   closePopupCard();
  };


  const handleLikeCard = (event) => {
    event.target.closest('.element__vector').classList.toggle('element__vector_active');
  };
  
  const handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
  };

  
  //генерация карточки

  const generateInitialCard = (initialData) => {
    const newInitialCard = initialCardTemplate.cloneNode(true);
  
    const elementTitle = newInitialCard.querySelector('.element__title');
    elementTitle.textContent = initialData.name;

    const elementPhoto = newInitialCard.querySelector('.element__photo');
    elementPhoto.src = initialData.link;

    elementPhoto.addEventListener('click', function(){
        photoPopupCard.src = initialData.link;
        namePopupCard.textContent = initialData.name;
        photoPopupCard.alt = initialData.name;

        openPopupPhoto()

    });

  // like card
    const likeButton = newInitialCard.querySelector('.element__vector');
    likeButton.addEventListener('click', handleLikeCard);

  // delete card
    const deleteButton = newInitialCard.querySelector('.element__trash');
    deleteButton.addEventListener('click', handleDeleteCard);
  
    return newInitialCard;
  };
  
  //Рендер карточки
  const renderInitialCard = (initialData) => {
    initialContainer.prepend(generateInitialCard(initialData));
  };
  
  initialCards.forEach((initialData) => {
    renderInitialCard(initialData);
  });
  
  popupFormAdd.addEventListener("submit", handleSubmitAddInitialForm);
  


// вспллывающее окно с картинкой из карточки 


// ПОПАП ПРОСМОТРА КАРТИНКИ

const popupCardPhoto = document.querySelector('.popup_images');
const closePopupCardPhotoButton = document.querySelector('#popup-card__close');

// функция открытия попапа с фото

function openPopupPhoto(){
    popupCardPhoto.classList.add('popup_opened');
};

// функция закрытия попапа с фото

function closePopupPhoto(){
    popupCardPhoto.classList.remove('popup_opened');
};

closePopupCardPhotoButton.addEventListener('click', closePopupPhoto);
