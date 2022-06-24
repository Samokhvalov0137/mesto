class Popup{
    constructor(popupSelector){
      this._popupSelector = document.querySelector(popupSelector);
    }

    _handleEscClose(evt){
        if (evt.key === "Escape") {
          this.close();
        }
    }

    open(){
        //const handleEsc = this._closePopup;
        document.addEventListener('keydown', (evt)=>{
            this._handleEscClose(evt);
        });
        this._popupSelector.classList.add("popup_opened")
    }

    close(){
        //const handleEsc = this._closePopup;
        document.removeEventListener('keydown', (evt)=>{
            this._handleEscClose(evt);
        });
        this._popupSelector.classList.remove("popup_opened")
    }



    setEventListeners(){
        this._popupSelector.addEventListener('mousedown', (evt) =>{
            if (evt.target === evt.currentTarget) {
                //const popupOpen = document.querySelector(".popup_opened");
                this.close(evt.currentTarget);
            }
        });
    }
}

export { Popup };



// //функция закрытия попапов по нажатию Esc

// function keydownHeandler(evt) {
//     if (evt.key === "Escape") {
//       const popupOpen = document.querySelector(".popup_opened");
//       closePopup(popupOpen);
//     }
//   }

//   // функция открытия попапа
//   const openPopup = (popupName) => {
//     document.addEventListener("keydown", keydownHeandler);
//     popupName.classList.add("popup_opened");
//   };

//   // функция закрытия попапа
//   const closePopup = (popupName) => {
//     document.removeEventListener("keydown", keydownHeandler);
//     popupName.classList.remove("popup_opened");
//   };

//функция закрытия попапа оверлеем
// function closePopupOverlayClick(evt) {
//   if (evt.target === evt.currentTarget) {
//     //const popupOpen = document.querySelector(".popup_opened");
//     closePopup(evt.currentTarget);
//   }
// }