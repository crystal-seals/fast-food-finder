var longtitude, latitude;
var currentRestaurant = {};

var xhr = new XMLHttpRequest();

function updateRestaurant() {
  var result = JSON.parse(xhr.response)
  var input = result.restaurants[count].restaurant;
  currentRestaurant.name = input.name
  currentRestaurant.id = input.id;
  currentRestaurant.thumb = input.thumb
  currentRestaurant.cuisines = input.cuisines
  currentRestaurant.rating = input.user_rating.aggregate_rating;
  currentRestaurant.address = input.location.address;
  updateElements();
  count++;
}

  var count = 0;
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      updateRestaurant();
    }
  }
  xhr.open('GET', 'https://developers.zomato.com/api/v2.1/search?count=20&lat=51.5290734&lon=-0.0442646&radius=1000&cuisines=40&sort=real_distance&apikey=3c2968b8e9cb6e81212628d734ccb726', true)
  xhr.send();

document.getElementById("button").addEventListener("click", function() {
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      updateRestaurant();
      if (count === 19) {
        count = 0;
      }
    }
  }
  xhr.open('GET', 'https://developers.zomato.com/api/v2.1/search?count=20&lat=51.5290734&lon=-0.0442646&radius=1000&cuisines=40&sort=real_distance&apikey=3c2968b8e9cb6e81212628d734ccb726', true)
  xhr.send();
});

function updateElements() {
  document.getElementById("image0").style.backgroundImage = "url(" + currentRestaurant.thumb + ")"
  document.getElementById("title0").innerHTML = currentRestaurant.name;
  document.getElementById("description0").innerHTML = currentRestaurant.rating + '/5';
  document.getElementById("link0").href = "https://www.google.co.uk/maps/place/@" + latitude + "," + longtitude + ",17z/data=!3m1!4b1!4m5!3m4!1s0x48761d299b2ed2ab:0x900eafdd9e9e2445!8m2!3d51.5210882!4d-0.0448327"
}
function getGeolocation(callback){
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        callback(crd.latitude, crd.longitude);
    };

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
        alert('Geolocation Error!');
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
}

function geolocationHandler(lat, long){
    latitude = lat;
    longitude = long;
    console.log(lat,long)

    updateRestaurant();
    updateElements();
}

getGeolocation(geolocationHandler);
