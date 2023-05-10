import React from 'react'

// function Hello({name}){
//   if (name) {
//       return (
//           <div>
//               <h1>{name}</h1>
//           </div>
//       )
//   }
//   return <NoName/>
// }

function Hello(props) {
	const name = props.name;
  if(name){
    return <One name={name}/>
  } else {
    return <Two/>
  }
}

function One(props){
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

function Two(props){
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  )
}


function NoName(){
  return(
      <div>
          <h1>이름을 입력하지 않았습니다.</h1>
      </div>
  )
}

function App4() {
  return (
    // <Hello name='licat'/>
    <Hello name='gary'/>
  )
}

export default App4

