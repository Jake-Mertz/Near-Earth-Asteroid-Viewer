
var container = document.getElementById('container');
var asteroidTable = document.getElementById('asteroid-table-row');


function mainTable(asteroidTableData) {
  console.log(asteroidTableData.near_earth_objects);

  var nearEarthObjects = asteroidTableData.near_earth_objects;
  var objectsArray = [];
  var mainTableElement = [];
  var infoModal = [];
  var modalTable = [];



  var mainTable = document.createElement('table');
  mainTable.classList.add('asteroid-table-row');
  asteroidTable.append(mainTable);

  mainTable.append(mainTableElement);



  // asteroidObject
  // [Math.floor(Math.random() * nearEarthObjects.length)];

  for (var i = 0; i < nearEarthObjects.length; i++) {

    var asteroidObject = nearEarthObjects[i];
      mainTableElement[i] = document.createElement('td');
      // mainTableElement[i] =
      infoModal[i] = document.createElement('div');

    modalTable[i] = document.createElement('table');
    infoModal[i].append(modalTable);
    infoModal[i].classList.add('hidden');
    infoModal[i].classList.add('info-modal');
    container.append(infoModal);



    mainTableElement[i].addEventListener('click', function () { infoModal[i].classList.remove('hidden') });

    if (i % 4 === 0) {
      var newRow = document.createElement('tr');
      newRow.classList.add('row');
      mainTable.append(newRow);
    }

    newRow.append(mainTableElement[i]);


    var asteroidName = document.createElement('p');
    asteroidName.textContent = nearEarthObjects[i].name;
    mainTableElement[i].append(asteroidName);
    infoModal[i].append(asteroidName.textContent);

    var orbitalDiagram = document.createElement('a');
    orbitalDiagram.setAttribute('href', nearEarthObjects[i].nasa_jpl_url);
    orbitalDiagram.textContent = "Orbital Diagram";
    infoModal[i].append(orbitalDiagram);

    var asteroidDiameterDataMin = document.createElement('tr');
    asteroidDiameterDataMin.textContent = "Asteroid Diameter Min: " + nearEarthObjects[i].estimated_diameter.kilometers.estimated_diameter_min + " Kilometers";
    modalTable[i].append(asteroidDiameterDataMin.textContent);

    var asteroidDiameterDataMax = document.createElement('tr');
    asteroidDiameterDataMax.textContent = "Asteroid Diameter Max " + nearEarthObjects[i].estimated_diameter.kilometers.estimated_diameter_max + " Kilometers";
    modalTable[i].append(asteroidDiameterDataMax.textContent);

    var firstObservationData = document.createElement('tr');
    firstObservationData.textContent = "First Observation Date: " + nearEarthObjects[i].orbital_data.first_observation_date;
    modalTable[i].append(firstObservationData.textContent);

    var lastObservationData = document.createElement('tr');
    lastObservationData.textContent = "Last Observation Date: " + nearEarthObjects[i].orbital_data.last_observation_date;
    modalTable[i].append(lastObservationData.textContent);

    var backButton = document.createElement('button');
    backButton.onclick = function () { infoModal[i].classList.add('hidden') };
    backButton.classList.add('back-button');
    backButton.textContent = "Back";
    infoModal[i].append(backButton);

    var relativeVelocityData = document.createElement('tr');
    var missDistanceData = document.createElement('tr');
    var yesOrNo = document.createElement('p');

  }
}
