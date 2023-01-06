![](https://velog.velcdn.com/images/ghwo9611/post/9ab1b641-2933-456a-b3df-733f698b7a09/image.gif)
## 기능 구현 코드
```javascript
let elInputUsername = document.querySelector('#username');
let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');
let elPassword = document.querySelector('#password');
let elPasswordretype = document.querySelector('#password-retype');
let elMissmatchMessage = document.querySelector('.mismatch-message');
let elonlyEngandNum = document.querySelector('.onlyNumberAndEnglish-message');
let elNotStrongpassword = document.querySelector('.notStrongPassword-message');
let elStrongpassword = document.querySelector('.strongPassword-message');

elInputUsername.onkeyup = function(){ // 아이디(#username)이 입력될 때
  if(isMoreThan4Length(elInputUsername.value)){ // 아이디(#username)의 길이가 4이상인가
    // 참
    elSuccessMessage.classList.remove('hide'); // display:none이 담긴 클래스를 삭제함으로  '사용할 수 있는 아이디 입니다' 띄우기 
    elFailureMessage.classList.add('hide'); // display:none이 담긴 클래스를 추가함으로 '아이디는 네 글자 이상이어야 합니다' 가리기
  }else{
    // 거짓
    elSuccessMessage.classList.add('hide');// display:none이 담긴 클래스를 추가함으로  '사용할 수 있는 아이디 입니다' 가리기
    elFailureMessage.classList.remove('hide');// display:none이 담긴 클래스를 삭제함으로  '사용할 수 있는 아이디 입니다' 띄우기 
  }
}
elPasswordretype.onkeyup = function(){ // 비밀번호재확인(passwordretype)이 입력될 때
  if(isMatch(elPassword.value,elPasswordretype.value)){
    elMissmatchMessage.classList.add('hide');
  }else{
    elMissmatchMessage.classList.remove('hide');
  }
}
elPassword.onkeyup = function(){ // 비번 입력될 때
  let pw = elPassword.value;
  if(onlyNumberAndEnglish(pw)){
    elonlyEngandNum.classList.add('hide'); // 숫자와 영어로만 조합되었으면 경고문 제거
  }else{
    elonlyEngandNum.classList.remove('hide'); // 아니면 경고문 생성
  }
  if(strongPassword(pw)){
    elStrongpassword.classList.remove('hide'); // 숫자,문자, 특수문자가 모두 사용되면 강하다 생성, 강하지 않다 제거
    elNotStrongpassword.classList.add('hide');
  }else{
    elStrongpassword.classList.add('hide');
    elNotStrongpassword.classList.remove('hide'); // 아니면 강하지 않다 생성, 강하다 제거
  }
}
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

function isMoreThan4Length(value) {
    return value.length >= 4
}

function isMatch (password1, password2) {
  console.log(password1);
  console.log(password1.value);
  return password1 === password2;
}

```
## 체크포인트
- .onkeyup을 사용해 해당 블록에서 키보드가 눌리면 반응하는 매소드 사용법을 익힘
- .querySelactor을 통해 원하는 요소를 불러오는 방법을 익힘
- 위의 기능과 함수를 조합해 회원가입 창에서 사용되는 기본적인 기능을 구현
- .test와 정규식을 활용해 문자열 검사하는 기능을 익힘

## 후기
- css, html 그리고 Dom이 비교적 생소했던 나에게는 기본 개념을 단단히 하고 응용해 구현하는 연습을 할 수 있는 과제였음
- 하지만 비교적 과제의 양이 적어 추가적으로 css를 이미지와 이미지를 활용해 꾸밈
- 해당 과제는 본격적인 실습을 위한 기본과정으로 생각하고 이를 바탕으로 다른 요소도 다루는 연습을 할 예정