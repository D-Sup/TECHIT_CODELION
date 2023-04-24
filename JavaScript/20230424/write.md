

---

innerText 는 표준이 아니었는데 표준이 됐다

---

템플릿 리터럴

코드를 작성했을 떄, 그 자체로 값을 가지는 것
코드를 적었을때 코드 그대로의 의미를 말함
일부를 수정하기 위해 템플릿 리터럴을 사용하는것은 지양하는 것이 좋다
DOM 접근은 가능한 좁은 범위에서 적게 사용하는 것이 좋다

---

{}
> {}
[]
> []
'hello'
> 'hello'
const str = new String('hello')

---

- DocumentFragment 를 사용해서 한번에 DOM을 업데이트합니다.
오직 메모리상에서만 존재하는 경량화된 DOM 트리입니다.
작은 DOM이라고 생각하면 됨
작은 DOM트리를 만들 수 있음

다른 노드에 붙히면 자식이 가지고있는 노드만 붙히고 감싸고있던 가상DOM은 사라짐


DOM 붙히고 보여주고를 10번을 반복하게 되는데
```js
for (let i = 0; i < 10; i++) {
const article = document.createElement('article');
article.classList.add('parent');
article.innerHTML = `      
<figure>
    <img class="figImg"
        src="https://file.mk.co.kr/meet/neds/2021/07/image_readtop_2021_654175_16256093474708254.jpg"
        alt="">
    <figcaption class="figCap">
        유재석씨가 수상식에서 환하게 웃고 있다.
    </figcaption>
</figure>
`
}
parent.append(article);
```

```js
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 10; i++) {
      const article = document.createElement('article');
      article.classList.add('parent');
      article.innerHTML = `      
      <figure>
          <img class="figImg"
              src="https://file.mk.co.kr/meet/neds/2021/07/image_readtop_2021_654175_16256093474708254.jpg"
              alt="">
          <figcaption class="figCap">
              유재석씨가 수상식에서 환하게 웃고 있다.
          </figcaption>
      </figure>
      `
      frag.append(article);
    }
    parent.append(frag);
```
메모리 상에서 작업해서 모아둔 가상DOM을 한번만 렌더링하면 됨
브라우저의 부담이 줄어든다

```js
const frag = document.createDocumentFragment();
const article = document.createElement('article');
article.classList.add('parent');
article.innerHTML = `        
<figure>
    <img class="figImg"
        src="https://file.mk.co.kr/meet/neds/2021/07/image_readtop_2021_654175_16256093474708254.jpg"
        alt="">
    <figcaption class="figCap">
        유재석씨가 수상식에서 환하게 웃고 있다.
    </figcaption>
</figure>
`;

for (let i = 0; i < 10; i++) {
    frag.append(article);
}

document.querySelector('main').append(frag);
```
article노드가 하나라서, 10번째결과만나타나서..?
붙힐 요소를 하나밖에 만들지 않고 있기 때문에 하나만 출력됨

---
재사용할 수 있는 방법
노드 클론하기
cloneNode() 
호출한 Node의 복제된 Node를반환
var dupNode = node.cloneNode(deep);

parent.append(frag.cloneNode(true));
해당 node의 children 까지 복제하려면 true, 해당 node 만 복제하려면 false
fragment의 복사본을 생성해서 추가

---

## 가비지 컬렉션

각자 할당된 메모리를통해 프로그램을 돌리는데

참조 카운팅으로 메모리에 존재하는 값을
몇개의 변수와 함수가 참조하고 있는지 살펴보는 것

---

전역을 오해시키면 안되는 이유중 하나는
협업할때 문제가 될 수 있다
변수라던지 함수이름이 겹칠 수 있는 사전에 차단하기위한 필요성도 이씾만
메모리에 중점을 두자면
바로 전역변수. 전역변수는 프로그램이 종료되기 전까지 계속 메모리에 존재하게 됩니다.
변수나 함수같은 것들은 가비지컬렉션의 수거대상에 두지 않기떄문에


---

### 배열이나 객체를 불변하는 객체처럼 다루기

배열이나 객체는 불변하는 객체처럼 다루는것이 데이터의 변화를 추적하는데 용이합니다.
만약 배열 데이터를 수정해야 한다면, 기존에 사용했던 원본 데이터는 그대로 두고 새로운 배열을 만들어 사용하는 습관을 들이길 바랍니다.

---

### 엄격모드로 사용하기

1. 선언하지 않은 변수에 값을 할당할 수 없습니다.
2. 읽기 전용 객체에 값을 할당하면 에러가 발생합니다. (일반 모드에서는 조용한 에러 —> 무시 처리)
3. 지울수 없는 값을 지우려고 하면 에러가 발생합니다. (일반 모드에서는 조용한 에러 —> 무시 처리)
4. 함수 파라메터에 중복된 이름을 사용할 수 없습니다.

자바스크립트는 에러를 묵시적으로 무시하고 넘기는 경우가 많다
브라우저 콘솔 - 개발한 기능을 테스트하기 위해 브라우저 콘솔을 사용하는 경우, 기본적으로 use strict 가 적용되어있지 않는다는 점에 주의하셔야 합니다

script를 작성하면서 발생할 수 이있는 에러를 미연에 방지할 수 있도록 해준다

