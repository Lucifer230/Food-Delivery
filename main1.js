console.log("running");
let carts = document.querySelectorAll(".cart");

let products = [
    {
        name:'Veg Galouti Kebab',
        price:275,
        inCart:0
    },
    {
        name:'Paneer 65',
        price:295,
        inCart:0
    },
    {
        name:'Veg Platter',
        price:549,
        inCart:0
    },
    {
        name:' Chicken 65',
        price:325,
        inCart:0
    },
    {
        name:'Mutton Galouti Kebab',
        price:545,
        inCart:0
    },
    {
        name:' Non-Veg Platter',
        price:699,
        inCart:0
    },
    {
        name:'Paneer Dum Biryani [1/2 Kg]',
        price:325,
        inCart:0
    },
    {
        name:'Kathal Dum Biryani [1/2 Kg]',
        price:365,
        inCart:0
    },
    {
        name:'Veg Hyderabadi Dum Biryani [1/2 Kg]',
        price:350,
        inCart:0
    },
    {
        name:'Brown Rice Paneer Biryani [1/2 Kg]',
        price:375,
        inCart:0
    },
    {
        name:'Veg Dum Biryani [1 Kg]',
        price:599,
        inCart:0
    },
    {
        name:'Veg Hyderabadi Dum Biryani [1 Kg]',
        price:645,
        inCart:0
    },
    {
        name:'Egg Dum Biryani [1/2 Kg]',
        price:325,
        inCart:0
    },
    {
        name:'Chicken Hyderabadi Dum Biryani [1/2 Kg]',
        price:325,
        inCart:0
    },
    {
        name:'Mutton Hyderabadi Dum Biryani [1/2 Kg]',
        price:325,
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