// Code your solution in this file!


// Define the function returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Define the function returnLastTwoDrivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Define the array selectingDrivers containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define the higher-order function createFareMultiplier
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // Define the variable fareDoubler using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // Define the variable fareTripler using createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // Define the function selectDifferentDrivers
  const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };
  
