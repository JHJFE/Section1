const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

let op ="";

function calculate(n1, operator, n2) {
  let result = 0;

  if (operator === "+"){
    result = Number(n1) + Number(n2);
  } else if(operator === "*"){
    result = Number(n1) * Number(n2);
  } else if(operator === "/"){
    result = Number(n1) /Number(n2);
  } else if(operator === "-"){
    result = Number(n1) - Number(n2);
  }
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.


  


  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
  
     
    if (action === 'number'){ 
      // 1. 첫번째 숫자다
      
      if (firstOperend.textContent === "0" && op === ''){
        firstOperend.textContent = buttonContent;
        
      } else if (firstOperend.textContent !== "0" && op === ''){
    
        firstOperend.textContent = firstOperend.textContent + buttonContent;
      } else if(secondOperend.textContent ==="0" && op !== ''){
        secondOperend.textContent = buttonContent;
      }else{
        secondOperend.textContent = secondOperend.textContent + buttonContent;
      }

      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
        console.log('숫자 ' + buttonContent + ' 버튼');
        
    }// firstOperend.textContent='number';//  ?
        
    

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      op = buttonContent;
      
      operator.textContent=buttonContent;
      console.log(op);
    }

    if (action === 'decimal') {
    
      if(firstOperend.textContent.includes('.')=== true){
      }else if(op === ''){
        firstOperend.textContent = firstOperend.textContent + buttonContent;
      } 
      if(secondOperend.textContent.includes('.')=== true){
      }else if(op !== ''){
        secondOperend.textContent = secondOperend.textContent + buttonContent;
      }
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      firstOperend.textContent="0";
      operator.textContent="+";
      op = '';
      secondOperend.textContent="0";
      calculatedResult.textContent = "0";
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      calculatedResult.textContent =  calculate(firstOperend.textContent, op, secondOperend.textContent);
      op="";
      
    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum ="", operatorForAdvanced, previousKey="", previousNum,check = 0;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      console.log(display.textContent);
      if(previousKey === "decimal"){
        display.textContent+= buttonContent;

      }else if(previousKey==="operator"){//입력중인 수가 1번째 수인지 2번째 수인지 판별 
        display.textContent = buttonContent;//새롭게 2번째 수 받기
        previousKey = "number";
        check=1;
        // && display.textContent.includes("0.")=== false
        console.log("1")
      }else if(display.textContent==="0"){// 첫번째 수일 경우 첫번째 수받기
        display.textContent=buttonContent;

       
        //2번째 수일경우 앞에 기존의 수를 저장
      
      }else{// 첫번째 수 두번째 수 누적받아오기
        
        display.textContent=display.textContent + buttonContent;
         //2번째 수일경우 앞에 기존의 수를 저장
      }
    }

    if (action === 'operator') {//연산자 입력 확인
      if(previousKey === "number" && check ===1){
        
        display.textContent = calculate(firstNum,operatorForAdvanced,display.textContent);
        firstNum = display.textContent;
        previousKey = "operator";
        operatorForAdvanced = buttonContent;
      }else{
      previousKey = 'operator';
      firstNum = display.textContent;
      operatorForAdvanced = buttonContent;
      }
      
      
    }
    if (action === 'decimal') {// 소수점이 이전에 입력 되지 않았으면 입력
      if(previousKey==="operator" ){
        display.textContent = "0.";
        previousKey = "decimal";
      }else if(display.textContent.includes(".")===false){
        display.textContent = display.textContent + ".";
      }
    }
    if (action === 'clear') {// 처음으로 초기화
      previousKey = "";
      display.textContent = "0";
      firstNum = "";
      check=0;
    }
    if (action === 'calculate') {//입력된 fristNum operator 두번째 수 계산후 출력
      
      if(firstNum === ""){
        
      }else if(previousKey !== "calculate"){
        
        console.log(firstNum);
        
        previousNum=display.textContent;
        display.textContent = calculate(firstNum,operatorForAdvanced,display.textContent);
        previousKey='calculate';

      }else{
        display.textContent = calculate(display.textContent,operatorForAdvanced,previousNum);
        console.log(previousNum);
        console.log(display.textContent);
      }
    }
  }

});
