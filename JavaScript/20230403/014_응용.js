// step 1
fetch('http://test.api.weniv.co.kr/mall')
.then(data => data.json())
.then(data => console.log(data))

// step 2
fetch('http://test.api.weniv.co.kr/mall')
.then(data => data.json())
.then(data =>{
  data.forEach(item => {
    console.log(item)
  })
})

// step 3
fetch('http://test.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then(data => {
      const main = document.createElement('main')
        data.forEach(item => {
            const productCard = document.createElement('article')
            const productImg = document.createElement('img')
            const productTitle = document.createElement('h2')
            const productPrice = document.createElement('p')
            productImg.setAttribute('src',`http://test.api.weniv.co.kr/${item.thumbnailImg}`)
            productTitle.innerHTML = item.productName
            productPrice.innerHTML = item.price
            productCard.appendChild(productImg)
            productCard.appendChild(productTitle)
            productCard.appendChild(productPrice)
            main.appendChild(productCard)
        })
        document.body.appendChild(main)
    })




// 이미지 맞는지 확인
// https://test.api.weniv.co.kr/asset/img/7/thumbnailImg.jpg