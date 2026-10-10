let themebtn = document.querySelector(".themebtn");

themebtn.addEventListener("click",function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themebtn.innerText ="Light Mode";
    } else{
        themebtn.innerText ="Dark Mode";
    }
});

const products =[
    {
        name:"Fresh Apple",
        category:"fruits",
        price:120,
        unit:"kg",
        image:"apple.jpg"
    },

    {
        name:"Toamto",
        category:"vegitables",
        price:40,
        unit:"kg",
        image:"tomato.jpg"
    },

{
        name:"Cow Milk",
        category:"dairy",
        price:60,
        unit:"Ltr",
        image:"milk.jpg"
    },

{
        name:"Lays Classic",
        category:"snacks",
        price:20,
        unit:"kg",
        image:"lays.jpg"
    },

    {
        name:"Tost",
        category:"snacks",
        price:100,
        unit:"piece",
        image:"tost.jpg"
    },

    {
        name:"Banana",
        category:"fruits",
        price:120,
        unit:"kg",
        image:"bana.jpg"
    },

{
        name:"Bread",
        category:"bakery",
        price:110,
        unit:"piece",
        image:"bread.jpg"
    },


    {
        name:"Cheese",
        category:"dairy",
        price:120,
        unit:"Packet",
        image:"cheesee.jpg"
    },
];

const productsContainer = document.querySelector(".products");

products.forEach(function(product){

    productsContainer.innerHTML += `

    <div class ="card" data-category="${product.category}">
        <span 
        class ="category">${product.category}</span>

        <img src ="${product.image}" alt ="${product.name}">

        <h3>${product.name}</h3>

        <p>${product.price} / ${product.unit}</p>

        <div class ="card-bottom">
        

        <button class="add-cart">Add to cart</button>
</div>

    </div>
    `;
});

let filterbutton = document.querySelectorAll(".filter-button");

let cards = document.querySelectorAll(".card");

filterbutton.forEach(function(button){

    button.addEventListener("click",function(){

        let filterValue = button.getAttribute("data-filter");

        cards.forEach(function(card){

            let category = card.getAttribute("data-category");

            if(filterValue === "all" || filterValue === category){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

let searchInput = document.querySelector("#search");

let cardo = document.querySelectorAll(".card");

searchInput.addEventListener("input",function(){
 
    let searchValue = searchInput.value.toLowerCase();

    cardo.forEach(function(card){

        let productName = card.querySelector("h3").innerText.toLowerCase();
        let category = card.getAttribute("data-category").toLowerCase();

        if(productName.includes(searchValue) || category.includes(searchValue)){
            card.style.display = "block";
        } 
        else {
            card.style.display ="none"
        }
    });
});


let cartDashboard = document.querySelector(".cart-dashboard");

let cartIcon = document.querySelector(".fa-cart-shopping");

let closebtn  = document.querySelector (".close-btn");

cartIcon.addEventListener("click",function(){
    cartDashboard.style.display ="block";
});

closebtn.addEventListener("click",function(){
    cartDashboard.style.display ="none";
});






let cart =[];

let addCartButton = document.querySelectorAll(".add-cart");

let cartItems = document.querySelector(".cart-item");

let cartdashboard = document.querySelector(".cart-dashboard");


addCartButton.forEach(function(button, index){

    button.addEventListener("click",function(){

        let product =  products[index];

        cart.push(product);

        showCart();


    });
});

function showCart(){
    cartItems.innerHTML ="";
    calculatTotal();

    cart.forEach(function(product){
        cartItems.innerHTML +=`
        
        <div class ="cart-product">

        <img src ="${product.image}" alt ="${product.name}">

        <div>
        <h3>${product.name}</h3>
        <p>${product.price}/${product.unit}
        </div>

        `;
    });
}
    function calculatTotal(){

    let total = 0;

    cart.forEach(function(product){

        total = total + Number(product.price)
    });

    document.querySelector(".total-price").innerText = total;

}



let clearCart = document.querySelector(".clear-cart");

clearCart.addEventListener("click",function(){
    cart = [];
    showCart();
    
});

function calculatTotal(){

    let total = 0;

    cart.forEach(function(product){

        total = total + Number(product.price)
    });

    document.querySelector(".total-price").innerText = total;
}

let email = document.querySelector("#email");

let subs = document.querySelector("#subs");
let massege = document.querySelector(".massege");

subs.addEventListener("click",function(){
    if(email.value ===""){
        massege.innerText = "Please Enter Your email";
    } else{
        massege.innerText = "Succesfull!";
    }
    setTimeout(function(){
        massege.innerText ="";
    },3000);
});