# className

React에서는 JSX를 사용하여 UI를 작성합니다. JSX는 HTML과 유사한 구문을 사용하지만, JavaScript 코드로 컴파일됩니다. 따라서 class 속성을 사용할 때, JavaScript에서 예약어로 사용되는 "class" 대신 "className"을 사용해야 합니다.

이는 JSX가 JavaScript 코드로 컴파일될 때, class 속성이 JavaScript의 class 키워드와 혼동되지 않도록 하기 위함입니다. 따라서, React에서는 class 대신 className을 사용하여 CSS 클래스를 지정합니다.

class"는 JavaScript의 예약어 중 하나입니다. 예약어는 JavaScript에서 특별한 의미를 가지는 단어로, 변수나 함수 이름 등으로 사용할 수 없습니다. 따라서, JSX에서 HTML과 유사한 구문을 사용할 때, class 속성을 사용하면 JavaScript에서 예약어로 인식되어 오류가 발생할 수 있습니다.

그래서 React에서는 class 대신 className을 사용하여 CSS 클래스를 지정합니다. 이렇게 하면, JSX가 JavaScript 코드로 컴파일될 때, class 속성이 JavaScript의 class 키워드와 혼동되지 않도록 하여 오류를 방지할 수 있습니다.

---

# Fragment

Fragements 를 사용하면 <div> 와 같은 별도의 노드를 추가하지 않고 여러 개의 자식을 감싸줄 수 있습니다. 

경량화된 documentFragment 메서드를 사용하는것과 비슷

Fragment 라는 키워드 대신 <> </> 를 사용할 수도 있습니다. 이때는 fragment를 사용하기 위해 React모듈을 따로 추가할 필요가 없습니다.

<React.Fragment className="my-fragment"> 처럼 속성을 넣는 것은 알맞지 않다

React Fragments 요소는 화면에 랜더링 되지 않기 때문에 스타일과 관련된 속성을 사용하는것은 무의미하며 보통 리스트 아이템의 key 값을 설정할 때 많이 사용합니다. 

단축 속성에서는 props를 사용할 수 없음
<className="my-fragment" > </> (x)

---

# 구조분해할당

구조 분해 할당(destructuring assignment)은 ES6에서 도입된 문법 중 하나입니다. 이 문법은 객체나 배열에서 필요한 값만 추출하여 변수에 할당하는 방법입니다.

객체에서 구조 분해 할당을 사용하면, 객체의 속성을 변수로 추출할 수 있습니다. 예를 들어, 다음과 같은 객체가 있다고 가정해봅시다.

```js
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};
```

이 객체에서 name과 age 속성을 추출하여 변수로 할당하려면, 다음과 같이 구조 분해 할당을 사용할 수 있습니다.

```js
const { name, age } = person;
console.log(name); // 'John'
console.log(age); // 30
```

---

# 전개구문

전개구문하면 안에 있는 배열의 쉼표를 없애도록 처리

---

# 리액트의 가상돔에 변화를 주는 방법

변수의 값이 바뀌어도 페이지는 랜더링하지 않기 때문인데요. 모든 변수가 변할때마다 컴포넌트를 업데이트 한다면 많은 리소스가 낭비될 것입니다. 그래서 특정 변수를 지정하여 그 변수가 변할 때마다 컴포넌트를 업데이트하라는 명령을 내려주어야 합니다.

React의 elements 즉, 가상돔은 자바스크립트 객체 형태입니다. 이 elements는 불변하는(immutable)특징을 가지고 있습니다. 따라서 엄밀하게 따진다면 업데이트되는 것은 컴포넌트이고 가상돔은 교체된다고 표현하는 것이 맞습니다.

컴포넌트의 변화를 감지하고 변경사항을 화면에 반영하는 것은 많은 자원이 소모되는 작업입니다. 때문에 리액트는 컴포넌트를 업데이트 해야할 때를 결정하는 특별한 메커니즘을 가지고 있습니다.

이를 ‘재조정(reconciliation)’을 거친다고 표현합니다.   

https://ko.legacy.reactjs.org/docs/reconciliation.html

