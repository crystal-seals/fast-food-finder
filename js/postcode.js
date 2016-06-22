// var location = {};

function getPostcode (code) {
  var baseUrl = "https://api.postcodes.io";
  var path = "/postcodes/" + code + ""

  var xhr = new XMLHttpRequest ()

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.response)
        location.longitude = response.result.longitude
        location.latitude = response.result.latitude
      }
  }

  xhr.open('GET', baseUrl + path)
  xhr.send()
}
