
var today = new Date();
var currentDay = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


var container = document.getElementById('container');



function appendPicture(apod) {
    if (apod.media_type !== "video") {
  var photo = apod.hdurl;
  var img = document.createElement('img');
  img.src = photo;
  container.appendChild(img);
  img.classList.add('backgroundPhoto');
  } else if (apod.media_type === "video") {
    appendPicture2();
  }
}

function appendPicture2(marsPhoto) {
  if(typeof(marsPhoto) ==="undefined"){
    return null;
  } else {
    var photo2 = marsPhoto.photos;
    var img2 = document.createElement("img");
    container.appendChild(img2);
    img2.src = photo2[1].img_src;
    img2.classList.add('backgroundPhoto');
  }
}


/*APOD*/
$.ajax ({
  url: "https://api.nasa.gov/planetary/apod?date="+currentDay+"&api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
  method: "GET",
  success: function(apod){
    appendPicture(apod);
  },
  error: console.log,
})
// Mars Rover Photos
$.ajax ({
  url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
  method: "GET",
  success: function (marsPhoto) {
    appendPicture2(marsPhoto);
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
})



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
