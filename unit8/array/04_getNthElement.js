function getNthElement(arr, index) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.length === 0)
  {
    return arr[0];
  }
  if(arr.length <=index){
    return "out of index range";
  }
  return arr[index];
}
