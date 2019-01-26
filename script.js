const params = config.api_key;

fetch('https://api.wmata.com/StationPrediction.svc/json/GetPrediction/All?api_key=' + params)
.then(function(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  // Read response as json
  return response.json();
})
.then(function(responseAsJson) {
  const myJSON = JSON.stringify(responseAsJson);
  document.getElementsByClassName('one')[0].innerHTML = JSON.stringify(responseAsJson.Trains[0]);
  console.log(responseAsJson.Trains[0]);
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
