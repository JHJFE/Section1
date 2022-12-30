function mostFrequentCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    let noBlank  = str.replace(/ /g,"");
    let result = {};
    let max = 0;
    let max_letter = "";
    for(let i of noBlank){
      Object.keys(result).includes(i) ? result[i] +=1 : result[i] = 1;

     if(max <result[i]){
        max = result[i];
        max_letter = i;
      }
    }
    return result;
  
  }
  let output = mostFrequentCharacter('apples not oranges');
  console.log(output); // --> 'p'
  