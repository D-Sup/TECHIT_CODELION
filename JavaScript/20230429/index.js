import Component from "./core.js";

class ProductImage extends Component {
    render(){
        const $productImage = document.createElement("img");
        $productImage.setAttribute("src",this.props.src);
        $productImage.addEventListener("click",(e)=>{
        })

        return $productImage
    }
}

class ProductPage extends Component{
    constructor(props){
        super(props);
        this.getData();
        this.state = {
            products:[]
        }
    }

    async getData(){
        const res = await fetch("https://test.api.weniv.co.kr/mall");
        const json = await res.json();
        this.setState({products:json});
    }
    
    render(){
        const $page = document.createElement("div");
        const $productLis = this.state.products.map((product)=>{
            const productImage = new ProductImage({src:"https://test.api.weniv.co.kr/"+product.thumbnailImg})
            const $productImage = productImage.initialize();

            $productImage.addEventListener("click",()=>{
                alert(`가격:${product.price}`);
            })
            return $productImage
        })
        $page.append(...$productLis);
        return $page;
    }
}

const productPageProps = {buttontext:"안녕하세요!",name:"이름!"}
const productPage = new ProductPage(productPageProps);

init(productPage.initialize());








function init($page) {
    const $root = document.querySelector("#root");
    $root.append($page)
}