const 회원정보 = [
  {
    "_id": "642a622854dd201ef2664e7e",
    "index": 0,
    "age": 20,
    "eyeColor": "blue",
    "name": "Mckinney Kelley",
    "gender": "male",
    "company": "ZAGGLE"
  },
  {
    "_id": "642a62289fab4af94cc2b136",
    "index": 1,
    "age": 24,
    "eyeColor": "blue",
    "name": "Audrey Powers",
    "gender": "female",
    "company": "CUIZINE"
  },
  {
    "_id": "642a6228ef0e1bec140fa89e",
    "index": 2,
    "age": 31,
    "eyeColor": "brown",
    "name": "Mitzi Richard",
    "gender": "female",
    "company": "IDEALIS"
  },
  {
    "_id": "642a622858a80f070cfd7f8a",
    "index": 3,
    "age": 27,
    "eyeColor": "green",
    "name": "Marva Kirkland",
    "gender": "female",
    "company": "HANDSHAKE"
  },
  {
    "_id": "642a622845a61edcbdd84418",
    "index": 4,
    "age": 37,
    "eyeColor": "brown",
    "name": "Nadia Rosa",
    "gender": "female",
    "company": "EWAVES"
  }
]

회원정보[0]
회원정보[0]['name']
회원정보[0]['company']


const female = 회원정보.map(e=>{
  if(e.gender === 'female'){
    return e
  } 
})
let sum = 0;
const avg = 회원정보.forEach(e=>{
  sum += e.age 
})
console.log(female)
console.log(sum/회원정보.length)