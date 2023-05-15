# useRef();

1. 렌더링과 상관없이 값을 변경하고 싶을 때 `useRef`를 사용합니다. 다시 렌더링 되어도 그 값은 변하지 않습니다.

2. 또한 **컴포넌트의 태그(tag)에 직접 접근하고 싶을 때** useRef를 사용합니다. 자바스크립트에서 DOM element를 가지고 올 때 `querySelector`나 `getElementById`를 사용하지만 React에서는 `useRef`를 사용합니다. 
    
이때 `useRef`를 사용하여 `useRef`가 접근한 태그 요소의 값을 바꿀 때는 리렌더링을 발생시키지 않는다는 것을 기억해야합니다. 데이터, state와 상관없이(리렌더링 하지 않고) component에 DOM을 제어하고 싶을 때 ref를 사용합니다.

DOM 조작이 필요할때 (DOM을 자바스크립트 코드로 직접하지않고 React 의힘을 부를때) 

---

# useMemo

useMemo도 useEffect와 비슷한 부분이 많습니다. state가 있는 컴포넌트에 state 변화가 생기면 재평가 후 새로 랜더링을 하기 때문이죠. 어떤 부분이 다른지 왜 이 두가지로 분리되었는지는 뒤에서 차근차근 살펴보겠습니다.

