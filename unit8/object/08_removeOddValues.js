function removeOddValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for(let key in obj){
      if(obj[key]%2===1&& typeof(obj[key])==='number'){
        delete obj[key];
      }
    }
  }
  