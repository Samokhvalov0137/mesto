import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {

    constructor(popupSelector) {
      super(popupSelector);
      this._popupImage = this._popupSelector.querySelector('.popup__image');
      this._popupTitle = this._popupSelector.querySelector('.popup__name');
    }
  
    open({link, name}) {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupTitle.textContent = name;
        super.open();
    }
  }