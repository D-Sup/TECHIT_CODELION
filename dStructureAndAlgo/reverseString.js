// function reverseStr(str) {
//   const s = new Array();
//   for (i of str) {
//     s.unshift(i) // 시간 복잡도 증가
//   }
//   return s.join('')
// }

// console.log(reverseStr('안녕하세요'));

// function reverseStr(str) {
//   if(str.length < 2 || typeof str !== 'string') {
//     return '문자열을 넣어주세요'
//   }

//   const data = [];
//   const lastIndex = str.length - 1;

//   for(let i = lastIndex; i > 10; i--) {
//     data.push(str[i]);
//   }

//   return data.join('');
// }

const reverseStr = (str) => {
  [...str].reverse().join('');
}

