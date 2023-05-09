import { useState } from 'react';
import Login from './Login.jsx';
import Homepage from './Homepage.jsx';
import Modal from './Modal.jsx';

function Hello(props) {
	const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
	
  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.
  const numComponentsArray = num.map((i)=><h1>안녕, {name} {i}호</h1>);
  return(
    <div>
      {numComponentsArray}
    </div>
  )
}

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234',
  };
  const [login, setLogin] = useState(false);
  const [modalState, setModalState] = useState(true);

  function modalClose() {
    setModalState(false);
  }

  return (
    <>
  <Hello name="licat"/>
      {login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />}
      {modalState && <Modal modalClose={modalClose}>
        <h2>사용약관</h2>
        <p>lorem</p>
      </Modal>}
    </>
  );
}

export default App;
