console.log("running");
let carts = document.querySelectorAll(".cart");

let products = [
    {
        name:'Aloo Patty Sub ( 15 cm, 6 Inch )',
        price:205,
        inCart:0
    },
    {
        name:'Paneer Tikka Sub ( 15 cm, 6 Inch )',
        price:205,
        inCart:0
    },
    {
        name:'Veggie Delite Sub ( 15 cm, 6 Inch )',
        price:199,
        inCart:0
    },
    {
        name:'Veggie Delite Signature Wraps',
        price:239,
        inCart:0
    },
    {
        name:'Paneer Tikka Signature Wraps',
        price:239,
        inCart:0
    },
    {
        name:'Aloo Patty Signature Wraps',
        price:239,
        inCart:0
    },
    {
        name:'Chicken Slice Sub ( 15 cm, 6 Inch )',
        price:234,
        inCart:0
    },
    {
        name:'Chicken Kofta Sub ( 15 cm, 6 Inch )',
        price:234,
        inCart:0
    },
    {
        name:'Chicken Teriyaki Sub ( 15 cm, 6 Inch )',
        price:234,
        inCart:0
    },
    {
        name:'Chicken Kofta Signature Wraps',
        price:277,
        inCart:0
    },
    {
        name:'Tandoori Chicken Tikka Signature Wraps',
        price:277,
        inCart:0
    },
    {
        name:'Peri Peri Chicken Signature Wraps',
        price:248,
        inCart:0
    },
    {
        name:'Tandoori Tofu Salad',
        price:253,
        inCart:0
    },
    {
        name:'Veggie Delite Salad',
        price:239,
        inCart:0
    },
    {
        name:'Veg Shammi Kebab Salad',
        price:253,
        inCart:0
    },
    {
        name:'Mirinda can (330 ml )',
        price:58,
        inCart:0
    },
    {
        name:'Pepsi Can (330 ml )',
        price:58,
        inCart:0
    },
    {
        name:'Pepsi Black Can (330 ml )',
        price:60,
        inCart:0
    },
    {
        name:'Oatmeal Raisin Cookie',
        price:205,
        inCart:0
    },
    
    {
        name:'Dark Chunk Chocolate Cookie',
        price:43,
        inCart:0
    },
    {
        name:'Double Dark Chunk Chocolate Cookie',
        price:43,
        inCart:0
    },
    
]


for (let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}
function totalCost(product){
    //console.log("The product price is ", product.price);
    
    let cartCost = localStorage.getItem("totalCost");
    

    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost+product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }
}
function cartNumbers(product){
    
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if( productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
    }else{
        localStorage.setItem('cartNumbers',1);
    }
    setItems(product);
    
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("my cartItems are ",cartItems);
    
    if(cartItems !=null){
        if(cartItems[product.name] == undefined){
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart +=1;
    }else{
        product.inCart = 1;
        cartItems ={
            [product.name]:product
        }
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}    
    function displayCart(){
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products")
        let cartCost = localStorage.getItem("totalCost");
        if(cartItems && productContainer){
            productContainer.innerHTML = "";
            Object.values(cartItems).map(item =>{
                productContainer.innerHTML += `
                <div class="product">
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <span>${item.name}</span>
                </div>
                <div class="price">${item.price}</div>
                <div class="quantity">
                <ion-icon name="chevron-back-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
                <div class="total">
                    ${item.inCart * item.price}
                </div>
                `
            });
            productContainer.innerHTML += `
            <div class = "basketTotalContainer">
            <h4 class="basketTotalTitle"> Basket Total </h4>
            <h4 class="basketTotal">${cartCost}</h4>
            `
        }
    }


displayCart();