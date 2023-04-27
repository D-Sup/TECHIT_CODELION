class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector('.section1 .cola-list')
  }

  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

  async loadData() {
    try {
      const response = await fetch('./items.json');
      if(response.ok) { // 서버로 부터 응답이 잘왔다(서버의 응답 코드가 200 ~ 299 일 경우)
        return response.json();
      } else {
        throw new Error(response.status) // response에는 응답의 상태를 저장한 프로퍼티가 있음
        // 인터페이스의 읽기 status전용 속성에는 응답의 HTTP 상태 코드가Response 포함되어 있습니다 .
      }
    } catch (error) {
      console.log(error);
    }
  }

  colaFactory(data) {
    const docFrag = document.createDocumentFragment();
    data.forEach((el) => {
      const item = document.createElement('li');
      const itemTemplate = `
        <button class="btn-cola active" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
          <img src="./img/${el.img}" alt="">
          <span class="cola-name">${el.name}</span>
          <strong class="cola-price">${el.cost}</strong>
        </button>
      `;
      item.innerHTML = itemTemplate;
      docFrag.append(item);
    })

    this.itemList.append(docFrag)
  }


}

export default ColaGenerator;

