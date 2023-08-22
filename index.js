// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, -2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers = drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(rate) {
   return function(fare){
    return fare * rate
    }
}

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, shiftDrivers) {
    return shiftDrivers(drivers)
}
