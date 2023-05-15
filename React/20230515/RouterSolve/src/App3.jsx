
import { useState, useRef, useMemo } from "react";

const App = () => {
  // const inputName = useRef(null);
  // const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const getNum = (li) => {
    console.log("렌더링");
    return li.length;
  };

  // const n = useMemo(() => getNum(userInfo), [userInfo]);

  const num = useMemo(() =>{
    return getNum(userInfo)
  } , [userInfo]);

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    const newInfo = [...userInfo, { name: name, id: id }];
    // inputName.current.value = "";
    // inputId.current.value = "";
    setId('');
    setName('');
    e.target[0].focus(); // 사용자 편의를 위해 제출 후 첫번재 input에 focus
    // inputName.current.focus();
    setUserInfo(newInfo); // onSubmit 이벤트가 발생될 때마다 상태값 변경됨
    console.log(newInfo)
    console.log("렌더링-3");
  };

  const handleInputName = (e) => {
    setName(e.target.value); // onChange 이벤트가 발생될 때마다 상태값 변경됨
    console.log("렌더링-1");
  };

  const handleInputId = (e) => {
    setId(e.target.value); // onChange 이벤트가 발생될 때마다 상태값 변경됨
    console.log("렌더링-2");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          // ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleInputId}
          // ref={inputId}
        />
        <button type="submit">
          회원 명부 작성
        </button>
        {/* <button type="submit" onClick={handleSubmit}>
          버튼
        </button> */}
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}
      </ul>
      <span>{num}</span>
    </>
  );
};

export default App;
