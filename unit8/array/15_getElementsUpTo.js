function getElementsUpTo(arr, n) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.length <= n){
    return []
  }
  return arr.slice(0,n);
}