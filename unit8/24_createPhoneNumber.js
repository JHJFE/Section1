function createPhoneNumber(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = "";
  let code = "(010)"
  arr.splice(-4,0,"-");

  if(arr.length===12){ // 11자리 일때 (,),- 추가
    arr.splice(0,0,"(");
    arr.splice(4,0,")");
    result = arr.join("");
    return result;

  }
    result = code + arr.join("");
    return result;
  
}