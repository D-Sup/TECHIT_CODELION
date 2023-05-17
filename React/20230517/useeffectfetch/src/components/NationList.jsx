import React, { useState, useEffect } from 'react'
import styled from "styled-components"

const Item = styled.div`
  margin: 60px auto;
  ul {
    padding: 10px;  
  }
  li {
    border: 1px solid black;
    box-sizing: border-box;
    padding: 10px;
    margin: 30px;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0,0,0,0.1);
  }
`

export default function NationList() {
  const [country, setCountry] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/nations');
  async function getData() {
    const response = await fetch(url)
    try{ 
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setCountry(result)
      } else {
        throw new Error('네트워크 응답에 문제가 있습니다.');
      }
    } catch(error) {
      console.error('Error')
      throw error
    }
  }

  useEffect(()=>{
    getData();
  },[url])

  return (
    <Item>
      <h1>country</h1>
      <div>
        <button onClick={() => {setUrl('http://localhost:3000/nations?loc=europe')}}>유럽 목록</button>
        <button onClick={() => {setUrl('http://localhost:3000/nations')}}>전체 목록</button>
      </div>
      <ul>
      {
        country.map((item)=>{
            return(
              <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.population}</p>
              </li>
            ) 
        })
      }
      </ul>
    </Item>
  )
}
