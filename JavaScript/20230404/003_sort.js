

// 사전식 정렬입니다. 시간이 지나도 못바뀌는 내용입니다
// 팀정렬로 통일했다
const nums = [3,1,8,6]
console.log(nums.sort()); // sort를 어느알고리즘으로 할꺼냐? 는 브라우저의 자유

// 오름차순
const nums2 = [3,1,11,8,6]
console.log(nums2.sort((a,b)=>a+b)); 

// 내림차순
const nums2 = [3,1,11,8,6]
console.log(nums2.sort((a,b)=>a-b)); 

// 실무사용코드
function sort(key){
  if (click){
      click = false
      var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
  }
  else{
      click = true
      var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
  }
}

// 딥하게 sort를 탐색해보겠다?
const nums2 = [3,1,11,8,6]
nums2.sort((a,b)=>{
  console.log(a,b);
  console.log(a-b);
}); 
// https://www.notion.so/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd
// sort에 대한 고찰
