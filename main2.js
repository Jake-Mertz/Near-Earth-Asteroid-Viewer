


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

var infoModal = document.getElementById('info-modal');

var asteroidName = document.getElementById('asteroid-name');
var ortibalDiagramLink = document.getElementById('orbital-diagram-link');
var yesOrNo = document.getElementById('yes-or-no');
var asteroidDanger = document.getElementById('asteroid-danger');
var spongebob = document.getElementById('spongebob');
var backButton = document.getElementById("backButton");
backButton.addEventListener('click', goBack);

function goBack() {
  infoModal.classList.add('hidden');
  clearEntries();
}

function clearEntries() {
  ortibalDiagramLink.textContent = '';
  asteroidName.textContent = '';
  asteroidDiameterDataMin.textContent = '';
  asteroidDiameterDataMax.textContent = '';
  firstObservationData.textContent = '';
  lastObservationData.textContent = '';
  relativeVelocityData.textContent = '';
  missDistanceData.textContent = '';
  yesOrNo.textContent = '';
  spongebob.classList.add('hidden');
  asteroidDanger.classList.add('hidden');
}


var asteroidTableArray = [asteroid1table, asteroid2table, asteroid3table, asteroid4table, asteroid5table, asteroid6table, asteroid7table, asteroid8table, asteroid9table, asteroid10table];

// var asteroidObjectsArray = [asteroid1Object, asteroid2Object, asteroid3Object, asteroid4Object, asteroid5Object, asteroid6Object, asteroid7Object, asteroid8Object, asteroid9Object, asteroid10Object];



function mainTable(asteroidTableData) {
  console.log(asteroidTableData.near_earth_objects);
  var nearEarthObjects = asteroidTableData.near_earth_objects;


  for (var i = 0; i < asteroidTableArray.length; i++) {
    var asteroidObject = {};
    // var asteroidObject = asteroidTableData.near_earth_objects[Math.floor(Math.random * asteroidTableData.near_earth_objects.length)];

    asteroidObject[i] = nearEarthObjects[Math.floor(Math.random() * nearEarthObjects.length)];
    // asteroidTableArray[i].append(asteroidObject);
    asteroidTableArray[i].textContent = asteroidObject[i].name;
    asteroidTableArray[i].addEventListener('click', fillInfoModal);



    var orbitalDiagram = document.createElement('a');
    orbitalDiagram.setAttribute('href', asteroidObject[i].nasa_jpl_url);
    ortibalDiagramLink.append(orbitalDiagram);


    asteroidName.append(asteroidObject[i].name);
    asteroidDiameterDataMin.append(asteroidObject[i].estimated_diameter.kilometers.estimated_diameter_min + " Kilometers");
    asteroidDiameterDataMax.append(asteroidObject[i].estimated_diameter.kilometers.estimated_diameter_max + " Kilometers");
    firstObservationData.append(asteroidObject[i].orbital_data.first_observation_date);
    lastObservationData.append(asteroidObject[i].orbital_data.last_observation_date);

    if (nearEarthObjects.close_approach_data) {
      relativeVelocityData.append(asteroidObject[i].close_approach_data[0].relative_velocity.kilometers_per_hour + " Km/hr");
      missDistanceData.append(asteroidObject[i].close_approach_data[0].miss_distance.kilometers + " Kilometers");
    } else {
      relativeVelocityData.append('N/A');
      missDistanceData.append("N/A");
  }

    if (asteroidObject[i].is_potentially_hazardous_asteroid === true) {
      yesOrNo.textContent = "Yes!";
      asteroidDanger.classList.remove('hidden');

    } else {
      yesOrNo.textContent = "No!"
      spongebob.classList.remove('hidden');
    }
  }
}

  function fillInfoModal() {


    // for (var i = 0; i < asteroidTableArray.length; i++) {
    //   if (event.currentTarget === asteroidTableArray[i]) {

    //     // ortibalDiagramLink.append(asteroidObject.nasa_jpl_url);
    //     var orbitalDiagram = document.createElement('a');
    //     orbitalDiagram.setAttribute('href', asteroidObject.nasa_jpl_url);
    //     ortibalDiagramLink.append(orbitalDiagram);



    //     asteroidName.append(asteroidObject.name);
    //     asteroidDiameterDataMin.append(asteroidObject.estimated_diameter.kilometers.estimated_diameter_min + " Kilometers");
    //     asteroidDiameterDataMax.append(asteroidObject.estimated_diameter.kilometers.estimated_diameter_max + " Kilometers");
    //     firstObservationData.append(asteroidObject.orbital_data.first_observation_date);
    //     lastObservationData.append(asteroidObject.orbital_data.last_observation_date);

    // if (nearEarthObjects.close_approach_data) {
    //   relativeVelocityData.append(asteroidObject.close_approach_data[0].relative_velocity.kilometers_per_hour + " Km/hr");
    //   missDistanceData.append(asteroidObject.close_approach_data[0].miss_distance.kilometers + " Kilometers");
    // } else {
    //   relativeVelocityData.append('N/A');
    //   missDistanceData.append("N/A");
    // }
    //     if (asteroidObject.is_potentially_hazardous_asteroid === true) {
    //       yesOrNo.textContent = "Yes!";
    //       asteroidDanger.classList.remove('hidden');

    //     } else {
    //       yesOrNo.textContent = "No!"
    //       spongebob.classList.remove('hidden');
    //     }
    //   }
    infoModal.classList.remove('hidden');
    }



