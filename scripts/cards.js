class Card {
  constructor(name, link){
    this._name = name;
    this._link = link;
  }

  _getTemplate(){
    const cardElement = document
    .querySelector('#elements__template')
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  generationCard(){
    this._element = this._getTemplate();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').textContent = this._name;


    return this._element;
  }
};

initialCards.forEach((initialData) => {
  const card = new Card (initialData.name, initialData.link);
  const cardElement = card.generationCard();;

  document.querySelector('.elements').prepend(cardElement);
});