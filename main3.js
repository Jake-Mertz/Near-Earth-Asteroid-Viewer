
var container = document.getElementById('container');
var asteroidTable = document.getElementById('asteroid-table-row');


function mainTable(asteroidTableData) {
  // console.log(asteroidTableData.near_earth_objects);

  var nearEarthObjects = asteroidTableData.near_earth_objects;
  // var objectsArray = [];
  // var mainTableElement = [];
  // var infoModal = [];
  // var modalTable = [];

  var mainTable = document.createElement('table');
  mainTable.classList.add('asteroid-main-table');
  container.append(mainTable);
  asteroidTable.append(mainTable);
  // asteroidObject
  // [Math.floor(Math.random() * nearEarthObjects.length)];

  for (var i = 0; i < nearEarthObjects.length; i++) {

      // var asteroidObject = nearEarthObjects[i];
      var mainTableElement = document.createElement('td');
      mainTableElement.addEventListener('click', function () { infoModal.classList.remove('hidden') });
      // mainTable.append(mainTableElement);


      var infoModal = document.createElement('div');
      var modalTable = document.createElement('table');
      infoModal.append(modalTable);
      infoModal.classList.add('hidden');
      infoModal.classList.add('info-modal');
      modalTable.classList.add('asteroid-data-table')
      container.append(infoModal);



      if (i % 4 === 0) {
        var newRow = document.createElement('tr');
        newRow.classList.add('row');
      }
      newRow.append(mainTableElement);
      mainTable.append(newRow);


      var asteroidName = document.createElement('p');
      asteroidName.textContent = nearEarthObjects[i].name;
      mainTableElement.append(asteroidName);
      infoModal.append(asteroidName.textContent);

      var orbitalDiagram = document.createElement('a');
      orbitalDiagram.setAttribute('href', nearEarthObjects[i].nasa_jpl_url);
      orbitalDiagram.textContent = "Orbital Diagram";
      infoModal.append(orbitalDiagram);


      var asteroidDiameterDataMin = document.createElement('tr');
      asteroidDiameterDataMin.classList.add('asteroid-table-data');
      asteroidDiameterDataMin.textContent = "Asteroid Diameter Min: " + nearEarthObjects[i].estimated_diameter.kilometers.estimated_diameter_min + " Kilometers";
      modalTable.append(asteroidDiameterDataMin.textContent);

      var asteroidDiameterDataMax = document.createElement('tr');
      asteroidDiameterDataMax.classList.add('asteroid-table-data');
      asteroidDiameterDataMax.textContent = "Asteroid Diameter Max " + nearEarthObjects[i].estimated_diameter.kilometers.estimated_diameter_max + " Kilometers";
      modalTable.append(asteroidDiameterDataMax.textContent);

      var firstObservationData = document.createElement('tr');
      firstObservationData.classList.add('asteroid-table-data');
      firstObservationData.textContent = "First Observation Date: " + nearEarthObjects[i].orbital_data.first_observation_date;
      modalTable.append(firstObservationData.textContent);

      var lastObservationData = document.createElement('tr');
      lastObservationData.classList.add('asteroid-table-data');
      lastObservationData.textContent = "Last Observation Date: " + nearEarthObjects[i].orbital_data.last_observation_date;
      modalTable.append(lastObservationData.textContent);

    //   var relativeVelocityData = document.createElement('tr');
    //   relativeVelocityData.classList.add('asteroid-table-data');
    //   var missDistanceData = document.createElement('tr');
    //   missDistanceData.classList.add('asteroid-table-data');
    //   if (nearEarthObjects[i].close_approach_data !== undefined) {
    //     relativeVelocityData.textContent = nearEarthObjects[i].close_approach_data[0].relative_velocity.kilometers_per_hour + " Km/hr";
    //     missDistanceData.textContent = nearEarthObjects[i].close_approach_data[0].miss_distance.kilometers + " Kilometers";
    //       } else {
    //       relativeVelocityData.textContent = 'N/A';
    //       missDistanceData.textContent = 'N/A';
    //     }
    //   modalTable.append(relativeVelocityData);
    //   modalTable.append(missDistanceData);
    // }



      var yesOrNo = document.createElement('p');
    if (nearEarthObjects[i].is_potentially_hazardous_asteroid === true) {
      yesOrNo.textContent = "Yes!";
      // asteroidDanger.classList.remove('hidden');

    } else {
      yesOrNo.textContent = "No!"
    }


      var backButton = document.createElement('button');
      backButton.onclick = function () { infoModal.classList.add('hidden') };
      backButton.classList.add('back-button');
      backButton.textContent = "Back";
      infoModal.append(backButton);



  }
}
