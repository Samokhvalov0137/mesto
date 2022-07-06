export class UserInfo {
  constructor(userName, userJob, userAvatar) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
    this._userAvatar = document.querySelector(userAvatar);
  }


getUserInfo = () => {
  const name = this._userName.textContent;
  const status = this._userJob.textContent;
  return {name, status}
}


setUserData(userData){
  this._userAvatar.src = userData.avatar;
  this._userName.textContent = userData.name;
  this._userJob.textContent = userData.about;
  this._id = userData._id;
}

setUserInfo (data) {
  this._userName.textContent = data.userName.value;
  this._userJob.textContent = data.userJob.value;
}

}