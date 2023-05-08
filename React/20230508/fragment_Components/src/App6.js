// title: 자식 컴포넌트로 부모컨포넌트의 상태 변화시키기(Prop Drilling, 상태 끌어올리기)

import { useState } from "react";
import DisplayMood from "./Components/DisplayMood/DisplayMood";
import MenuList from "./Components/MenuList/MenuList";

function App() {

  const [currentMood, setCurrentMood] = useState('')

  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood}/>
      <DisplayMood mood={currentMood}/>
    </div>
  );
}

export default App;
