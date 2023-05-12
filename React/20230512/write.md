# styled Components의 createGlobalStyle()

글로벌 스타일은 `styled-components`가 제공하는 `createGlobalStyle()` 함수를 사용합니다. 

글로벌(전역) 스타일은 모든 컴포넌트에서 공통으로 적용되는 스타일을 말합니다. 예를 들어, 웹 페이지의 배경색이나 글꼴 설정 등은 모든 컴포넌트에서 공통으로 사용되는 스타일이므로 전역 스타일로 관리하는 것이 효율적입니다.

**`createGlobalStyle`** 함수를 사용하면 CSS 파일을 작성하지 않고도 전역 스타일을 손쉽게 생성할 수 있습니다.

먼저 `crateGlobalStyle()` 함수를 사용하여 전역 스타일 컴포넌트를 생성합니다.  `App.js`(현재 최상위 컴포넌트) 상단에 추가해주면 모든 하위 컴포넌트에 스타일이 적용됩니다.

이 글로벌 스타일은 다른 스타일보다 나중에 로딩이 되어 같은 가중치라면 기본적으로 우선순위가 높다는 특징이 있습니다.
---

가상돔끼리 비교하는 과정에서 두번 렌더링을 하는데
확실한 렌더링을 확인하기 위해서는 새로고침을 해야한다

---

# 문자열 리터럴  

자바스크립트 표현식을 기준으로 자른다
배열의 인자로 들어가 저장이되고 
문자열 리터럴을 함수 호출의 인자로 전달하여 해당 문자열을 가공하는 기능입니다. 이때 함수는 문자열 리터럴을 $표현식을 기준으로 나누어 각 부분을 배열의 요소로 전달받아, 이를 이용해 최종적인 문자열을 반환합니다

```js
function 인사(문구, 이름, 나이){
    // console.log(문구)
    console.log(문구, 이름, 나이)
    return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
}

const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`
```

---

# reset / normalize

reset
은 모든 요소에 대해 스타일을 다시 정의해야 하지만, 
normalize
은 브라우저마다 기본적으로 적용되는 스타일을 유지하면서, 일관된 스타일을 적용할 수 있습니다. 또한, 
reset
은 초기화된 스타일을 기반으로 새로운 스타일을 작성해야 하지만, 
normalize
은 초기화된 스타일을 기반으로 새로운 스타일을 작성하지 않아도 됩니다.

---

# styled Components 장점

styled Components 가 난수화해서 넣을 수 있음
클래스이름이 겹칠일이 없고 스타일이름을 고민하지 않아도 된다

하나의 jsx 파일에서 관리할 수가 있다
다른 컴포넌트에서 같은 요소가 렌더링 된다고해도 영향을 미치지 않음

```jsx
const App = () => {
	return (
		<ContentDiv>
            <ContentH2>Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
            <Hello/>
        </ContentDiv>
	);
};

function Hello(){
  return <h2>hello world</h2>
}

컴포넌트이기때문에 props전달이 가능

```

# module.css

리액트에서 자체적으로 지원하는 문법

module.css를 사용할 때 주의할 점은 적용하고자 하는 컴포넌트 이름과 반드시 일치시켜줘야합니다.예를들어 Detail.jsx 파일에만 적용해주고 싶은 module.css의 파일명은 Detail.module.css여야합니다.


---

# 실무에선 모달작업을 바로 할수도

---

# BrowserRouter 컴포넌트 

UI와 URL을 연결합니다. 마치 SSR과 같이 URL을 사용할 수 있게합니다. 
즉, 검색엔진 최적화에 도움이 된다
 
서버의 주소 
경로를 통해 요청을 할 수 있다
서버 컴퓨터안에 '' 라는 서버 경로로 이동하라

HTML 파일이 '' 안에 있다는 말과 비슷하게 생각하면됨
 
`조건부렌더링`은 대상을 클릭했을때 클릭한 대상에따라 다른 화면을 보여준다

정보를 토대로 정보만 보여주면 된다

`#` 은 사이트 외부가 아닌 내부에서 탐색하기위해 사용되는 것이다
검색엔진 최적화를 달성하지 못했다

