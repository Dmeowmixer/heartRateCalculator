let button = document.getElementById('submitButton');
let maxHR,lowTarget,highTarget, karvLow, karvHigh, karvMax, karvReserve,karvLowFinal, karvHighFinal;
let targetDiv = document.getElementById('resultsDiv');
let maxHRelement = document.createElement('p');
let lowHigh = document.createElement('p');


button.addEventListener('click', function(){
  let age = document.getElementById('ageInput').value;
  let restingHR = document.getElementById('restingHRInput').value;
  maxHR = 207 - (.7 * age);
  maxHRelement.innerText = "Your estimated maximum Heart Rate is " + maxHR;
  targetDiv.appendChild(maxHRelement);
  lowTarget = Math.floor(maxHR * .50);
  highTarget = Math.floor(maxHR * .85);
  karvMax = 220 - age;
  karvReserve = karvMax - restingHR;
  karvLow = Math.floor(karvReserve * .50);
  karvHigh = Math.floor(karvReserve * .85);
  karvLowFinal = karvLow + restingHR;
  karvHighFinal = karvHigh + restingHR;
  lowHigh.innerText = "Your estimated Target Heart Rate Range is from " + lowTarget + " to " + highTarget + " or using the Karvonen method it is " + karvLowFinal + ' to ' + karvHighFinal;
  targetDiv.appendChild(lowHigh);
});