function slasher(arr, howMany) {
  // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}