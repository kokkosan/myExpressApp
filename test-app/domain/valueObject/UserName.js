const PropertyRequiredError = require('../../customError/PropertyRequiredError');
const PropertyTypeError = require('../../customError/PropertyTypeError');
class UserName {
  constructor(val_) {
    if (!val_) throw new PropertyRequiredError('必須やで');
    if (val_.constructor.name !== 'String')
      throw new PropertyTypeError('文字列じゃないとダメやで');
    this._value = val_;
  }
  get value() {
    return this._value;
  }
}
module.exports = UserName;
