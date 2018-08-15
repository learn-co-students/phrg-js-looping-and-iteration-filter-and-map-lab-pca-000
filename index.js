// Code your solution here:
function driversWithRevenueOver(drivers, num) {
let empty_array = []
  drivers.filter(function (driver) {
    if (driver["revenue"] >= num) {
      empty_array.push(driver)
    }
  })
  return empty_array
}

function driverNamesWithRevenueOver(drivers, num) {
  let empty_array = []
  drivers.filter(function (driver) {
    if (driver["revenue"] >= num) {
      empty_array.push(driver["name"])
    }
  })
  return empty_array
}

function exactMatch(drivers, object) {
  let empty_array = []
  drivers.filter(function (driver) {
    let driver_key = Object.keys(object)[0]
    let driver_value = object[driver_key]
    if (driver[driver_key] === driver_value) {
      empty_array.push(driver)
    }
  })
  return empty_array
}

function exactMatchToList(drivers, object) {
  let name_array = []
   drivers.filter(function (driver) {
    let driver_key = Object.keys(object)[0]
    let driver_value = object[driver_key]
    if (driver[driver_key] === driver_value) {
      name_array.push(driver["name"])
    }
  })
  return name_array
}
