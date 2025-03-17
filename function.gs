function get_Amount() {
  var url = "https://v6.exchangerate-api.com/v6/d1161cb8b3b9ceea9b570399/pair/USD/SGD/20";

  var response = JSON.parse(UrlFetchApp.fetch(url));
  amount = (response.conversion_result / 6).toFixed(2);

  var string = `Pay charmaine ${amount}`

  return string;
}
