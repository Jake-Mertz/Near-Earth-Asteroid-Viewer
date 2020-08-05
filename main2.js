var asteroidDiameterDataMin = document.getElementById('asteroid-diameter-data-min');
var asteroidDiameterDataMax = document.getElementById('asteroid-diameter-data-max');
var firstObservationData = document.getElementById('first-observation-data');
var lastObservationData = document.getElementById('last-observation-data');
var relativeVelocityData = document.getElementById('relative-velocity-data');
var missDistanceData = document.getElementById('miss-distance-data');

var asteroid1table = document.getElementById('asteroid1table');
var asteroid2table = document.getElementById('asteroid2table');
var asteroid3table = document.getElementById('asteroid3table');
var asteroid4table = document.getElementById('asteroid4table');
var asteroid5table = document.getElementById('asteroid5table');
var asteroid6table = document.getElementById('asteroid6table');
var asteroid7table = document.getElementById('asteroid7table');
var asteroid8table = document.getElementById('asteroid8table');
var asteroid9table = document.getElementById('asteroid9table');
var asteroid10table = document.getElementById('asteroid10table');


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

  asteroid1table.textContent = asteroid1Object.name;
  asteroid2table.textContent = asteroid2Object.name;
  asteroid3table.textContent = asteroid3Object.name;
  asteroid4table.textContent = asteroid4Object.name;
  asteroid5table.textContent = asteroid5Object.name;
  asteroid6table.textContent = asteroid6Object.name;
  asteroid7table.textContent = asteroid7Object.name;
  asteroid8table.textContent = asteroid8Object.name;
  asteroid9table.textContent = asteroid9Object.name;
  asteroid10table.textContent = asteroid10Object.name;

  asteroid1table.addEventListener('click', fillInfoModal());

  var asteroidObjectsArray = [asteroid1Object, asteroid2Object, asteroid3Object, asteroid4Object, asteroid5Object, asteroid6Object, asteroid7Object, asteroid8Object, asteroid9Object, asteroid10Object];
  var asteroidsTableArray = [asteroid1table, asteroid2table, asteroid3table, asteroid4table, asteroid5table, asteroid6table, asteroid7table, asteroid8table, asteroid9table, asteroid10table];

  var infoModal = document.getElementById('info-modal');

    function fillInfoModal() {
      infoModal.classList.remove('hidden');
      // for (var i = 0; i < asteroidsTableArray.length; i++) {
        if (event.target === asteroidsTableArray[i]) {
          asteroidDiameterDataMin.append(asteroidObjectsArray[i].estimated_diameter.kilometers.estimated_diameter_min);
          asteroidDiameterDataMax.append(asteroidObjectsArray[i].estimated_diameter.kilometers.estimated_diameter_max);
          firstObservationData.append(asteroidObjectsArray[i].orbital_data.first_observation_date);
          lastObservationData.append(asteroidObjectsArray[i].orbital_data.last_observation_date);
          relativeVelocityData.append(asteroidObjectsArray[i].close_approach_data.firstChild.relative_velocity.kilometers_per_hour);
          missDistanceData.append(asteroidObjectsArray[i].close_approach_data.firstChild.miss_distance.kilometers);
        }
      // }
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
