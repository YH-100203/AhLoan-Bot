function sendPaymentMessage() {
  var text = get_Amount();

  var payload = {
    "chat_id" : chat_id,
    "text" : text
  };

  var options = {
    "method": "post",
    "payload": payload
  };

  var response = UrlFetchApp.fetch(sendMsgEndpoint,options=options);
  Logger.log(response);
}
