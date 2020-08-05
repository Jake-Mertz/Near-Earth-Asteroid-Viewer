


var today = new Date();
var currentDay = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
console.log(currentDay);

var container = document.getElementById('container');

/*APOD*/
$.ajax ({
  url: "https://api.nasa.gov/planetary/apod?date="+currentDay+"&api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
  method: "GET",
  success: function(APOD){
    var photo = APOD.hdurl;
    var img = document.createElement('img');
    img.src = photo;
    container.appendChild(img);
    img.classList.add('backgroundPhoto');
  },
  error: console.log,
})


// function linkPages(){
//   if (event.currentTarget === )
// }

var asteroidDiameterDataMin = document.getElementById('asteroid-diameter-data-min');
var asteroidDiameterDataMax = document.getElementById('asteroid-diameter-data-max');
var firstObservationData = document.getElementById('first-observation-data');
var lastObservationData = document.getElementById('last-observation-data');
var relativeVelocityData = document.getElementById('relative-velocity-data');
var missDistanceData = document.getElementById('miss-distance-data');


/*Browse the overall asteroid data-set*/
/* interesting data to pull: diameter, is potentially hazardous, first observation date, last observation date, relative velocity (km/hr), miss distance*/
$.ajax({
  url: "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
  method: "GET",
  success:

    function mainTable(asteroidTableData){
      console.log(asteroidTableData);
    var asteroid1 = document.getElementById('asteroid1');
    var asteroid2 = document.getElementById('asteroid2');
    var asteroid3 = document.getElementById('asteroid3');
    var asteroid4 = document.getElementById('asteroid4');
    var asteroid5 = document.getElementById('asteroid5');
    var asteroid6 = document.getElementById('asteroid6');
    var asteroid7 = document.getElementById('asteroid7');
    var asteroid8 = document.getElementById('asteroid8');
    var asteroid9 = document.getElementById('asteroid9');
    var asteroid10 = document.getElementById('asteroid10');

      var asteroid1Object = asteroidTableData.near_earth_objects[0];
      var asteroid2Object = asteroidTableData.near_earth_objects[11];
      var asteroid3Object = asteroidTableData.near_earth_objects[12];
      var asteroid4Object = asteroidTableData.near_earth_objects[13];
      var asteroid5Object = asteroidTableData.near_earth_objects[14];
      var asteroid6Object = asteroidTableData.near_earth_objects[15];
      var asteroid7Object = asteroidTableData.near_earth_objects[16];
      var asteroid8Object = asteroidTableData.near_earth_objects[17];
      var asteroid9Object = asteroidTableData.near_earth_objects[18];
      var asteroid10Object = asteroidTableData.near_earth_objects[19];

      var asteroidObjectsArray = [asteroid1Object, asteroid2Object, asteroid3Object, asteroid4Object, asteroid5Object, asteroid6Object, asteroid7Object, asteroid8Object, asteroid9Object, asteroid10Object];
      var asteroidsArray = [asteroid1, asteroid2, asteroid3, asteroid4, asteroid5, asteroid6, asteroid7, asteroid8, asteroid9, asteroid10];

      function fillAsteroidPage() {
        for (var i = 0; i < asteroidsArray.length; i++) {
          if (event.target === asteroidsArray[i]) {
            asteroidDiameterDataMin.append(asteroidObjectsArray[i].estimated_diameter.kilometers.estimated_diameter_min);
            asteroidDiameterDataMax.append(asteroidObjectsArray[i].estimated_diameter.kilometers.estimated_diameter_max);
            firstObservationData.append(asteroidObjectsArray[i].orbital_data.first_observation_date);
            lastObservationData.append(asteroidObjectsArray[i].orbital_data.last_observation_date);
            relativeVelocityData.append(asteroidObjectsArray[i].close_approach_data.firstChild.relative_velocity.kilometers_per_hour);
            missDistanceData.append(asteroidObjectsArray[i].close_approach_data.firstChild.miss_distance.kilometers);
          }
        }
      }




      asteroid1.textContent = asteroid1Object.name;
      asteroid2.textContent = asteroid2Object.name;
      asteroid3.textContent = asteroid3Object.name;
      asteroid4.textContent = asteroid4Object.name;
      asteroid5.textContent = asteroid5Object.name;
      asteroid6.textContent = asteroid6Object.name;
      asteroid7.textContent = asteroid7Object.name;
      asteroid8.textContent = asteroid8Object.name;
      asteroid9.textContent = asteroid9Object.name;
      asteroid10.textContent = asteroid10Object.name;





    // asteroid1.addEventListener('click', function() {});
    // asteroid2.addEventListener('click', function ());
    // asteroid3.addEventListener('click', function ());
    // asteroid4.addEventListener('click', function ());
    // asteroid5.addEventListener('click', function ());
    // asteroid6.addEventListener('click', function ());
    // asteroid7.addEventListener('click', function ());
    // asteroid8.addEventListener('click', function ());
    // asteroid9.addEventListener('click', function ());
    // asteroid10.addEventListener('click', function ());

          // var name1 = asteroid1Object.name;
      // var name2 = asteroid2Object.name;
      // var name3 = asteroid3Object.name;
      // var name4 = asteroid4Object.name;
      // var name5 = asteroid5Object.name;
      // var name6 = asteroid6Object.name;
      // var name7 = asteroid7Object.name;
      // var name8 = asteroid8Object.name;
      // var name9 = asteroid9Object.name;
      // var name10 = asteroid10Object.name;

    },

  error: console.log,
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
