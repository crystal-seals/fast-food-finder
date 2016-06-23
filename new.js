document.getElementById("image").style.backgroundImage = "url(" + currentRestaurant.thumb + ")"
  document.getElementById("cuisine").innerHTML = currentRestaurant.cuisines;
  document.getElementById("title").innerHTML = currentRestaurant.name;
  document.getElementById("rating").innerHTML = currentRestaurant.rating + '/5';