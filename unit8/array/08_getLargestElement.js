function getLargestElement(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let max = arr[0];
  for(let i = 1;i < arr.length;i++){
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}