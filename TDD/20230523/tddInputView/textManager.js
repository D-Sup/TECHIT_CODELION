// 사용자입력값을 관리

class TextManager {
  constructor(){
    this.value = { data : "hello lions!" }
  }
  getValue() {
    return this.value.data
  }

  setValue(newValue) {
    this.value = { data : newValue }
  }

}