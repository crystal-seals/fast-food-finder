var longtitude = 0.0442646;
var latitude = 51.5290734
var newObj = {};

document.getElementById('drop-down').addEventListener('click', function() {
  var xhr = new XMLHttpRequest();


  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.response)
      var input = result.restaurants[0].restaurant;
      newObj.name = input.name
      newObj.id = input.id;
      newObj.thumb = input.thumb
      newObj.cuisines = input.cuisines
      newObj.rating = input.user_rating.aggregate_rating;
      newObj.address = input.location.address;
    }
  }
  xhr.open('GET', 'https://developers.zomato.com/api/v2.1/search?count=1&lat=51.5290734&lon=-0.0442646&radius=1000&cuisines=40&sort=real_distance&apikey=3c2968b8e9cb6e81212628d734ccb726', true)
  xhr.send()
});
