import React from 'react'

export default function ItemFenerator({ datas }) {
  return (
    <div>
      {datas.map((data)=>{
        return (
        <div key={data.id}>
          <h2>{data.title}</h2>
          <p>{data.food}</p>
          <time>{data.date}</time>
        </div>
        );
      })}
    </div>
  )
}
