let score = 69;
let money = 1000;

if (score > 90){
  document.write('참 잘했습니다!<br>');
  money += 100000
} else if (score > 80){
  document.write('잘했습니다!<br>');
  money += 10000
} else if (score > 70){
  document.write('했습니다!<br>');
  money += 1000
} else {
  money = 0
}

document.write(money);