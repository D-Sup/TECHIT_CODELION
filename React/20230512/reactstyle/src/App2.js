import React from "react";
import styled from "styled-components";
import Hello from "./Components/Hello";

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color:red;
`;


const App = () => {
	return (
		<ContentDiv>
            <ContentH2>Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
            <Hello/>
            <Hello2/>
        </ContentDiv>
	);
};

function Hello2(){
  return <h2>hello world</h2>
}

export default App;