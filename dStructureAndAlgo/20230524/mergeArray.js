// title: 배열 병합

const mergeArray = (lists) => [...new Set(lists.flat(Infinity))].sort((a,b) => {return a-b})

console.log(mergeArray([[6,3,2,4],[1,2,3,6],[7,8,[10,9,[11,[12]]]]]));