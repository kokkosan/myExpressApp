const utilmoment = require('../../util/util_moment.js');
const PropertyRequiredError = require('../../customError/PropertyRequiredError');
const stepFirst = async (req, res, next) => {
  const { name, age } = req.body;
  // 必須入力チェック
  if (!age) return next(new PropertyRequiredError('age'));
  if (!name) return next(new PropertyRequiredError('name'));
  // 型チェック
  if (isNaN(age)) return next(new PropertyRequiredError('age'));
  // console.log('Before', res.locals.variable);
  res.locals.variable = { ...req.body };
  // console.log('After', res.locals.variable);
  next();
};
const stepOne = async (req, res, next) => {
  console.log('stepOne >>>>> start variable: ', res.locals.variable);
  console.log(
    'stepOne >>>>> start : ',
    await utilmoment.getNowYYYYMMDDHHMMSS()
  );
  console.log('stepOne >>>>> end : ', await utilmoment.getNowYYYYMMDDHHMMSS());
  next();
};
const stepTwo = async (req, res, next) => {
  console.log(
    'stepTwo >>>>> start : ',
    await utilmoment.getNowYYYYMMDDHHMMSS()
  );
  console.log('stepTwo >>>>> end : ', await utilmoment.getNowYYYYMMDDHHMMSS());
  next();
};
const stepLast = async (req, res) => {
  console.log('Response返すお', await utilmoment.getNowYYYYMMDDHHMMSS());
  res.json({ title: 'Express!!!' });
};
const middlewares = [stepFirst, stepOne, stepTwo, stepLast];
module.exports = middlewares;
