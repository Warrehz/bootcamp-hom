let initURL = "http://www.omdbapi.com/?"

let userSearch = "t=there+will+be+blood"

const apiKey = "apikey=83a99f93&"



$.ajax({
  url: initURL + apiKey + userSearch,
  method: 'GET'
}).done(function (response) {
  console.log(response);
});
