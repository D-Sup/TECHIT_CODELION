import '../Resume.css';
import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);

  // let like = 0;
  const [visible, setVisible] = useState('');
  function clickLike() {
    setLike(like + 1);
    (visible === "") ? setVisible('Like') : setVisible('') 
  }

  const myColor = props.color;
  const styleColor = { color: myColor };

  return (
    <div className="profile">
      <h2>{props.name} 자기소개서</h2>
      <strong>{props.hello}</strong>
      <dl>
        <dt>취미 : </dt>
        <dd>{props.hobby}</dd>
        <dt>좋아하는 음식 : </dt>
        <dd>{props.food}</dd>
        <dt>좋아하는 색 : </dt>
        <dd>
          <strong style={{ color: props.color }}>{props.color}</strong>
        </dd>
        <button onClick={clickLike}>
          like <span>{like}</span>
        </button>
        <span>{visible}</span>
      </dl>
    </div>
  );
}

export default Resume;
