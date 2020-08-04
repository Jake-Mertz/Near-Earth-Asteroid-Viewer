
var today = new Date();
var currentDay = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
console.log(currentDay);


/*APOD*/
$.ajax ({
  url: "https://api.nasa.gov/planetary/apod?date="+currentDay+"&api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
  method: "GET",
  success: console.log,
  error: console.log,
})

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
$.ajax ({
  url: "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
  method: "GET",
  success: console.log,
  error: console.log,
})


/*Browse the overall asteroid data-set*/
$.ajax ({
  url: "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=ff79LuQuAbF1iHJP6CgchroWeDvl9xDpsyzMYXc9",
  method: "GET",
  success: console.log,
  error: console.log,
})
