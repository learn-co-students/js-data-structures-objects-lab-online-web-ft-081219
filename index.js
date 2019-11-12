// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue (driver, key, value) {
    const new_driver = Object.assign({},driver, {[key]: value})
   
    return new_driver
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}
function   deleteFromDriverByKey(driver, key){
    const copy = Object.assign({},driver)
    delete copy[key]
    return copy
}

function    destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}