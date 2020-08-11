
var container = document.getElementById('container');
var asteroidTable = document.getElementById('asteroid-table-row');
var tableImage = document.getElementById('table-background-image');

function mainTable(asteroidTableData) {
  // console.log(asteroidTableData.near_earth_objects);

  var nearEarthObjects = asteroidTableData.near_earth_objects;

  var mainTable = document.createElement('table');
  mainTable.classList.add('asteroid-main-table');
  container.append(mainTable);
  asteroidTable.append(mainTable);


  for (var i = 0; i < nearEarthObjects.length; i++) {

      var mainTableElement = document.createElement('td');
      var modalId = "m-" + nearEarthObjects[i].id;
      mainTableElement.addEventListener('click', (function () {
        var id = modalId;
        return function () {
          var modal = document.getElementById(id);
          modal.classList.remove('hidden');
          modal.scrollTop = 0;
        }
      })());

      mainTableElement.classList.add('main-table-element');
      mainTableElement.append(tableImage);


      var infoModal = document.createElement('div');
      infoModal.setAttribute('id', modalId);
      var modalTable = document.createElement('table');

      infoModal.classList.add('hidden');
      infoModal.classList.add('info-modal');
      modalTable.classList.add('asteroid-modal-data-table')
      container.append(infoModal);



      if (i % 3 === 0) {
        var newRow = document.createElement('tr');
      }
      newRow.append(mainTableElement);
      mainTable.append(newRow);


      var asteroidName = document.createElement('p');
      asteroidName.textContent = nearEarthObjects[i].name;
      asteroidName.classList.add('main-table-text');
      mainTableElement.append(asteroidName);


      var asteroidName1 = document.createElement('h1');
      asteroidName1.textContent = nearEarthObjects[i].name;
      asteroidName1.classList.add('modal-title');
      infoModal.append(asteroidName1);


      var orbitalDiagramLink = document.createElement('a');
      orbitalDiagramLink.setAttribute('href', nearEarthObjects[i].nasa_jpl_url);
      orbitalDiagramLink.setAttribute('target', "_blank");
      orbitalDiagramLink.textContent = "Orbital Diagram";
      orbitalDiagramLink.classList.add('orbital-link-text');
      infoModal.append(orbitalDiagramLink);

      var linkDirections = document.createElement('p');
      linkDirections.textContent = ('Follow link & click "Orbital Diagram"');
      linkDirections.classList.add('link-directions');
      infoModal.append(linkDirections);

      infoModal.append(modalTable);


      var modalTableRow1 = document.createElement('tr');
      var asteroidDiameterDataMin = document.createElement('td');
      var modalTableRow1Text = document.createElement('td');
      modalTableRow1Text.textContent = "Asteroid Diameter Min: "
      asteroidDiameterDataMin.textContent = nearEarthObjects[i].estimated_diameter.kilometers.estimated_diameter_min.toFixed(4) + " Kilometers";
      modalTableRow1.append(modalTableRow1Text);
      modalTableRow1.append(asteroidDiameterDataMin);
      modalTable.append(modalTableRow1);

      var modalTableRow2 = document.createElement('tr');
      var asteroidDiameterDataMax = document.createElement('td');
      var modalTableRow2Text = document.createElement('td');
      modalTableRow2Text.textContent = "Asteroid Diameter Max: "
      asteroidDiameterDataMax.textContent =  nearEarthObjects[i].estimated_diameter.kilometers.estimated_diameter_max.toFixed(4) + " Kilometers";
      modalTableRow2.append(modalTableRow2Text);
      modalTableRow2.append(asteroidDiameterDataMax);
      modalTable.append(modalTableRow2);

      var modalTableRow3 = document.createElement('tr');
      var firstObservationData = document.createElement('td');
      var modalTableRow3Text = document.createElement('td');
      modalTableRow3Text.textContent = "First Observation Date: "
      firstObservationData.textContent = nearEarthObjects[i].orbital_data.first_observation_date;
      modalTableRow3.append(modalTableRow3Text);
      modalTableRow3.append(firstObservationData);
      modalTable.append(modalTableRow3);

      var modalTableRow4 = document.createElement('tr');
      var lastObservationData = document.createElement('td');
      var modalTableRow4Text = document.createElement('td');
      modalTableRow4Text.textContent = "Last Observation Date: "
      lastObservationData.textContent = nearEarthObjects[i].orbital_data.last_observation_date;
      modalTableRow4.append(modalTableRow4Text);
      modalTableRow4.append(lastObservationData);
      modalTable.append(modalTableRow4);

      var modalTableRow5 = document.createElement('tr');
      var relativeVelocityData = document.createElement('td');
      var modalTableRow5Text = document.createElement('td');
      modalTableRow5Text.textContent = "Relative Velocity: "
      var modalTableRow6 = document.createElement('tr');
      var missDistanceData = document.createElement('td');
      var modalTableRow6Text = document.createElement('td');
      modalTableRow6Text.textContent = "Miss Distance: "
      if (nearEarthObjects[i].close_approach_data === true) {
        relativeVelocityData.textContent = nearEarthObjects[i].close_approach_data[0].relative_velocity.kilometers_per_hour + " Km/hr";
        missDistanceData.textContent = nearEarthObjects[i].close_approach_data[0].miss_distance.kilometers + " Kilometers";
          } else {
          relativeVelocityData.textContent = "N/A";
          missDistanceData.textContent = "N/A";
        }

      modalTableRow5.append(modalTableRow5Text);
      modalTableRow5.append(relativeVelocityData);
      modalTableRow6.append(modalTableRow6Text);
      modalTableRow6.append(missDistanceData);
      modalTable.append(modalTableRow5);
      modalTable.append(modalTableRow6);


      var dangerousText = document.createElement('p');
      dangerousText.textContent = "Is this asteroid hazardous?"
      infoModal.append(dangerousText);

      var dangerImage = document.createElement('IMG');
      dangerImage.classList.add('hidden');
      dangerImage.classList.add('asteroid-danger-image');
      dangerImage.setAttribute('src', "images/peopleRunningFromAsteroid.jpg");


      var safeImage = document.createElement('IMG');
      safeImage.classList.add('hidden');
      safeImage.classList.add('asteroid-safe-image');
      safeImage.setAttribute('src', "images/perseids2018-1.jpg");


      var yesOrNo = document.createElement('p');
        if (nearEarthObjects[i].is_potentially_hazardous_asteroid === true) {
          yesOrNo.textContent = "Yes!";
          infoModal.append(dangerImage);
          dangerImage.classList.remove('hidden');

        } else {
          yesOrNo.textContent = "No!"
          infoModal.append(safeImage);
          safeImage.classList.remove('hidden');
        }
        infoModal.append(yesOrNo);


      var backButton = document.createElement('button');
      backButton.onclick = (function () {
        var id = modalId;
        return function () {
          document.getElementById(id).classList.add('hidden');
        }
      })();
      backButton.classList.add('back-button');
      backButton.textContent = "Back";
      infoModal.append(backButton);



  }
}
