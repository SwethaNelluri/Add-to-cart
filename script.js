// function to load all the ui items and add to cart buttons
document.addEventListener('DOMContentLoaded',()=>{
    const addToCartBtn=document.querySelectorAll('.add-to-cart')
    // console.log(addToCartBtn)
    // accessing all btns for adding the functionality for all add to cart button
    addToCartBtn.forEach((ele)=>{
        // console.log(ele)
        // adding functionality
        ele.addEventListener('click', (e)=>{
            console.log(e.target)
          
            // accessing the product information through the navigation
            const productInfo=ele.parentElement.parentElement.parentElement
            console.log(productInfo)
            // accessing the information like title price img
            const productTitle=productInfo.querySelector('.product-title').innerText
            const productPrice=productInfo.querySelector('.product-price').innerText
            const productImage=productInfo.querySelector('.product-img').src
            console.log(productTitle)
            console.log(productPrice)
            console.log(productImage)
            // creating a single objects for selected items to store in cart
            const selectedProducts={
                name:productTitle,
                price:productPrice,
                imgUrl:productImage
            }
            console.log(selectedProducts)
            // passing the selected products into the addtocart function as value
            addToCart(selectedProducts)
        })
    })
})

// to store the selected items
let cartItems=[]

// function to add items into carts
function addToCart(products){
    console.log(products)
    // checking for existing items in the cart
    const existingItems=cartItems.find((item)=>item.name=== products.name)
    if(existingItems){
        // increasing the quantity for the items that is found in the cart(only for existing items)
        existingItems.quantity++
    }else{
        // if items not found in cart the single item with quantity one will be pushed in cart
        cartItems.push({...products,quantity:1})
    }
}



// function to load cart-Ui
function updateCartUi(){
// accessing the ul list to print the selected cart items into it
const cartItemEle=document.querySelector('.cartElements');
// console.log(cartItemEle);
cartItemEle.innerHTML="";
cartItems.forEach((item)=>{
    // console.log(item)
    // creating li items and appending dynamically in cart
    const cartProd=document.createElement('li')
cartProd.innerHTMl=`<div class="rounded position-relative fruite-item">

<div class="fruite-img">
    <img src=${item.imgUrl} class="img-fluid w-100 rounded-top product-img" alt="">
</div>
<div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Fruits</div>
<div class="p-4 border border-secondary border-top-0 rounded-bottom product-info">
   
    <h4 class="product-title">${item.name}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
    <div class="d-flex justify-content-between flex-lg-wrap">

        <p class="text-dark fs-5 fw-bold mb-0 product-price">${item.price}</p>
        <span class="quantity">${item.quantity}</span>
     
        <div class="quantity-container">
            <button class="increase-quantity">+</button>
            <span class="quantity-val">${item.quantity}</span>
            <button class="decrease-quantity">-</button>
        </div>
      <button class="remove-quantity"></button>
    </div>
</div>
</div>`
console.log(cartProd)

// adding the functionality for increase and decrease
const cartProdEle=cartProd.querySelector('.quantity-container')
const cartProdVal=cartProd.querySelector('.quantity')
const increaseQuantity=cartProdEle.querySelector('.increase-quantity')
const decreaseQuantity=cartProdEle.querySelector('.decrease-quantity')
const removeQuantity=cartProdEle.querySelector('.remove-quantity')

// adding functionality to increase, decrease, remove buttons through add event listener
increaseQuantity.addEventListener('click',()=>{})
handleIncQuantity()
// decrease functionality
decreaseQuantity.addEventListener('click',()=>{})
handleDecQuantity()
// increase functionality
removeQuantity.addEventListener('click',()=>{})
handleRemQuantity()

// appending the cartprod(li) element to ul list
cartItemEle.appendChild

})
}






// function to handle increase_quantity
function handleIncQuantity(item,cartProdVal){
item.quantity++
cartProdVal.innerText=item.quantity
updateCartUi()
}
// function to handle decrease_quantity
function handleDecQuantity(item,cartProdVal){
    if(item.quantity>1){
        item.quantity--
        cartProdVal.innerText=item.quantity
    }
    // function to update the ui of cart
updateCartUi()

}

// function to handle delete_item
function handleRemQuantity(item){
 let index=cartItems.findIndex((prod)=>item.name==prod.name)
 if(index!=-1){
    if(cartItems[index]){
        cartItems[index].quantity--       //used for removing only one item at a time
    }else{
        cartItems.splice(index,1)       //if only one element is found it removes it completely
    }
 }
 updateCartUi()
 cartIconTotal()
 cartTotal ()
}
// function to handle total_price of items
function cartTotal(){
    const cartTotalEle=document.querySelector('#cart-total')
    const totalVal=cartItems.reduce((total,curr)=>total+curr.price*curr.quantity,0)
    cartTotalEle.innerText=`total:${totalVal.toFixed(2)}`
}
// function to handle remove all items in the cart
// function to update the cart_icon value
function cartIconTotal (){
 const cartIconEle=document.querySelector('#iconval')
 const totalVal=cartItems.reduce((total,curr)=>total+ curr.quantity,0)
    cartIconEle.innerText=totalVal
}