const statusCode = require("../helper/statusCode");
const handelEmptyData = (res) => res.status(statusCode.BadRequest).end();
const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
module.exports = {
  handelEmptyData,
  isEmptyObject,
};
