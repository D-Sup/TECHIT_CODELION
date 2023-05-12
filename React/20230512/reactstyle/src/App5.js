import React from "react";
import styled, { css } from 'styled-components'

// 스타일을 미리 생성해서 상속

const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`

const App = () => {
	return (
    <Three>Lorem ipsum dolor</Three>
	);
};
  
export default App;