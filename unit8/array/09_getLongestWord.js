function getLongestWord(str) {
  // TODO: 여기에 코드를 작성합니다.
let words = str.split(" ");
let max="";
let temp = "";

for(let i = 0 ; i<words.length ;i++){

    temp = words[i];

    if(i === 0 || max.length < temp.length){
        max = temp;
    }
    
  }

  return max;
}