// relativeVelocityData.append(asteroidObject.close_approach_data[0].relative_velocity.kilometers_per_hour + " Km/hr");
// missDistanceData.append(asteroidObject.close_approach_data[0].miss_distance.kilometers + " Kilometers");




  // var asteroid1Object = asteroidTableData.near_earth_objects[0];
  // var asteroid2Object = asteroidTableData.near_earth_objects[11];
  // var asteroid3Object = asteroidTableData.near_earth_objects[12];
  // var asteroid4Object = asteroidTableData.near_earth_objects[13];
  // var asteroid5Object = asteroidTableData.near_earth_objects[14];
  // var asteroid6Object = asteroidTableData.near_earth_objects[15];
  // var asteroid7Object = asteroidTableData.near_earth_objects[16];
  // var asteroid8Object = asteroidTableData.near_earth_objects[17];
  // var asteroid9Object = asteroidTableData.near_earth_objects[18];
  // var asteroid10Object = asteroidTableData.near_earth_objects[19];

  // asteroid1table.textContent = asteroid1Object.name;
  // asteroid2table.textContent = asteroid2Object.name;
  // asteroid3table.textContent = asteroid3Object.name;
  // asteroid4table.textContent = asteroid4Object.name;
  // asteroid5table.textContent = asteroid5Object.name;
  // asteroid6table.textContent = asteroid6Object.name;
  // asteroid7table.textContent = asteroid7Object.name;
  // asteroid8table.textContent = asteroid8Object.name;
  // asteroid9table.textContent = asteroid9Object.name;
  // asteroid10table.textContent = asteroid10Object.name;

  // asteroid1table.addEventListener('click', fillInfoModal);
  // asteroid2table.addEventListener('click', fillInfoModal);
  // asteroid3table.addEventListener('click', fillInfoModal);
  // asteroid4table.addEventListener('click', fillInfoModal);
  // asteroid5table.addEventListener('click', fillInfoModal);
  // asteroid6table.addEventListener('click', fillInfoModal);
  // asteroid7table.addEventListener('click', fillInfoModal);
  // asteroid8table.addEventListener('click', fillInfoModal);
  // asteroid9table.addEventListener('click', fillInfoModal);
  // asteroid10table.addEventListener('click', fillInfoModal);
