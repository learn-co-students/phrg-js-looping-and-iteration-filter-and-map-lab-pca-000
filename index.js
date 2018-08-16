function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name
  })
}

function exactMatch(drivers, matchingDrivers) {
  return drivers.filter(function (driver) {
    let matches = false;
      for (const key in matchingDrivers) {
        matches = driver[key] === matchingDrivers[key]
      }
  return matches
  })
}

function exactMatchToList(drivers, matchingDrivers) {
  return exactMatch(drivers, matchingDrivers).map(function (driver) {
    return driver.name
  })
}
