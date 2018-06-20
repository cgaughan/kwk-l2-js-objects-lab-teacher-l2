const driver = {driver:"driver"}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newPair = {};
  newPair[key] = value;
  hateObjects = Object.assign({}, driver, newPair);
  return hateObjects
};


//driver.address;
