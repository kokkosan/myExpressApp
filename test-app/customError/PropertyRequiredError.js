const ValidationError = require('./ValidationError');
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super('No property: ' + property);
    this.name = 'PropertyRequiredError';
    this.property = property;
  }
  static async init(property) {
    const obj = new PropertyRequiredError(property);
    await writelogAsync();
    return obj;
  }
}
const writelogAsync = async () => {
  setTimeout(() => {
    console.log('property');
  }, 1000);
};
module.exports = PropertyRequiredError;
