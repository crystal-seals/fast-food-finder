// var location = {};

function getPostcode (code) {
  var baseUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&mode=walking&"
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
