let button = document.getElementById('submitButton');
let maxHR,lowTarget,highTarget, karvLow, karvHigh, karvMax, karvReserve,karvLowFinal, karvHighFinal;
let targetDiv = document.getElementById('resultsDiv');
let maxHRelement = document.createElement('p');
let lowHigh = document.createElement('p');


button.addEventListener('click', function(){
  // implement form input validation to check if empty or input is a Number

  let age = document.getElementById('ageInput').value;
  let restingHR = document.getElementById('restingHRInput').value;
  console.log(restingHR);
  maxHR = 207 - (.7 * age);
  maxHRelement.innerText = "Your estimated maximum Heart Rate is " + maxHR;
  targetDiv.appendChild(maxHRelement);
  lowTarget = Math.floor(maxHR * .65);
  highTarget = Math.floor(maxHR * .85);
  karvMax = 206.9 - (0.67 * age);
  karvReserve = karvMax - restingHR;
  karvLow = Math.floor(karvReserve * .65);
  karvHigh = Math.floor(karvReserve * .85);
  karvLowFinal = karvLow + parseInt(restingHR);
  karvHighFinal = karvHigh + parseInt(restingHR);
  lowHigh.innerText = "Your estimated Target Heart Rate Range is from " + lowTarget + " to " + highTarget + " or using the Karvonen method it is " + karvLowFinal + ' to ' + karvHighFinal;
  targetDiv.appendChild(lowHigh);
});
