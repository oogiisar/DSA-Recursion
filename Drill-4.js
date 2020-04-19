function triangleNumber(n){
    if(n === 1){
      return 1;
    }
    return n + triangleNumber(n-1)
  
  }
  console.log(triangleNumber(8))