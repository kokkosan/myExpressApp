var express = require("express");
var router = express.Router();
const TestAppService = require("../ApplicationService/TestAppService");
/* GET users listing. */
router.get("/", async function (req, res, next) {
  const Sleep = async (timeMS) => {
    return new Promise((res, err) => {
      setTimeout(() => {
        res();
      }, timeMS);
    });
  };
  console.log(new Date());
  console.log("start", req.query);
  await Sleep(1000);
  console.log("end");
  res.send("Test");
});

/* POST test listing. */
router.post("/", async function (req, res, next) {
  try {
    const app = new TestAppService(req.body);
    await app.run();
    res.json(app.responseBody);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
