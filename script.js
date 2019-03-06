const params = config.api_key;

function getTrains() {
// document.getElementById('rd').addEventListener('click', getData);

fetch('https://api.wmata.com/StationPrediction.svc/json/GetPrediction/All?api_key=' + params)
.then(response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
})
.then(myJson => {
  // const myJson = JSON.stringify(myJson.Trains);
  // const RD = document.getElementById('rd').id;
  // const OR = document.getElementById('or').id;
  // const BL = document.getElementById('bl').id;
  // const SL = document.getElementById('sl').id;
  // const GR = document.getElementById('gr').id;
  // const YL = document.getElementById('yl').id;
  // const colors = [RD, OR, BL, SL, GR, YL];

document.getElementsByClassName('one')[0].innerHTML = JSON.stringify(myJson.Trains[0]);
  console.log(myJson);

  let i, x = "";

  for (i in myJson.Trains) {
    if (myJson.Trains[i].Line === 'BL') {
  x += JSON.stringify(myJson.Trains[i].LocationName) + "<br>";
  document.getElementById("ok").innerHTML = x;
}
}


})
.catch(error => {
  console.log('Looks like there was a problem: \n', error);
});
}

const abc = document.querySelector('.line');
abc.addEventListener('click', getTrains);
// ******************************************************************

// function myFunction() {
//   document.getElementById('rd').innerHTML = 'HEY!';
//
//   console.log(Object.values(myJson));
// }
//
// console.log(response.json());
