let userData = [
  {
      "_id": "64379dd574e1e69de80d1e4f",
      "index": 0,
      "age": 37,
      "name": "Heath Donovan",
      "gender": "male"
  },
  {
      "_id": "64379dd5971c3b61beeaf529",
      "index": 1,
      "age": 37,
      "name": "Dianne Hayes",
      "gender": "female"
  },
  {
      "_id": "64379dd54bf8215f17039d23",
      "index": 2,
      "age": 25,
      "name": "Freda Porter",
      "gender": "female"
  }
]
function renderTable(userData){
  let tableBodyData = []
  for (const i of userData) {
      tableBodyData.push(`
          <tr>
              <td>${i.id}</td>
              <td>${i.index}</td>
              <td>${i.age}</td>
              <td>${i.name}</td>
              <td>${i.gender}</td>
          </tr>
      `)
  }
  // console.log(tableBodyData)
  // console.log(tableBodyData.join(''))
  document.querySelector('#table > tbody').innerHTML = tableBodyData.join('')
}