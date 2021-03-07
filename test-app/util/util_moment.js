const moment = require('moment');
const format1 = 'YYYY-MM-DD HH:mm:ss';
const format2 = 'YYYYMMDDHHmmss';
const getNowYYYYMMDDHHMMSS = async () => {
  return moment(new Date()).format(format1);
};
const getNowTimestampString = async () => {
  return moment(new Date()).format(format2);
};
module.exports = {
  getNowYYYYMMDDHHMMSS,
  getNowTimestampString,
};
