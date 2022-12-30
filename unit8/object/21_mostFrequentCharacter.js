function mostFrequentCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    let noBlank  = str.replace(/ /g,"");
    let result = {};
    let max = 0;
    let max_letter = "";
    for(let i of noBlank){
      Object.keys(result).includes(i) ? result[i] +=1 : result[i] = 1;

      for(let key  in result){
        if(max <result[key]){
            max = result[key];
            max_letter = key;
        }
      }
      }
      return max_letter;
  
  }
  let output = mostFrequentCharacter('apples not oranges');
console.log(output); // --> 'p'