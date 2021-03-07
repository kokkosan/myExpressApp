const UserName = require("./valueObject/UserName");
const UserAge = require("./valueObject/UserAge");
class TestReqModel {
  constructor(obj_) {
    const { name, age } = obj_;
    this._userName = new UserName(name);
    this._userAge = new UserAge(age);
  }
  get UserName() {
    return this._userName.value;
  }
  get UserAge() {
    return this._userAge.value;
  }
}
module.exports = TestReqModel;
