https://paullabworkspace.notion.site/1-Redux-eef3be11eacf4ec1b5495b6ca3c4975d

# Redux

행운의 여신의 별명을 리덕스라고 했다고한다

상태를 가지는 컨테이너이다
자바스크립트 앱을 위한 예측 가능한 상태 컨테이너이다
예측이 가능하다는건관리가 편리하다는 얘기
객체를 가지는 공간이 있고 이것을 안전하게 관리하는 라이브러리이다

리덕스는 리액트만을 위한 라이브러리는 아니다
React 뿐만이 아니라 Vue 와도 잘 결합이 됨

redux는 만들어진지 꽤 오래 됐고 요즘에는 React의 새로운 상태관리인 Recoil이라는 게 존재함
하지만 아직 redux가 훨씬 많은 기능이 있음

리덕스는 시간여행이 가능함

---

# Object.assign

새로운 객체를 만들어주는 문법

Object.assign() 메서드는 출처 객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣습니다. 그 후 대상 객체를 반환합니다.

객체를 새로 생성해서 기존의 객체를 대체하기 때문에
리액트의 재조정reconciliation과 같은 개념

## 배열이나 객체를 불변하는 객체처럼 다루기

배열이나 객체는 불변하는 객체처럼 다루는것이 데이터의 변화를 추적하는데 용이합니다.
만약 배열 데이터를 수정해야 한다면, 기존에 사용했던 원본 데이터는 그대로 두고 새로운 배열을 만들어 사용하는 습관을 들이길 바랍니다.

---

# action 

state를 변경시켜준다

---

# createStore

컨테이너 생성

---

# store.getState();

컨테이너 사용

---

# reducer

상태를 관리

---

# Render 

화면에 그려주는 애들을 Render 라고 함
그려지는 역할을 하는 함수들을 Render 라고 칭함

---

# dispatch

변경하고 싶은 값을 reducer에 전달하기 위해 필요한 것

---

# subscribe

store에 있는 상태를 구독하겠다는 뜻

---

# React와 Redux

- React는 사용자 인터페이스를 위한 JS 라이브러리.
- Redux는 데이터를 엄격하게,(미리 만들어둔 함수를 통해서만 데이터를 가져오거나 수정할 수 있어야만
동작하도록 만들어져있음) 통합해서 관리함으로 예측 가능하게 데이터를 관리하기 위함.

공통점 : 복잡한 프로젝트에서 복잡도를 낮춰줌

React 에서 props 드릴링을 피하기 위해 context API를 사용했었는데
context API는 여러개를 생성할 수 있었음

Redux는 상태를 저장할 수 있는 공간이 store 하나 밖에 없음

## 데이터는 어떻게 변경될까요?

React에서 상태 값을 바꿀 때는 `useState`가 제공하는 `setState`를 사용하였습니다. 하지만 앞으로 사용할 redux에서는 state 자체에 접근하는 것도 직접 수정하는 것도 불가능합니다. 대신 `Reducer` 함수에게 수정을 요청합니다.

React useContext는 상태를 관리하지 않습니다. 상태는 Context의 값을 꺼내서 사용하는 useState가 관리하죠. 또한 useContext의 목적은 React의 prop-drilling을 피하는 것입니다. 하지만 프로젝트가 클수록 관리해야 할 값들은 많아지고 Provider를 더 많이 사용하게 되면서 provider안에 provider로 깊은 중첩 관계가 될 수 있습니다. 반면에 리덕스는 데이터를 저장함과 동시에 상태를 관리하며, 단일한 저장소를 사용하기 때문에 여러개의 store가 중첩되는 경우도 없습니다.
즉 redux는 provider 하나로 관리가 가능

Redux는 React와는 다른 라이브러리입니다. Vue에서도 사용할 수 있고 순수한 JS에서도 사용할 수 있습니다. 어떠한 프레임워크 환경에서 개발하든 JS를 사용하는 프로젝트라면 거대한 규모의 프로젝트 상태 관리를 보다 손쉽게 관리하도록 도와줍니다.

Redux를 사용하지 않고 ContextAPI를 사용했는지에 대한 대답에
Redux를 써야할만큼 다뤄야할 데이터가 많지도 않고 구조가 간단하기 때문이라고
얘기할 수 있다

큰 프로젝트가 아니면 Redux를 사용할지 고려해볼 필요가 있다

---

손님이 커피(state)가 필요해서
점원(action)한테 주문을하고
dispatch는 reducer에게 전달하고
reducer는 상태값을 받아서 수정을 하고
render에서 상태값을 받아오려면 getState를 사용하고...

- (action → dispatch → reducer → state변경 → subscribe → render → getState → state) : 비유로는 설명이 어려워 해당 프로세스는 code의 flow대로 설명하도록 하겠습니다.
    1. dispatch가 일어납니다.
    2. subscribe으로 해당 action이 들어옵니다.
    3. state를 수정합니다.
    4. subscribe을 통하여 값이 subscribe에 등록된 모든 요소에 state가 수정되었음을 전파합니다.
    5. render에서 getState를 통해 값을 새로 받아옵니다.
    6. 다시 render합니다.

---

action 의 type

action의 type을 대문자로 작성하는 이유는
암묵적인 룰 때문에

---

redux 는 store 라는 저장소(컨테이너)를 갖는다
그것을 갖는 메서드가 createStore이고
그 메서드를 이용해서 store를 만드는 데 reducer가 필요하다
reducer을 통해 createStore 안에 state를 변경할 수 있다  
reducer는 두가지 인자를 전달 받는다
첫번째 인자인 state는 이전 state로 변경할 state를 말한다
두번째 인자인 action은 state를 어떻게 변경할지 그 내용에 대한 것이 action 안에 들어있다

그리고 action을 reducer에 전달할때 dispatch를 사용한다
그 action에는 type이 있어야하고 type에 따라 어떻게 state를 수정할지 분기처리를 해줘야하고

render 함수들이 이 내용을 지켜보고 있는데 
이 render 함수들이 state를 사용하려면 getState() 메서드를 통해 값을 가져올 수 있다
그리고 state안에 값이 바뀌게 되면 자동으로 화면이 업데이트 된다

===

# 리듀서는 여러개일 수 있습니다.

실무에서는 여러개의 리듀서를 합치는 작업을 통해 단일 리듀서가 비대해지는 것을 방지합니다. 대부분의 리듀서는 파일 분기를 통해 관리합니다.

---

하나의 공간만 처리할 수 있지만 
그 공간안에 여러개의 

---

reducer 파일에는 action 만을을 정리해놓음

---

면접 질문 알아보기

피자벌레

JS보충

--- 

라이브러리 안에 라이브러리

# redux toolkit

리덕스 공식 팀에서 만든 툴입니다. 리덕스 관련된 툴이 묶여있습니다. 예를 들어 앞에서 설치했었던 redux-devtools-extension 등이 tooltik 안에 모두 내장되어 있습니다. (우리가 배우진 않았지만 thunk(썽크), immer(이머) 등도 내장되어 있습니다.)

아직 나온지 얼마 안된 툴킷이라 우선 redux로 다루는 방법을 기본적으로 탄탄하게 익히자
