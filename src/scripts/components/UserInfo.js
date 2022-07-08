export class UserInfo {
  constructor(userName, userJob, userAvatar) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
    this._userAvatar = document.querySelector(userAvatar);
  }

  getUserInfo = () => {
    const name = this._userName.textContent;
    const status = this._userJob.textContent;
    const avatarUrl = this._userAvatar.src;
    return { name, status, avatarUrl };
  };

  setUserData(userData) {
    this._userAvatar.src = userData.avatar;
    this._userName.textContent = userData.name;
    this._userJob.textContent = userData.about;
    this._id = userData._id;
  }

  getUserId() {
    return this._id;
  }
}