🧐 재조정(**reconciliation)
reconciliation**은 ****양자를 서로 비교 대조해서 차이를 없애고 같은 값이 되도록 하는 과정을 의미하는 회 계 용어입니다. 혹은 종교에서의 고해성사를 의미하기도 합니다.

React의 재조정은 Virtual DOM을 사용하여 React 컴포넌트 트리를 비교하고 최적화하는 프로세스입니다. React는 컴포넌트가 업데이트될 때 마다 Virtual DOM을 사용하여 이전 버전의 컴포넌트 트리와 새 버전의 컴포넌트 트리를 비교합니다.

reconciliation 프로세스는 이전 버전의 컴포넌트 트리와 새 버전의 컴포넌트 트리를 비교하여 다음과 같은 작업을 수행합니다.

1. 컴포넌트의 타입이 같은지 비교합니다.
2. 컴포넌트의 속성(prop)이 변경되었는지 비교합니다.
3. 컴포넌트의 자식 요소가 변경되었는지 비교합니다.

이러한 비교 작업을 통해 React는 변경된 부분만 업데이트하고, 나머지 부분은 그대로 유지합니다. 이렇게 하면 React는 DOM 조작을 최소화하고 더 빠르고 효율적인 애플리케이션을 만들 수 있습니다.

정리하자면, reconciliation 프로세스를 통해 React는 컴포넌트를 업데이트하여 즉각적으로 반응하는 사용자 인터페이스를 만들 수 있습니다. 이것이 바로 React가 다른 프론트엔드 라이브러리와 차별화되는 중요한 기능 중 하나입니다.

---

# useState

useState는 React 컴포넌트에서 상태를 관리하기 위한 Hook입니다. 컴포넌트의 상태가 변경될 때마다 컴포넌트가 다시 렌더링되어 화면이 업데이트됩니다.

reconciliation은 React가 Virtual DOM을 사용하여 컴포넌트의 변경 사항을 효율적으로 감지하고 업데이트하는 과정입니다. React는 변경된 부분만 실제 DOM에 반영하여 성능을 최적화합니다.

useState와 reconciliation은 서로 밀접한 관련이 있습니다. useState를 사용하여 컴포넌트의 상태를 변경하면, React는 변경된 상태를 Virtual DOM에 반영합니다. 그리고 이전 Virtual DOM과 새로운 Virtual DOM을 비교하여 변경된 부분만 실제 DOM에 반영합니다.

리액트는 어떤 상태(state)가 변경되면 그 부분을 다시 랜더링하는 특징이 있기 때문에 화면에서 계속 바뀌는 부분은 대부분 state를 사용합니다. 또한 다시 랜더링 할 필요가 없는 데이터는 useState를 사용하지 않음으로 자원을 아낄 수 있습니다.

---

# 신뢰 가능한 단일 출처의 원칙

React state를 “신뢰 가능한 단일 출처 (single source of truth)“로 만들면, React 컴포넌트에서 폼에 발생하는 사용자 입력값을 제어할 수 있습니다. 이를 통해, React 컴포넌트는 폼 입력값을 안전하게 처리할 수 있습니다.

React에서 폼을 다룰 때는 제어 컴포넌트(Controlled Component)를 사용하여 폼 입력값을 React 컴포넌트의 상태(state)로 관리합니다. 이를 통해, 폼 입력값을 제어하고 유효성 검사를 수행할 수 있습니다.

HTML에서 <input>, <textarea>, <select>와 같은 폼 엘리먼트는 일반적으로 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트합니다. React에서는 변경할 수 있는 state가 일반적으로 컴포넌트의 state 속성에 유지되며 setState()에 의해 업데이트됩니다.

우리는 React state를 “신뢰 가능한 단일 출처 (single source of truth)“로 만들어 두 요소를 결합할 수 있습니다. 그러면 폼을 렌더링하는 React 컴포넌트는 폼에 발생하는 사용자 입력값을 제어합니다. 이러한 방식으로 React에 의해 값이 제어되는 입력 폼 엘리먼트를 “제어 컴포넌트 (controlled component)“라고 합니다.

