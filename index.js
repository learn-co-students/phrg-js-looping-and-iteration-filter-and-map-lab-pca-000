// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  const driverRevs = drivers.filter(function (driver) {
    if (driver.revenue > revenue) {
      return driver
    }
  })
  return driverRevs
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let emptyArray = []
  drivers.filter(function (driver) {
    if (driver["revenue"] >= revenue) {
      emptyArray.push(driver["name"])
    }
  })
  return emptyArray
}

function exactMatch (drivers, attribute) {
  const result = drivers.filter(function (driver) {
    for (const key in attribute) {
      pairs = driver[key] === attribute[key];
    }
    return pairs;
  });
  return result;
}

function exactMatchToList (drivers, attribute) {
  const pairs = exactMatch(drivers, attribute)
    let names = pairs.map(function (driver) {
      return driver.name;
    });
  return names;
}
