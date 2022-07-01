(()=>{"use strict";var e=document.querySelector(".profile__button-edit"),t=document.querySelector(".popup__close"),n=document.querySelector(".profile__name"),r=document.querySelector(".profile__status"),o=document.querySelector('input[name="form_name"]'),i=document.querySelector('input[name="form_status"]'),u=document.querySelector(".profile__button-avatar"),a=document.querySelector("#popup-avatar__close"),c=document.querySelector(".profile__avatar"),l=(document.querySelector("#input_avatar_link"),document.querySelector('input[name="form_avatar"]')),s=document.querySelector("#form__avatar"),f=document.querySelector("#popup-add__close"),p=document.querySelector(".profile__button-add"),d=document.querySelector("#input_add_place"),m=document.querySelector("#input_add_link"),_=document.querySelector("#popup-card__close"),y=document.querySelector("#form-edit"),h=document.querySelector("#form__add"),v={};function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._cardSelector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generationCard",value:function(){return this._element=this._getTemplate(),this._photoCard=this._element.querySelector(".element__photo"),this._cardLike=this._element.querySelector(".element__vector"),this._cardTrash=this._element.querySelector(".element__trash"),this._element.querySelector(".element__title").textContent=this._name,this._photoCard.src=this._link,this._photoCard.alt=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._photoCard.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._cardLike.addEventListener("click",(function(){e._handleLikeCard()})),this._cardTrash.addEventListener("click",(function(){e._handleDeleteCard()}))}},{key:"_handleLikeCard",value:function(){this._cardLike.classList.toggle("element__vector_active")}},{key:"_handleDeleteCard",value:function(){this._element.remove(),this._element=null}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"_showInputError",(function(e){var t=r._formElement.querySelector("#error-".concat(e.id));e.classList.add(r._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(r._errorClass)})),g(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#error-".concat(e.id));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),g(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e)})),g(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),g(this,"_setEventListeners",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r.toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))}))})),g(this,"enableValidation",(function(){r._setEventListeners()})),g(this,"resetError",(function(){r._inputList.forEach((function(e){r._hideInputError(e)})),r.toggleButtonState()})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupSelector.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popupSelector.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close(t.currentTarget)}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function x(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popupSelector.querySelector(".popup__image"),t._popupTitle=t._popupSelector.querySelector(".popup__name"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popupImage.src=t,this._popupImage.alt=n,this._popupTitle.textContent=n,P(T(u.prototype),"open",this).call(this)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function H(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return J(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function u(e,t){var n,r,o,a,c=t.submitFormHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(e){e.preventDefault(),n._submitFormHandler(n._getInputValues())},(o="_submitFormHandlerFunction")in(r=J(n=i.call(this,e)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._form=n._popupSelector.querySelector(".form"),n._inputList=n._popupSelector.querySelectorAll(".form__input"),n._submitFormHandler=c,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){F(U(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitFormHandlerFunction)}},{key:"close",value:function(){F(U(u.prototype),"close",this).call(this),this._form.reset()}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(C);function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){return{userName:i._userName.textContent,userJob:i._userJob.textContent}},(r="getUserInfo")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._userName=document.querySelector(t),this._userJob=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._userName.textContent=e.userName,this._userJob.textContent=e.userJob}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function K(e){e.preventDefault(),c.src=l.value,re.close(),v[s.name].toggleButtonState()}function Q(e,t){$.open({link:e,name:t})}var W=function(e){e.preventDefault();var t=X({name:d.value,link:m.value});Z.addItem(t),te.close(),v[h.name].toggleButtonState()};function X(e){return new S(e,"#elements__template",Q).generationCard()}var Y,Z=new O({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=X(e);Z.addItem(t)}},".elements");Z.renderItems(),Y={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-btn",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__set"},Array.from(document.querySelectorAll(Y.formSelector)).forEach((function(e){var t=new k(Y,e);v[e.name]=t,t.enableValidation()}));var $=new R(".popup_images");$.setEventListeners();var ee=new z("#popup-edit",{handleProfileFormSubmit:function(e){ne.setUserInfo(e),ee.close()}});ee.setEventListeners();var te=new z("#popup-add",W);te.setEventListeners();var ne=new G(".profile__name",".profile__status"),re=new z(".popop_avatar",K);re.setEventListeners(),_.addEventListener("click",(function(){return $.close()})),p.addEventListener("click",(function(){v[h.name].resetError(),te.open()})),f.addEventListener("click",(function(){return te.close()})),e.addEventListener("click",(function(){v[y.name].resetError(),ee.open()})),t.addEventListener("click",(function(){return ee.close()})),u.addEventListener("click",(function(){v[s.name].resetError(),re.open()})),a.addEventListener("click",(function(){return re.close()})),y.addEventListener("submit",(function(e){e.preventDefault(),r.textContent=i.value,n.textContent=o.value,ee.close(),v[y.name].toggleButtonState()})),h.addEventListener("submit",W),s.addEventListener("submit",K)})();