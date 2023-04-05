// 사용자로부터 입력받은 성적에 따라 성적을 출력하는 프로그램을 작성하세요. 

// 1. 성적이 90점 이상이면 "A", 
// 2. 80점 이상이면 "B", 
// 3. 70점 이상이면 
// 4. "C", 60점 이상이면 "D", 
// 5. 그 외에는 “강해져서 돌아와라”를 출력합니다.

const inpt = parseInt(prompt('성적을 입력하세요'));

if(input > 100) {
  alert('값을 더 작게 해주세요');
} else if(inpt > 90) {
  console.log('A');
} else if (inpt > 80) {
  console.log('B');
} else if (inpt > 70) {
  console.log('C');
} else if (inpt > 60) {
  console.log('D');
} else {
  console.log('강해져서 돌아와라');
}