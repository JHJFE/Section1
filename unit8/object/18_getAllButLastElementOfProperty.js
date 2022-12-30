function getAllButLastElementOfProperty(obj, key) {
    // TODO: 여기에 코드를 작성합니다.
    
    let result = Array.isArray(obj[key]) ? obj[key].slice(0,-1) : [];
  
    return result;
  }