---

# <BrowserRouter vs HashRouter>

둘 모두 리엑트가 URL주소에 따라 구성 요소를 매칭하여 렌더링 하기 위한 방법들로 아래와 같은 차이를 볼 수 있습니다.

BrowserRouter는 페이지를 라우팅할 때 실제로 해당 URL에 html 파일이 존재하는것은 아니지만 URL을 통해 마치 서버의 폴더를 이동하는것 처럼 보여줍니다. www.myApp.com/pages/home/index.html

이는 SPA임에도 불구하고 마치 SSR처럼 보여지기 때문에 검색엔진에서 로봇으로 웹사이트를 탐색할 때 크롤링이 가능합니다.

또한 JS의 History API ([https://developer.mozilla.org/en-US/docs/Web/API/History_API](https://developer.mozilla.org/en-US/docs/Web/API/History_API))를 사용하기 때문에 **BrowserRouter 는 IE 9이하는 지원하지 않습니다.**

HashRouter 는 URL주소에 #값을 넣어 표시합니다. 주소상의 #은 fragment identifier 라 불리며 컨텐츠 안에서의 특정한 위치를 나타냅니다. (대표적으로 내부링크를 예로 들 수 있습니다.) 이는 서버의 폴더구조를 이동하는것 과는 전혀 다른 모습이기 때문에 로봇을 통한 크롤링이 불가능해지고 결국 SEO에 악영향을 미칩니다.

하지만 HashRouter는 레거시 브라우저에서도 작동이 가능합니다.

---

# 세션

세션(Session)은 서버 측에서 클라이언트의 상태를 유지하기 위한 기술로, 클라이언트가 서버에 요청을 보내면 서버는 클라이언트에게 고유한 세션 ID를 발급하고, 이를 사용하여 클라이언트의 상태를 유지합니다. 따라서, 
History API
와 세션은 서로 직접적인 연관이 없습니다.

하지만, 
History API
를 사용하여 클라이언트 사이드 라우팅을 구현하면, 서버에 요청을 보내지 않고도 페이지 전환을 처리할 수 있기 때문에, 세션을 사용하지 않고도 클라이언트의 상태를 유지할 수 있습니다. 이는 세션을 사용하지 않는 SPA(Single Page Application)에서 매우 유용하게 사용됩니다.

---

# Link 컴포넌트

**`Link`**는 React Router에서 제공하는 컴포넌트 중 하나로, 클릭하면 애플리케이션 내에서 새로운 경로로 이동하는 링크를 생성하는 컴포넌트입니다.

💡 link는 주소만 바꿀 뿐, 페이지를 새로 불러오진 않습니다.

---

? 뒤에서부터 쿼리스트링
서버한테 요청을 보낼 수 있음

Link to 
쿼리스트링을 날려서 

---

# **a 태그를 쓰지않고 link를 사용하는 이유가 뭘까요?**

a 태그는 클릭했을 경우, href에 설정해준 경로 이동과 동시에 페이지를 새로 불러오기 때문에 페이지가 새로고침이 됩니다. 

react-router-dom이 제공하는 Link의 경우 `HTML5 History API`를 사용해서 브라우저의 주소를 바꿔주는 것이기 때문에 페이지를 불러오지 않고 dom만 조작해서 페이지를 보여줍니다

---

# 파라미터 설정

**`/:id`**는 동적 라우팅을 위해 사용되는 URL 패턴입니다. 

**`useLocation`** 훅은 현재 애플리케이션의 경로(location) 정보를 가져오는 데 사용됩니다. 이 훅을 사용하면 현재 URL의 경로, 쿼리 파라미터, 해시 등을 포함하는 객체를 반환하여 관련된 정보를 파악할 수 있게 됩니다.

이 두 가지 정보를 결합하여 같은 컴포넌트를 불러와도 다른 모습으로 변경하는것이 가능합니다. 마치 컴포넌트에 props 를 전달하여 변화를 주는것과 같다고 보시면 됩니다.