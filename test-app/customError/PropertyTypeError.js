const ValidationError = require('./ValidationError');
class PropertyTypeError extends ValidationError {
  constructor(property) {
    super('Type Error property: ' + property);
    this.name = 'PropertyPropertyTypeError';
    this.property = property;
  }
}
module.exports = PropertyTypeError;
