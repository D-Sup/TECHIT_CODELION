// item : 로더가 읽을 파일이 item으로 전달됩니다. 
// item은 기본적으로 파일의 콘텐츠를 담고 있는 문자열 입니다.
module.exports = function myLoader(item) {
  return item.replace('console.log(','alert(');
}