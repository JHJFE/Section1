function getType(anything) {
    // TODO: 여기에 코드를 작성합니다.
    let type = typeof anything;
    
      if(Array.isArray(anything)){
        return "array";
      }
      if(anything === null){
        return "null";
      }
    
    return type;
  }
  