---

# 웹

웹이라는 것은 모든 회사에서 신경을 쓰는데
웹이 회사의 이익에 직접적으로 관련이 있는 회사가 있고 없는 곳이 있다
중요한 곳을 예로들면 쿠팡이나 무신사
이런곳은 웹개발에대한 처우가 좋다
특히나 게임업계가 웹에 대한 중요성이 커서 
많이 뽑는다고 함
넥슨 같은 경우 많은 웹개발자를 뽑는데 생각보다 문턱이 높지않다
게임 회사의 경우 웹개발을 개발이 아닌 마케팅의 영역으로 보는 경우가 있음
따라서 처우가 안좋을 수도 있음
게임쪽의 웹개발자는 좀 고단함

---

# 자식에서 부모로 데이터를 보내는 법(상태끌어올리기)

컴포넌트간에 통신이 불가능하기 때문에 부모의 부모로가서 다시 상태창을 봐야

자식에서 부모컴포넌트로 직접적으로 props같이
데이터를 보내는 법이 불가능하지만

App의 함수 상태를 바꾸는 값을 자식에게 전달하고 자식이 부모의 상태를 변하게 할 수는 있음

---

Prop Drilling은 React에서 컴포넌트 간 데이터를 전달할 때, 중간에 있는 컴포넌트를 통해 데이터를 전달하는 방법입니다. 이 방법은 데이터를 전달하는 과정에서 중간에 있는 컴포넌트가 많아지면 코드가 복잡해지고 유지보수가 어려워질 수 있습니다.

반면에, 상태 끌어올리기(State Lifting)는 React에서 컴포넌트 간 데이터를 전달할 때, 공통 상위 컴포넌트의 상태로 데이터를 끌어올리는 방법입니다. 이 방법은 데이터를 전달하는 과정에서 중간에 있는 컴포넌트를 건너뛸 수 있으므로, Prop Drilling보다 코드가 간결해지고 유지보수가 용이해집니다.

---

Prop Drilling의 예시:

```jsx
Copy codefunction Grandparent() {
  const [name, setName] = useState("John");

  return (
    <Parent name={name} setName={setName} />
  );
}

function Parent({ name, setName }) {
  return (
    <Child name={name} setName={setName} />
  );
}

function Child({ name, setName }) {
  return (
    <div>
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
```
위 코드에서는 
Grandparent
 컴포넌트에서 
name
 상태를 정의하고, 
Parent
 컴포넌트에 
name
 상태와 
setName
 함수를 전달합니다. 
Parent
 컴포넌트는 
Child
 컴포넌트에 
name
 상태와 
setName
 함수를 전달합니다. 
Child
 컴포넌트에서는 
name
 상태를 출력하고, 
input
 요소에서 
setName
 함수를 사용하여 
name
 상태를 업데이트합니다.

이 예시에서는 
Parent
 컴포넌트가 중간에 위치하여, 
name
 상태와 
setName
 함수를 전달하는 과정에서 Prop Drilling이 발생합니다.

---

상태 끌어올리기(State Lifting)의 예시:

```jsx
Copy codefunction Grandparent() {
  const [name, setName] = useState("John");

  return (
    <div>
      <p>Name: {name}</p>
      <Parent setName={setName} />
    </div>
  );
}

function Parent({ setName }) {
  return (
    <Child setName={setName} />
  );
}

function Child({ setName }) {
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => setName(email)}>Set Name</button>
    </div>
  );
}
```
위 코드에서는 
Grandparent
 컴포넌트에서 
name
 상태를 정의하고, 
Parent
 컴포넌트에 
setName
 함수를 전달합니다. 
Parent
 컴포넌트는 
Child
 컴포넌트에 
setName
 함수를 전달합니다. 
Child
 컴포넌트에서는 
email
 상태를 정의하고, 
input
 요소에서 
email
 상태를 업데이트합니다. 
button
 요소에서는 
setName
 함수를 사용하여 
email
 상태를 
name
 상태로 업데이트합니다.