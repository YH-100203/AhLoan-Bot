const token = "7558375392:AAESQersc8MxMxIbupZ06IKUHRoM6gzt4Mw";

const sendMsgEndpoint = "https://api.telegram.org/bot" + token + "/sendMessage";
const sendPhotoEndpoint = "https://api.telegram.org/bot" + token + "/sendPhoto";
const updatesEndpoint = "https://api.telegram.org/bot" + token + "/getUpdates";

const chat_id = "-4674983386";

function test() {
  Logger.log(sendMsgEndpoint);

}
