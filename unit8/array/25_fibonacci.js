function fibonacci(num) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];//피보나치 수열 값 담기

  for(i = 0; i<= num; i++){
  if(i>1){
  result[i] = result[i-1] + result[i-2]// 1,2번째 값을 제외한  N번째 값은  = N-1번째 값 + N-2번째 값
  }else { //1번째 =1 2번째 = 2
      result[i]  = i;
    }
  }

  return result;

}