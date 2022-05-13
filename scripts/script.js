// переменные

const buttonOpenPopupEdit = document.querySelector(".profile__button-edit");
const popupEdit = document.querySelector(".popup");
const closePopupEditButton = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const formProfileEdit = document.querySelector(".form");
const nameInput = document.querySelector('input[name="form_name"]');
const jobInput = document.querySelector('input[name="form_status"]');
// переменные попапа добавления карточки
const popupCard = document.querySelector("#popup-add");
const closePopupAddCard = document.querySelector("#popup-add__close");
const openPopupAddCard = document.querySelector(".profile__button-add");

// шаблоны
const initialCardTemplate = document
  .querySelector("#elements__template")
  .content.querySelector(".element");

// ДОМ элементы
const initialContainer = document.querySelector(".elements");
const popupFormAdd = document.querySelector("#form__add");
const placeInput = document.querySelector("#input_add_place");
const linkInput = document.querySelector("#input_add_link");
const photoPopupCard = document.querySelector(".popup__image");
const namePopupCard = document.querySelector(".popup__name");

// ПОПАП ПРОСМОТРА КАРТИНКИ
const popupCardPhoto = document.querySelector(".popup_images");
const closePopupCardPhotoButton = document.querySelector("#popup-card__close");

// ПОПАП РЕДАКТИРОВАНИЯ ИМЕНИ
// функция открытия попапа редактирования имени
const openPopup = (popupName) => {
  popupName.classList.add("popup_opened");
};

function handleOpenPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
  openPopup(popupEdit);
}

buttonOpenPopupEdit.addEventListener("click", handleOpenPopupEdit);
buttonOpenPopupEdit.addEventListener("click", () => openPopup(popupEdit));

// функция закрытия попапа редактирования имени
const closePopup = (popupName) => {
  popupName.classList.remove("popup_opened");
};

closePopupEditButton.addEventListener("click", () => closePopup(popupEdit));

// функция отправки и кнопки "сохранить" в попапе редактирования имени
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileStatus.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup(popupEdit);
}

formProfileEdit.addEventListener("submit", handleProfileFormSubmit);

// ПОПАП ДОБАВЛЕНИЯ КАРТОЧЕК
// функция открытия попапа добавления карточек
openPopupAddCard.addEventListener("click", () => openPopup(popupCard));

// функция закрытия попапа добавления карточек
closePopupAddCard.addEventListener("click", () => closePopup(popupCard));

// функция закрытия попапа с фото
closePopupCardPhotoButton.addEventListener("click", () =>
  closePopup(popupCardPhoto)
);


// массив карточек с фото и названиями
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// обработчики событий

const handleSubmitAddInitialForm = (event) => {
  event.preventDefault();

  renderInitialCard({
    name: placeInput.value,
    link: linkInput.value,
  });

  placeInput.value = "";
  linkInput.value = "";

  closePopup(popupCard);
};

const handleLikeCard = (event) => {
  event.target.classList.toggle("element__vector_active");
};

const handleDeleteCard = (event) => {
  event.target.closest(".element").remove();
};

//генерация карточки

const generateInitialCard = (initialData) => {
  const newInitialCard = initialCardTemplate.cloneNode(true);

  const elementTitle = newInitialCard.querySelector(".element__title");
  elementTitle.textContent = initialData.name;

  const elementPhoto = newInitialCard.querySelector(".element__photo");
  elementPhoto.src = initialData.link;
  elementPhoto.alt = initialData.name;

  elementPhoto.addEventListener("click", function () {
    photoPopupCard.src = initialData.link;
    namePopupCard.textContent = initialData.name;
    photoPopupCard.alt = initialData.name;

    openPopup(popupCardPhoto);
  });

  // like card
  const likeButton = newInitialCard.querySelector(".element__vector");
  likeButton.addEventListener("click", handleLikeCard);

  // delete card
  const deleteButton = newInitialCard.querySelector(".element__trash");
  deleteButton.addEventListener("click", handleDeleteCard);

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

