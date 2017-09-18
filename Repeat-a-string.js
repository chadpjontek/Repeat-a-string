// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
  var newStr ="";
  if (num > 0) {
    for (var i = 0; i < num; i++){
      newStr += str;
    }
  } else {
    newStr = "";
  }  
  return newStr;
}
//example
repeatStringNumTimes("abc123", 3);