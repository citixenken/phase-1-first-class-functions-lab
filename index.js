// Code your solution in this file!

//1. returnFirstTwoDrivers
//==========================
// function returnFirstTwoDrivers(drivers) {
//   return drivers.slice(0, 2);
// }
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// const returnFirstTwoDrivers = (drivers) => {
//   return drivers.slice(0, 2);
// };

//2. returnLastTwoDrivers
//==========================
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

//3. selectingDrivers
//==========================
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//4. createFareMultiplier
//==========================
function createFareMultiplier(multiplier) {
  return function (fareAmount) {
    return multiplier * fareAmount;
  };
}
// const createFareMultiplier = (multiplier) => (fareAmount) =>
//   multiplier * fareAmount;

//5. fareDoubler
//==========================
const fareDoubler = createFareMultiplier(2);

//6. fareTripler
//==========================
const fareTripler = createFareMultiplier(3);

//7. selectDifferentDrivers
//==========================
function selectDifferentDrivers(drivers, selectedRangeOfDrivers) {
  return selectedRangeOfDrivers(drivers);
}

// const selectDifferentDrivers = (drivers, selectedRangeOfDrivers) =>
//   selectedRangeOfDrivers(drivers);
