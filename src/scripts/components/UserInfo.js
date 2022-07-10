export class UserInfo {
  constructor({userName, userJob, userAvatar}) {
    this._userName = userName;
    this._userJob = userJob;
    this._userAvatar = userAvatar;
  }


  setUserData({ name, about, avatar, _id }) {
    this._userName.textContent = name;
    this._userJob.textContent = about;
    this._userAvatar.src = avatar;
    this._id = _id;
  }

  getUserId() {
    return this._id;
  }
  
  getUserInfo() {
    const name = this._userName.textContent;
    const status = this._userJob.textContent;
    return { name: name, status: status };
  };


}
