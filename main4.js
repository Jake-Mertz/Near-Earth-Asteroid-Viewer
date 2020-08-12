var container = document.getElementById('container');
var asteroidTable = document.getElementById('asteroid-table-row');
var tableImage = document.getElementById('table-background-image');

var mainTable = document.createElement('table');
mainTable.classList.add('asteroid-main-table');
container.append(mainTable);
asteroidTable.append(mainTable);

var mainTableElement = document.createElement('td');

function mainTable(asteroidTableData) {
  var nearEarthObjects = asteroidTableData.near_earth_objects;
  var asteroidsArray = [];
  for (var i = 0; i < nearEarthObjects.length; i++) {
    asteroidsArray[i] = nearEarthObjects[i];
  }



  return asteroidsArray;
}
