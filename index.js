// Code your solution here:
function driversWithRevenueOver(allDrivers, revenueAmount) {
  return allDrivers.filter(function(driver) {
    return driver.revenue >= revenueAmount;
  })
}

function driverNamesWithRevenueOver(allDrivers, revenueAmount) {
  const revenueOver = driversWithRevenueOver(allDrivers, revenueAmount);

  return revenueOver.map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, name) {
  return drivers.filter(function(driver) {
    for(const key in name) {
      return driver[key] === name[key]
    };
  });
}

function exactMatchToList(drivers, name) {
  const matchedDrivers = exactMatch(drivers, name)

  return matchedDrivers.map(function(driver) {
    return driver.name;
  });
}
