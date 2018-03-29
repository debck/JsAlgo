function binaryAgent(str) {
  biString = str.split(' ');
  uniString = [];

/*using the radix (or base) parameter in parseInt, we can convert the binary
  number to a decimal number while simultaneously converting to a char*/

  for(i=0;i < biString.length;i++){
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  
  // we then simply join the string
  return uniString.join('');
}