---

앞에 키워드를 생략하면 var로 선언되어서 그렇지 않아요?
함수 레벨 스코프니까

---

[] == false
이게 왜 true일까?

---

🧐 그럼 AJAX가 나오기 이전에는 서버와 통신이 어떤 식으로 이루어졌었나요?
AJAX가 나오기 이전에는 클라이언트가 데이터를 서버에 요청하는 방법은 브라우저 주소창에 특정 URL을 입력하거나, HTML 요소인 <a> 혹은 <form>을 이용하는것 이었습니다.
3가지 방법

---

https://designftw.mit.edu/lectures/apis/ajax_adaptive_path.pdf

 해당 사이트에서는 웹 애플리케이션을 개발하는 데 사용되는 기술 중 하나인 AJAX에 대해 다루고 있습니다.

과거에는 사용자와 상호작용하는 웹 페이지를 만들기 위해서는 HTML과 함께 폼을 이용해 데이터를 서버에 전송하고, 서버에서 처리된 결과를 다시 HTML로 받아와 화면에 출력하는 방식을 사용했습니다. 하지만 이 방식은 페이지가 다시 로드되어야 하기 때문에 사용자 경험과 성능면에서 한계가 있었습니다.

이에 반해 AJAX는 자바스크립트를 이용하여 웹 페이지 내에서 동적으로 데이터를 요청하고 받아오는 방식입니다. 즉, 웹 페이지에서 자바스크립트를 이용해 서버로 요청을 보내고, 서버는 요청에 대한 데이터를 JSON이나 XML 등의 형식으로 응답합니다. 이후 자바스크립트에서는 이 데이터를 이용해 동적으로 웹 페이지를 구성합니다.

이러한 AJAX의 방식은 전체 페이지를 다시 로드하지 않기 때문에 사용자 경험과 성능면에서 이전 방식보다 우수합니다. 또한 데이터만을 전송하기 때문에 전송되는 데이터의 양도 감소하고, 서버 부하를 줄일 수 있습니다.

XML과 같은 데이터 포맷으로
비동기 코드로 주고받았다

http를 xml로 request한다

get은 말로 요청하는것
post는 말없이 쪽지를 전해주는것으로 비유

---

비동기적으로 실행되고 있는것을 보여주는 예시

```js
<p>hello lions!!</p>
<button type="button">통신버튼</button>
<script>
  const btn = document.querySelector('button')
  btn.addEventListener('click', xhrRequest);
  let result;

  function xhrRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'message.txt');
    xhr.onreadystatechange = () => {
      console.log(typeof xhr.readyState);
      
      if(xhr.readyState === 4 && xhr.status === 200){
        result = xhr.responseText;
        console.log(result);
        
        document.querySelector('p').textContent=result
      }
    }
    xhr.send()
  }

  xhrRequest();
  console.log(result);
  // undefined
  // 안녕하세요?!
</script>
```

---

Ajax가 널리 쓰이게 되면서 비동기 처리방법이 매우 중요해지게됩니다.
Ajax는 기본적으로 비동기적으로 서버와의 통신을 처리하기 때문에 Ajax와 기존의 동기식 코드를 함께 작성하면 코드의 실행순서에 문제가 발생합니다.
자바스크립트 엔진은 비동기 코드가 끝날때까지 다른 코드의 실행을 멈추지 않기 때문입니다.

왜 비동기 통신일까?

동기적으로 하면 사용성이 굉장히 떨어진다왜?

처리가 다 끝날때까지 동기적으로 이루어지기떄문에

```js
// sudo코드
const result = 비동기통신함수();
통신함수의결과를가공하는함수1(result);

const result2 = 비동기통신함수2();
통신함수의결과를가공하는함수2(result2);
const total = result + result2;
// 이런 방식은 불가능합니다. result와 result2에 무슨 값이 들어있을지 생각해보세요.
```

가 아닌 

```js
const total = 비동기통신함수( 
        input,
        통신함수의결과를가공하는함수1 ( 
            result, 
            비동기통신함수2(
                통신함수의결과를가공하는함수2(
                    result, 
                    result2
                )
            ) 
        ) 
    );
// 비동기적으로 받아온 데이터를 동기적으로 수행할 수 밖에 없었다
// 이렇게 비동기 함수가 끝나기 전에 중간 중간에 필요한 콜백함수를 실행시키며 사용할 수 밖에 없었습니다.
```

---

javascript object notation


자바스크립트 데이터 문법을 모방한 데이터 형태

자바스크립트는 왜 그 모양일까?

---

웹어셈블리는 웹 플랫폼에 있어서 상당히 큰 의의를 갖습니다 
여러 언어로 작성된 코드들을 네이티브에 가까운 속도로 웹에서 돌릴 수 있는 길을 제공

웹어셈블리는 브라우저에서 실행되는 JavaScript보다 빠르고 안전합니다. 이는 웹어셈블리 코드가 브라우저에서 직접 실행되기 때문입니다. 또한, 웹어셈블리는 다양한 언어로 작성된 코드를 브라우저에서 실행할 수 있기 때문에, 웹 개발자들이 다양한 언어를 사용하여 웹 애플리케이션을 개발할 수 있습니다.

---
