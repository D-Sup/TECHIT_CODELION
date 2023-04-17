// title: this 복습
// # 나를 호출하는 애한테 각각의 다른 액션을 취하고 싶을 때

function attackBeam() { // 레이저 공격
  this.hp -= 20
}

function attackKnife() { // 칼공격
  if (this.name === 'thanos'){
      this.hp -= 1
      return
  }
  this.hp -= 5
}

let jombi = {
  name: 'jombi',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2
}

let thanos = {
  name: 'thanos',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 1000,
  power: 100
}

jombi.damaged1() // Beam
jombi.damaged2() // Knife
jombi.hp