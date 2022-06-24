export class UserInfo {
    constructor(userName, userJob) {
      this._userName = document.querySelector(userName);
      this._userJob = document.querySelector(userJob);
    }
  

  getUserInfo = () => {
    const userName = this._userName.textContent;
    const userJob = this._userJob.textContent;
    return {userName, userJob}
  }
  

  setUserInfo (data) {
    this._userName.textContent = data.userName;
    this._userJob.textContent = data.userJob;
  }
  
  }