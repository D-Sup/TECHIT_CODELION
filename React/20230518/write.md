# useContext 

반복되는 props 드릴링을 피하기 위해 useContext쓴다

useContext에 저장하는 것들
- 다크모드
- 언어설정
- API 주소
이러한 값들을 저장할 때 유용하다

---

# 클래스 컴포넌트의 lifecycle

마운트 - 화면에 그려질때, 처음 컴포넌트가 나타났을 때
업데이트 - 변화가 생길 때
언마운트 - 컴포넌트가 더 이상 쓸모가 없어서 화면에서 사라질 때

## 마운트

state와 props를 가지고 컴포넌트를 생성

## 업데이트(update) - 컴포넌트 상태값이 바뀔 때

마운트가 완전히 완료된 후 상태값이나 prop의 변화가 생겼을 때, 리액트는 이를 감지하고 컴포넌트에 업데이트해줍니다

## 언마운트(unmount) - 컴포넌트가 사라질 때

언마운트에서는 `componentWillUnmount`가 실행됩니다. 컴포넌트를 완전히 DOM에서 제거하는 시점입니다.

https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9b80022a-ddc1-4e0a-851b-2c9487d32b9b%2FUntitled.png?id=f51fd3bd-ef6e-484f-ba82-70140c81f345&table=block&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=1920&userId=&cache=v2

### Unmount가 언제 벌어지는가

컴포넌트가 업데이트돼서 컴포넌트가 화면상에서 지워질때

---

# Lazy initialize

Lazy initialize는 useState를 사용하여 state를 초기화하는 
과정을 lazy(게으르게)하게 실행하는 것입니다.

https://legacy.reactjs.org/docs/hooks-reference.html#lazy-initial-state

# 함수형 업데이트 ?

함수의 전달인자에 리액트가 이전 state 값을 넣어주는데 
이전 상태의 값을 보존한다고 표현했었음
상태를 업데이트 해야되는데 이전의 상태를 토대로 
무엇인가 새로운 값을 반환할 때 함수형 업데이트를 사용한다고 했었음

---

# Hook 에서의 lifecycle (Hook Flow)

https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56bfc5b2-af1a-4924-8324-b37c6830cee0%2FUntitled.png?id=b870c09f-cfb0-4b92-818e-effd1c4b8936&table=block&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=1920&userId=&cache=v2

6. `Cleanup Effects`
7. `Run Effects`

1. `Cleanup LayoutEffects`
2. `Cleanup Effects`

useLayoutEffect
useEffect

## clean-up 함수

업데이트 됐을때
언마운트 됐을때

return 키워드로 반환하는 함수를 
clean-up 함수라고 표현

useEffect 의 함수가 실행되기 전에
clean-up 함수가 정리가 됨

---

# useLayoutEffect와 useEffect의 차이

**Render 과정과** **Paint 과정 사이**에서 `useLayoutEffect`가 동작하게 됩니다. 해당 `LayoutEffect`가 **실행이 끝나면 Paint가 진행됩니다.**

즉, **useLayoutEffect 과정이 마쳐진 후**에 브라우져에 그려지게 됩니다. `useEffect`는 작업이 모두 끝나지 않아도 화면이 잘 그려지던데 동작 방식이 다른 것 같네요. 

이는 `useEffect`는 **비동기적**으로 동작하지만, `useLayoutEffect`는 **동기적으로** 동작하기 때문입니다. 따라서 `useLayoutEffect`가 오래걸리는 작업이라면 화면도 늦게 렌더링됩니다.

useLayoutEffect 컴포넌트가 렌더링 되기 전에 실행'
useEffect 는 컴포넌트가 렌더링 된 후에 실행

useLayoutEffect 는 동기적으로 처리하기 때문에
무거운 코드에는 useLayoutEffect 쓰지 않는 것이 좋다

---

# custom Hook 
함수를 만드는 것