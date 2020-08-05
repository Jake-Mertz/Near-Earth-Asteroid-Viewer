var asteroidDiameterDataMin = document.getElementById('asteroid-diameter-data-min');
var asteroidDiameterDataMax = document.getElementById('asteroid-diameter-data-max');
var firstObservationData = document.getElementById('first-observation-data');
var lastObservationData = document.getElementById('last-observation-data');
var relativeVelocityData = document.getElementById('relative-velocity-data');
var missDistanceData = document.getElementById('miss-distance-data');

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


function mainTable(asteroidTableData) {
  console.log(asteroidTableData);
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

  var asteroidObjectsArray = [asteroid1Object, asteroid2Object, asteroid3Object, asteroid4Object, asteroid5Object, asteroid6Object, asteroid7Object, asteroid8Object, asteroid9Object, asteroid10Object];
  var asteroidsArray = [asteroid1, asteroid2, asteroid3, asteroid4, asteroid5, asteroid6, asteroid7, asteroid8, asteroid9, asteroid10];

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

// function fillAsteroidPage() {

//     }
//   }
// }

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
