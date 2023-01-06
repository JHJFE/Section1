# 체크 포인트

## Dom 이란
: Document Object Model이라는 뜻으로 HTML에 담긴 객체(태그)에 접근-인식하는 모델(방식)

## Dom의 구조
: tree 형식의 구조를 따름
![](https://velog.velcdn.com/images/ghwo9611/post/c02317ae-ef39-443f-ab7c-7872826fa691/image.png)
(예시를 참고하며 만든 예시)

## Dom의 기본 다루기

### 생성(Create)
![](https://velog.velcdn.com/images/ghwo9611/post/ef906f5a-2888-40db-8e7e-8951cfcd696e/image.png)
.creatElement를 통해 요소를 생성할 수 있지만 위의 상태에서는 트리에 추가(append)된 상태는 아님

### 추가(Append)
- ![](https://velog.velcdn.com/images/ghwo9611/post/9ab1d6cc-da45-4443-bd60-7a78981b5032/image.png)
- ![](https://velog.velcdn.com/images/ghwo9611/post/cbc0c2bc-5ca8-49c9-bbca-72dc9a653b37/image.png)부모.append를 통해 생성한 요소를 트리에 추가했지만, id=container인 div에 들어가지는 못한 상태

- ![](https://velog.velcdn.com/images/ghwo9611/post/de8006dd-ed8b-45ab-8cba-e7a59dae8fb3/image.png)target에 tweet을 추가할 부모를 저장하고 해당 위치에 추가하면
- ![](https://velog.velcdn.com/images/ghwo9611/post/2be09e75-d4c2-488a-bacd-f87e58aa0edc/image.png)container에 잘 담긴 것을 확인

### 조회(Read)
- ![](https://velog.velcdn.com/images/ghwo9611/post/29fd7ee5-9890-4d4d-9228-234488299c18/image.png)
클래스 이름이 tweet인 첫 번째 요소를 담음
- ![](https://velog.velcdn.com/images/ghwo9611/post/6faafe9b-fbe0-412d-87dc-458d0817aa1b/image.png)클래스 이름이 tweet인 모든 요소를 담음
이렇게 담은 요소들은 배열처럼 사용할 수 있지만, 사실 배열이 아닌 객체라고 함(Array-like Object 배열처럼 생긴 객체)

- 위에서 container에 넣는 과정에서 부모를 읽는 과정이 자연스럽게 Read부분의 예시가 됨

### 갱신(Update)

- ![](https://velog.velcdn.com/images/ghwo9611/post/5a501438-0567-4aaf-8e34-b20bed01b1d0/image.png)생성한 요소에 문자열 'div' 담기
- ![](https://velog.velcdn.com/images/ghwo9611/post/2bfc21fc-69f0-416c-b27d-e7b3ab38de3e/image.png)생성한 요소에 tweet 클래스 속성 만들어주기
- ![](https://velog.velcdn.com/images/ghwo9611/post/1c1727f7-8c1c-4097-beea-ebfd8cab8c6f/image.png)요소(oneDiv)를 위에서 조회한 부모(target => #container)에 추가하기
- ![](https://velog.velcdn.com/images/ghwo9611/post/bbfd09cb-9e7c-460b-8a6d-99c21aee5373/image.png)잘 들어간 것을 확인 👍

### 삭제(Delete)
- ![](https://velog.velcdn.com/images/ghwo9611/post/34f64a1c-70f8-47cc-8d09-1a850e7a72d9/image.png)remove를 사용하면 해당 변수에 할당되어 있는 요소 삭제
- ![](https://velog.velcdn.com/images/ghwo9611/post/d46eea73-2a84-48bb-898c-fba8178e384d/image.png)innerHTML을 사용하면 편리하게 자식요소를 삭제할 수 있지만 innerHTML을 사용해 텍스트를 사용하는 경우 잠재적인 공격 경로로 사용될 수 있어 사용을 지양
- ![](https://velog.velcdn.com/images/ghwo9611/post/07bf06e6-9f98-4b21-bbff-626a3b37c349/image.png) 해당 방법은 tweet 클래스에 해당하는 요소들 중 tweet 클래스인 요소를 제거하는 동작으로 결과적으로 container의 모든 요소 삭제
- ![](https://velog.velcdn.com/images/ghwo9611/post/c55b1a3a-d579-4a62-8a9f-f243189b702f/image.png)해당 방법 혹은 for문을 사용해 다양한 방법으로 원하는 요소들을 제거 가능


---- 추가로 관련 실습을 진행하고 실습 내용과 관련 후기를 남길 예정 ----
# 후기
- 