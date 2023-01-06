// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

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
