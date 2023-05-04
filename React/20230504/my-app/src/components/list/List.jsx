import './List.css';

function List() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];
  const items = list.map((item) => {
      // return <li style={{backgroundColor: 'royalblue'}} key={item.no}>{item.area}</li>
      return <li key={item.no} className={item.visited ? 'list-area-item-active ': 'list-area-item '} >{item.area}</li>
  })
  return <ul>{items}</ul>
}

export default List;
