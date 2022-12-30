function extend(obj1, obj2) {
    // TODO: 여기에 코드를 작성합니다.
    let obj1Keys = Object.keys(obj1);
    for(let key in obj2){
     !obj1Keys.includes(key) ? obj1[key] = obj2[key]: 0;
    }
  }