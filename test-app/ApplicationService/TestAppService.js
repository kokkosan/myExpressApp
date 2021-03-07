const TestReqModel = require('../domain/TestReqModel');
class TestAppService {
  constructor(val_) {
    this.requestBody = val_;
    this.state = null;
    this.skip = [];
    this.instanceValiables = {};
    this.responseBody = {};
  }
  // 処理のフローを定義する
  async run() {
    console.log('開始!!');
    console.log('requestBody', this.requestBody);

    // Step1 : requestのインスタンス化,インスタンス化の過程でバリデーションも行う
    // ---------------------------------------------------------------------------------------------------------
    const _reqModel = new TestReqModel(this.requestBody);
    this.instanceValiables['UserName'] = _reqModel.UserName; //インスタンス化成功後、getter経由で必要な情報をセットする
    this.instanceValiables['UserAge'] = _reqModel.UserAge; //インスタンス化成功後、getter経由で必要な情報をセットする
    // ---------------------------------------------------------------------------------------------------------
    console.log('requestBody : UserName', _reqModel.UserName);
    console.log('requestBody : UserAge', _reqModel.UserAge);

    console.log('state', this.state);
    console.log('skip', this.skip);
    console.log('終了!!');
  }
}
module.exports = TestAppService;
