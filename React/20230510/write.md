# 이력서를 HTML로 만드는 것

이력서를 HTML 하는건 어중간에 하다가 오히려 안좋게 볼 수 가 있다

이력서를 보는 사람입장에서 써야한다
회자입장에서 본다고 쳤을 때 
내가 프로젝트를 잘 해서 배포하고.. 사람들이 이용하고.. 잘하고..
하지만 그런것만 쓰는건 도움이 별로안된다

회사입장에선 맡은 프로젝트가 잘 출시가 되고 잘 운영되는 건
당연한거고 잘한다는 건 그만큼 해내야된다는 암묵적인 의미
연봉협상
새로운 프로젝트로 들어갔는데 성능개선을 이루어낸다? 힘들다

---

1 || 3 || 10 || 0

false || '' || 10 || 0

1 && 2 && 3 && 10

1 && 2 || 3

false && 10 || 0 || null

"hello" && 10 && true || 10 || null

newMail.length > 0 && <h1>읽지 않은 메일이 있습니다.</h1> -> h1 출력
---

# Key는 형제 사이에서만 고유한 값이어야 한다.

Key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없습니다. 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있습니다.

https://ko.legacy.reactjs.org/docs/lists-and-keys.html
https://ko.legacy.reactjs.org/docs/reconciliation.html#recursing-on-children

---

# 평탄화를 시켜버림

<div>{[<One />, <Two />, <Three />, [<One />, <Two />, [<One />, <Two />]]]}</div>

---

# 리액트 컴포넌트 일관성에 위배되는 행위

<button onClick={(event)=>{event.target.closest('li').remove()}}>삭제</button>

---

# React는 state 함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state 함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리

```jsx
setDatas(
  datas.filter((item) => {
    return id !== item.id
  })
);
setDatas(
  datas.filter((item) => {
    return id !== item.id
  })
);
setDatas(
  datas.filter((item) => {
    return id !== item.id
  })
);
```

이전상태와 지금상태를 확실히 구분짓기 위해 지원하는 방법이 있는데
그게 바로 `함수형 업데이트` 라는 방법이 있음 
콜백 함수의 인자안에는 이전의 상태를 저장하도록해서 할 수 있음

함수형 없데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state 의 값으로 보장합니다 때문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(버츄얼 돔을) 비교하여 처리할 수 있습니다.

이전값을 근거로해서 변화시켜야하는경우 함수형 업데이트를 사용함

```jsx
setDatas(
  datas.filter((item) => {
    return id !== item.id
  })
);
```
```jsx
setDatas((prevDates) => {
  datas.filter((item) => {
    return id !== item.id
  })
});
```
---

자바스크립트에서 마이크로 매크로처럼

리액트도 함수의 실행큐를 저장하는 곳이 있음


---

# Object.freeze()

불변
가상돔은 freeze 메서드로 동결된 상태인건가용?

---



---