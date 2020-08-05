


var today = new Date();
var currentDay = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
console.log(currentDay);

var container = document.getElementById('container');



function appendPicture(apod) {
  // if(typeof apod.hdurl !== 'undefined') {
    if (apod.media_type !== "video") {
  var photo = apod.hdurl;
  var img = document.createElement('img');
  img.src = photo;
  container.appendChild(img);
  img.classList.add('backgroundPhoto');
  } else if (apod.media_type === "video") {
    console.log("append2");
    appendPicture2();
  }
  // console.log("mars stuff", marsPhoto.photos);
}

function appendPicture2(marsPhoto) {
if(typeof(marsPhoto) ==="undefined"){
  return null
} else{

    var photo2 = marsPhoto.photos;
    var img2 = document.createElement("img");
    container.appendChild(img2);
    img2.src = photo2[1].img_src;
    img2.classList.add('backgroundPhoto');
  console.log("mars stuff", photo2[0].img_src);
}
}



// function appendPicture2(marsPhoto) {
//   if (typeof marsPhoto !== 'undefined') {
//     // console.log("mars stuff", marsPhoto);
//     var photo2 = marsPhoto.photos;
//     var img2 = document.createElement('img2');
//     img2.src = photo2;
//     container.appendChild(img2);
//     img2.classList.add('backgroundPhoto');
//     }
// }

/*APOD*/
$.ajax ({
  url: "https://api.nasa.gov/planetary/apod?date="+currentDay+"&api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
  method: "GET",
  success: function(apod){
    appendPicture(apod);
    console.log(apod);
  },
  error: console.log,
})
// Mars Rover Photos
$.ajax ({
  url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
  method: "GET",
  success: function (marsPhoto) {
    appendPicture2(marsPhoto);
    console.log(marsPhoto);
  },
  error: console.log,
})

/*Browse the overall asteroid data-set*/
/* interesting data to pull: diameter, is potentially hazardous, first observation date, last observation date, relative velocity (km/hr), miss distance*/
$.ajax({
  url: "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
  method: "GET",
  success: function (response) {
    mainTable(response);
  },



  // error: console.log,
})

// function getAsteroidData() {
//   var name = asteroidTableData.near_earth_objects.[i].name;
//   var diameterMin = asteroidTableData.near_earth_objects.[i].estimated_diameter.kilometers.estimated_diameter_min;
//   var diameterMax = asteroidTableData.near_earth_objects.[i].estimated_diameter.kilometers.estimated_diameter_max;
//   var velocity = asteroidTableData.near_earth_objects.[i].close_approach_data.0.relative_velocity.kilometers_per_hour;
//   var firstObservation = asteroidTableData.near_earth_objects.[i].orbital_data.first_observation_date;
//   var lastObservation = asteroidTableData.near_earth_objects.[i].orbital_data.last_observation_date;
//   var missDistance = asteroidTableData.near_earth_objects.[i].close_approach_data.0.miss_distance.kilometers;
//   var isHazardous = asteroidTableData.near_earth_objects.[i].is_potentially_hazardous_asteroid;
// }














/*List of asteroids based on their closest approach date to Earth*/
// $.ajax ({
//   url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
//   method: "GET",
//   success: console.log,
//   error: console.log,
// })

/*List of asteroids based on their closest approach date to Earth*/
// $.ajax ({
//   url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
//   method: "GET",
//   success: console.log,
//   error: console.log,
// })



/*Look up a specific asteroid*/
// $.ajax ({
//   url: "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
//   method: "GET",
//   success: console.log,
//   error: console.log,
// })
