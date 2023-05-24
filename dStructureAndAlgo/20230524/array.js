const testArray = [1,2,3,4];
testArray.push(5); // O(1)

testArray.pop(); // O(1)

testArray.unshift(0); // O(n)

testArray.splice(2, 1, 6) // 좋은경우 O(1) 최악의 경우 O(n)

