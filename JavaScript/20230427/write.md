webpack이 하는 일 
모듈 별로 쪼개져 있는 것을 번들러 (쪼개져있는 걸 합쳐서 결과를 만들어주는)

자바스크립트 파일을 쪼개서 만들다보니까 한꺼번에 부르기가 애매했음

하나의 js, css, jpg, png로 합쳐버림

---

이 스크립트를 모듈로 선언하려면 script 요소(element)에 type="module" 을 포함시켜야 합니다.

```js
<script type="module" src="main.js"></script>
```

자바스크립트 모듈

export로 붙어있는 애들은 밖에서 사용할 수 있게 해줌

export { name, draw, reportArea, reportPerimeter };

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

---

export 할게 하나밖에 없으면 default

export default

---

쿼리셀렉터로 찾는 것보다 안에 있는 데이터로 찾는 것이 더 효율적

---

