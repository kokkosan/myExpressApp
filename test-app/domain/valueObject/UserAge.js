const PropertyRequiredError = require('../../customError/PropertyRequiredError');
const PropertyTypeError = require('../../customError/PropertyTypeError');
class UserAge {
  constructor(val_) {
    if (!val_) throw new PropertyRequiredError('必須やで');
    if (val_.constructor.name !== 'Number')
      throw new PropertyTypeError('数値じゃないとダメやで');
    this._value = val_;
  }
  get value() {
    return this._value;
  }
}
module.exports = UserAge;
