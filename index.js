// Code your solution in this file!
let drivers =['Antonia', 'Nuru','Amari', 'Mo']
const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}
  console.log(returnFirstTwoDrivers());

  const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
  }
  console.log(returnLastTwoDrivers());

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0])

function createFareMultiplier(num){
    return function(fare){
        return fare * num;
    }
}
const fareMultiplier = createFareMultiplier(4);

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cb){
    if(cb === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }else if(cb === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }}