// title: 배열 병합

// const mergeArray = (lists) => [...new Set(lists.flat(Infinity))].sort((a,b) => {return a-b})

// console.log(mergeArray([[6,3,2,4],[1,2,3,6],[7,8,[10,9,[11,[12]]]]]));

function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
    return '병합을 할 배열이 없습니다.'
  }
  if (arr2.length === 0) {
    return '병합을 할 배열이 없습니다.'
  }
  const mergedArray = [];

  let arr1FirstEl = arr1[0];
  let arr2FirstEl = arr2[0];
  let i = 1;
  let j = 1;

  // arr1FistEl, arr2FirstEl 두 값이 모두 falsy를 반환할 때까지 반복합니다.
  while(arr1FirstEl !== undefined || arr2FirstEl !== undefined){
    console.log(arr1FirstEl, arr2FirstEl);
    if(arr2FirstEl === undefined || arr1FirstEl < arr2FirstEl){
      // mergedArray = [arr1FirstEl, arr2FirstEl]
      mergedArray.push(arr1FirstEl);
      arr1FirstEl = arr1[i];
      i++;
    } else {
      // mergedArray = [arr2FirstEl, arr1FirstEl]
      mergedArray.push(arr2FirstEl);
      arr2FirstEl = arr2[j];
      j++;
    }
    console.log(arr1FirstEl, arr2FirstEl);
    console.log('----');
    

  }

  return mergedArray

}

mergeSortedArrays([0,1,3,5,7,9],[0,2,8,10])
