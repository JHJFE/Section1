function select(arr, obj) {
    // TODO: 여기에 코드를 작성합니다.
    let result = {};
    for(let key in obj){
      if(arr.includes(key)){
        result[key] = obj[key];
      }
    }
    return result;
  }