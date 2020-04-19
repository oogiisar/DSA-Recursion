const reverseString = function(string) {
    if(string === ''){
      return '';
    }
  
    return reverseString(string.slice(1)) + string.charAt(0)
  }
  console.log(reverseString('banana'))