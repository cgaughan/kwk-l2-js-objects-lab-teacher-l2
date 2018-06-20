const driver = {driver:"driver"}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newPair = {}; //brackets means you're creating an object
  newPair[key] = value; //how you assign your key and value to your object
  //ex of key and value => name: "Caroline"
  hateObjects = Object.assign({}, driver, newPair);
  return hateObjects
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
  
}
