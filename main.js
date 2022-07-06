(()=>{"use strict";var e=document.querySelector(".profile__button-edit"),t=document.querySelector(".popup__close"),n=(document.querySelector(".profile__name"),document.querySelector(".profile__status"),document.querySelector('input[name="form_name"]'),document.querySelector('input[name="form_status"]'),document.querySelector(".profile__button-avatar")),r=document.querySelector("#popup-avatar__close"),o=document.querySelector(".profile__avatar"),i=document.querySelector('input[name="form_avatar"]'),u=document.querySelector("#form__avatar"),a=document.querySelector("#popup-add__close"),c=document.querySelector(".profile__button-add"),s=document.querySelector("#input_add_place"),l=document.querySelector("#input_add_link"),f=document.querySelector("#popup-card__close"),p=document.querySelector("#form-edit"),d=document.querySelector("#form__add"),h={};function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_baseGetMethod",value:function(e){return fetch("".concat(this._baseUrl).concat(e),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_basePatchMethod",value:function(e,t){return fetch("".concat(this._baseUrl).concat(e),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._baseGetMethod("/users/me")}},{key:"getCardsArray",value:function(){return this._baseGetMethod("/cards")}},{key:"patchUserInfo",value:function(e){return this._basePatchMethod("/users/me",e)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._cardSelector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generationCard",value:function(){return this._element=this._getTemplate(),this._photoCard=this._element.querySelector(".element__photo"),this._cardLike=this._element.querySelector(".element__vector"),this._cardTrash=this._element.querySelector(".element__trash"),this._element.querySelector(".element__title").textContent=this._name,this._photoCard.src=this._link,this._photoCard.alt=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._photoCard.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._cardLike.addEventListener("click",(function(){e._handleLikeCard()})),this._cardTrash.addEventListener("click",(function(){e._handleDeleteCard()}))}},{key:"_handleLikeCard",value:function(){this._cardLike.classList.toggle("element__vector_active")}},{key:"_handleDeleteCard",value:function(){this._element.remove(),this._element=null}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"_showInputError",(function(e){var t=r._formElement.querySelector("#error-".concat(e.id));e.classList.add(r._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(r._errorClass)})),S(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#error-".concat(e.id));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),S(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e)})),S(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),S(this,"_setEventListeners",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r.toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))}))})),S(this,"enableValidation",(function(){r._setEventListeners()})),S(this,"resetError",(function(){r._inputList.forEach((function(e){r._hideInputError(e)})),r.toggleButtonState()})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=document.querySelector(t),this._closePopup=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){document.addEventListener("keydown",this._closePopup),this._popupSelector.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._closePopup),this._popupSelector.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close(t.currentTarget)}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function I(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popupSelector.querySelector(".popup__image"),t._popupTitle=t._popupSelector.querySelector(".popup__name"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popupImage.src=t,this._popupImage.alt=n,this._popupTitle.textContent=n,j(B(u.prototype),"open",this).call(this)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(O);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function N(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e,t){var n,r,o,a,c=t.submitFormHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(e){e.preventDefault(),n._submitFormHandler(n._getInputValues())},(o="_submitFormHandlerFunction")in(r=V(n=i.call(this,e)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._form=n._popupSelector.querySelector(".form"),n._inputList=n._popupSelector.querySelectorAll(".form__input"),n._submitFormHandler=c,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){U(J(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitFormHandlerFunction)}},{key:"close",value:function(){U(J(u.prototype),"close",this).call(this),this._form.reset()}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(O);function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,n,r){var o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=function(){return{userName:u._userName.textContent,userJob:u._userJob.textContent}},(o="getUserInfo")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._userName=document.querySelector(t),this._userJob=document.querySelector(n),this._userAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"setUserData",value:function(e){this._userAvatar.src=e.avatar,this._userName.textContent=e.name,this._userJob.textContent=e.about,this._id=e._id}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userJob;this._userName.textContent=t.value,this._userJob.textContent=n.value}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(){W.patchUserInfo({name:userName,about:userJob}).then((function(e){ne.setUserData(e)})).catch((function(e){alert(e)})),ee.close(),h[p.name].toggleButtonState()}function G(e){e.preventDefault(),o.src=i.value,re.close(),h[u.name].toggleButtonState()}function K(e,t){$.open({link:e,name:t})}var Q=function(e){e.preventDefault();var t=X({name:s.value,link:l.value});Z.addItem(t),te.close(),h[d.name].toggleButtonState()},W=new m({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"9d5eb0d3-fb55-4a88-9fe1-f4f0f3428bab","Content-Type":"application/json"}});function X(e){return new b(e,"#elements__template",K).generationCard()}var Y,Z=new w({renderer:function(e){var t=X(e);Z.addItem(t)}},".elements");W.getCardsArray().then((function(e){Z.renderItems(e)})).catch((function(e){alert(e)})),Y={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-btn",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__set"},Array.from(document.querySelectorAll(Y.formSelector)).forEach((function(e){var t=new E(Y,e);h[e.name]=t,t.enableValidation()}));var $=new T(".popup_images");$.setEventListeners();var ee=new F("#popup-edit",z);ee.setEventListeners();var te=new F("#popup-add",Q);te.setEventListeners();var ne=new M(".profile__name",".profile__status",".profile__avatar");W.getUserInfo().then((function(e){ne.setUserData(e)})).catch((function(e){alert(e)}));var re=new F(".popop_avatar",G);re.setEventListeners(),f.addEventListener("click",(function(){return $.close()})),c.addEventListener("click",(function(){h[d.name].resetError(),te.open()})),a.addEventListener("click",(function(){return te.close()})),e.addEventListener("click",(function(){h[p.name].resetError(),ee.open()})),t.addEventListener("click",(function(){return ee.close()})),n.addEventListener("click",(function(){h[u.name].resetError(),re.open()})),r.addEventListener("click",(function(){return re.close()})),p.addEventListener("submit",z),d.addEventListener("submit",Q),u.addEventListener("submit",G)})();