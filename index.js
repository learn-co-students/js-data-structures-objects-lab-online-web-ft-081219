const driver = {};

const updateDriverWithKeyAndValue = (driver, k, v) => {
  return { ...driver, ...{[k]: v}};
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, k, v) => {
  driver[k] = v;
  return driver;
}

const deleteFromDriverByKey = (driver, k) => {
  const newDriver = {... driver};
  delete newDriver[k];
  return newDriver;
}

const destructivelyDeleteFromDriverByKey = (driver, k) => {
  delete driver[k];
  return driver;
} 
