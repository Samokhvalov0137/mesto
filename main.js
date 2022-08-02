(()=>{"use strict";var e=document.querySelector(".profile__button-edit"),t=(document.querySelector(".popup__close"),document.querySelector('input[name="form_name"]'),document.querySelector('input[name="form_status"]'),document.querySelector("#popup-avatar__close"),document.querySelector("#popup-delete__close"),document.querySelector("#popup-add__close"),document.querySelector("#input_add_place"),document.querySelector("#input_add_link"),document.querySelector("#popup-card__close"),document.querySelector('input[name="form_avatar"]'),document.querySelector(".profile__button-avatar")),n=document.querySelector(".profile__button-add"),r=document.querySelector(".profile__name"),o=document.querySelector(".profile__status"),i=document.querySelector(".profile__avatar"),u=".popup_avatar",a=document.querySelector(u).querySelector("form"),c="#popup-edit",s=document.querySelector(c).querySelector("form"),l="#popup-add",f=document.querySelector(l).querySelector("form"),p={};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getMethod",value:function(e){return fetch("".concat(this._baseUrl).concat(e),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"_PatchPostMethod",value:function(e,t,n){return fetch("".concat(this._baseUrl).concat(e),{method:t,headers:this._headers,body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._getMethod("/users/me")}},{key:"getCardsArray",value:function(){return this._getMethod("/cards")}},{key:"patchUserAvatar",value:function(e){return this._PatchPostMethod("/users/me/avatar","PATCH",e)}},{key:"patchUserInfo",value:function(e){return this._PatchPostMethod("/users/me","PATCH",e)}},{key:"postCardData",value:function(e){return this._PatchPostMethod("/cards","POST",e)}},{key:"deleteCard",value:function(e){return this._PatchPostMethod("/cards/".concat(e),"DELETE",{})}},{key:"setLike",value:function(e){return this._PatchPostMethod("/cards/".concat(e,"/likes"),"PUT",{})}},{key:"deleteLike",value:function(e){return this._PatchPostMethod("/cards/".concat(e,"/likes"),"DELETE",{})}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._id=t._id,this._likesArray=t.likes,this._likesCounter=t.likes.length,this._curentUserId=o,this._like=!1,this._cardSelector=n,this._handleCardClick=r,this._isCurentUserCard=this._curentUserId===t.owner._id,this._handleDeleteCardButton=i,this._handleLikeButton=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generationCard",value:function(){return this._element=this._getTemplate(),this._photoCard=this._element.querySelector(".element__photo"),this._cardLike=this._element.querySelector(".element__vector"),this._cardTrash=this._element.querySelector(".element__trash"),this._cardTitle=this._element.querySelector(".element__title"),this._cardLikesCounter=this._element.querySelector(".element__vector-counter"),this.updateLikeState(this._likesArray),this._isCurentUserCard||this._cardTrash.remove(),this._element.id=this._id,this._photoCard.src=this._link,this._photoCard.alt=this._name,this._cardTitle.textContent=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._photoCard.addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._cardLike.addEventListener("click",(function(){e._handleLikeButton(e)})),this._isCurentUserCard&&this._cardTrash.addEventListener("click",(function(){e._handleDeleteCardButton(e)}))}},{key:"updateLikeState",value:function(e){var t=this;this._likesArray=e,this._likesCounter=e.length,this._cardLikesCounter.textContent=this._likesCounter,this._likesArray.some((function(e){return e._id===t._curentUserId}))!==this._like&&this._toggleLikeCard()}},{key:"deleteElementCard",value:function(){this._element.remove(),this._element=null}},{key:"_toggleLikeCard",value:function(){this._cardLike.classList.toggle("element__vector_active"),this._like=!this._like}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"_showInputError",(function(e){var t=r._formElement.querySelector("#error-".concat(e.id));e.classList.add(r._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(r._errorClass)})),v(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#error-".concat(e.id));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),v(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e)})),v(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),v(this,"enableValidation",(function(){r._setEventListeners()})),v(this,"resetError",(function(){r._inputList.forEach((function(e){r._hideInputError(e)})),r.toggleButtonState()})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"reverseRenderItems",value:function(e){for(var t=e.length-1;t>=0;--t)this._renderer(e[t])}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".popup__close"),this._closePopup=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){document.addEventListener("keydown",this._closePopup),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._closePopup),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close(t.currentTarget)})),this._buttonClose.addEventListener("click",this.close.bind(this))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function j(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".form"),n._submitButton=n._form.querySelector(".popup__submit-btn"),n._handleSubmit=t,n}return t=u,(n=[{key:"setButtonText",value:function(e){this._submitButton.textContent=e}},{key:"setEventListeners",value:function(){var e=this;O(q(u.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(){e._handleSubmit()}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function A(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupTitle=t._popup.querySelector(".popup__name"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popupImage.src=t,this._popupImage.alt=n,this._popupTitle.textContent=n,R(D(u.prototype),"open",this).call(this)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=J(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},H(e,t)}function z(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".form"),n._submitButton=n._form.querySelector(".popup__submit-btn"),n._inputList=Array.from(n._form.querySelectorAll(".form__input")),n._submitFormHandler=t,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsValue={},this._inputList.forEach((function(t){e._inputsValue[t.name]=t.value})),this._inputsValue}},{key:"setInputValues",value:function(e,t){this._inputList.forEach((function(n){n.name===e&&(n.value=t)}))}},{key:"setButtonText",value:function(e){this._submitButton.textContent=e}},{key:"setEventListeners",value:function(){var e=this;F(G(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormHandler(e._getInputValues())}))}},{key:"close",value:function(){F(G(u.prototype),"close",this).call(this),this._form.reset()}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var W=function(){function e(t){var n=t.userName,r=t.userJob,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userJob=r,this._userAvatar=o}var t,n;return t=e,(n=[{key:"setUserData",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._userName.textContent=t,this._userJob.textContent=n,this._userAvatar.src=r,this._id=o}},{key:"getUserId",value:function(){return this._id}},{key:"getUserInfo",value:function(){return{name:this._userName.textContent,status:this._userJob.textContent}}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function X(e,t){re.open({link:e,name:t})}function Y(e){return new y(e,"#elements__template",X,ue.getUserId(),Z,$).generationCard()}function Z(e){ce.cardForDelete=e,ce.open()}function $(e){e._like?te.deleteLike(e._id).then((function(t){e.updateLikeState(t.likes)})).catch((function(e){alert(e)})):te.setLike(e._id).then((function(t){e.updateLikeState(t.likes)})).catch((function(e){alert(e)}))}var ee,te=new _({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"9d5eb0d3-fb55-4a88-9fe1-f4f0f3428bab","Content-Type":"application/json"}}),ne=new g({renderer:function(e){var t=Y(e);ne.addItem(t)}},".elements");ee={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__set"},Array.from(document.querySelectorAll(ee.formSelector)).forEach((function(e){var t=new b(ee,e);p[e.name]=t,t.enableValidation()}));var re=new V(".popup_images");re.setEventListeners();var oe=new K(c,(function(e){var t=e.form_name,n=e.form_status;oe.setButtonText("Сохранение..."),te.patchUserInfo({name:t,about:n}).then((function(e){ue.setUserData(e),oe.close()})).catch((function(e){alert(e)})).finally((function(){oe.setButtonText("Сохранить")})),p[s.name].toggleButtonState()}));oe.setEventListeners();var ie=new K(l,(function(e){var t=e.form_place,n=e.form_link;ie.setButtonText("Сохранение..."),te.postCardData({name:t,link:n}).then((function(e){var t=Y(e);ne.addItem(t),ie.close()})).catch((function(e){alert(e)})).finally((function(){ie.setButtonText("Создать")}))}));ie.setEventListeners();var ue=new W({userName:r,userJob:o,userAvatar:i}),ae=new K(u,(function(e){var t=e.form_avatar;ae.setButtonText("Сохранение..."),te.patchUserAvatar({avatar:t}).then((function(e){ue.setUserData(e),ae.close()})).catch((function(e){alert(e)})).finally((function(){ae.setButtonText("Сохранить")})),p[a.name].toggleButtonState()}));ae.setEventListeners();var ce=new B(".popup_delete",(function(){ce.setButtonText("Удаление..."),te.deleteCard(ce.cardForDelete._id).then((function(){ce.cardForDelete.deleteElementCard(),ce.close(),ce.cardForDelete={}})).catch((function(e){alert(e)})).finally((function(){ce.setButtonText("Да")}))}));ce.setEventListeners(),n.addEventListener("click",(function(){p[f.name].resetError(),ie.open()})),e.addEventListener("click",(function(){var e=ue.getUserInfo();oe.setInputValues("form_name",e.name),oe.setInputValues("form_status",e.status),p[s.name].resetError(),oe.open()})),t.addEventListener("click",(function(){p[a.name].resetError(),ae.open()})),Promise.all([te.getUserInfo(),te.getCardsArray()]).then((function(e){ue.setUserData(e[0]),ne.reverseRenderItems(e[1])})).catch((function(e){alert(e)}))})();