// Code your solution in this file!
// function returnFirstTwoDrivers(drivers) {
//   const firstTwoDrivers = () => drivers.slice(0, 2);
//   const first = firstTwoDrivers();
//   return first;
// }
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
// returnFirstTwoDrivers();
// function returnLastTwoDrivers(drivers) {
//   const lastTwoDrivers = () => drivers.slice(-2);
//   const last = lastTwoDrivers();
//   return last;
// }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    {
      return fare * multiplier;
    }
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, cb){
    return cb(drivers);

}
