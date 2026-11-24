const cart = []
const products = [
    {
    name : "Classic Cotton Polo Shirt",
    price : 1800,
    category : "Men's Clothing",
    image : "project Images/men-polo-shirt.jpg",
    description : "Comfortable cotton polo shirt for everyday wear"
    },
    {
    name : "Slim Fit Denim Jeans",
    price : 3200,
    category : "Men's Clothing",
    image : "project Images/men-denim-jeans.jpg",
    description : "Modern slim-fit jeans with a comfortable denim finish."
    },
    {
    name : "Casual Hoodie",
    price : 2500,
    category : "Men's Clothing",
    image : "project Images/men-hoodie.jpg",
    description : "Soft and warm hoodie for casual everyday outfits."
    },
    {
    name : "Formal Dress Shirt",
    price : 2200,
    category : "Men's Clothing",
    image : "project Images/men-dress-shirt.jpg",
    description : "Elegant formal shirt suitable for office and events."
    },
    {
    name : "Casual Chino Trousers",
    price : 2800,
    category : "Men's Clothing",
    image : "project Images/men-chino-trouser.jpg",
    description : "Stylish and versatile trousers for casual outfits"
    },
    {
    name : "Summer Lawn Suit",
    price : 3500,
    category : "Women's Clothing",
    image : "project Images/winter-lawn-suit.jpg",
    description : "Beautiful three-piece lawn suit for summer occasions."
    },
    {
    name : "Embroidered Chiffon Suit",
    price : 5200,
    category : "Women's Clothing",
    image : "project Images/chiffon-suit.jpg",
    description : "Elegant embroidered outfit for parties and celebrations."
    },
    {
    name : "Casual Printed Kurti",
    price : 1900,
    category : "Women's Clothing",
    image : "project Images/printed-kurti.jpg",
    description : "Lightweight printed kurti for comfortable daily wear."
    },
    {
    name : "Elegant Maxi Dress",
    price : 4500,
    category : "Women's Clothing",
    image : "project Images/maxi-dress.jpg",
    description : "A graceful maxi dress for special occasions."
    },
    {
    name : "Women's Co-ord Set",
    price : 3800,
    category : "Women's Clothing",
    image : "project Images/women-coord-set.jpg",
    description : "Modern matching outfit with a relaxed fit."
    },
    {
    name : "Classic White Sneakers",
    price : 3500,
    category : "Footwear",
    image : "project Images/white-sneakers.jpg",
    description : "Minimal white sneakers for everyday styling."
    },
    {
    name : "Formal Leather Shoes",
    price : 4200,
    category : "Footwear",
    image : "project Images/formal-shoes.jpg",
    description : "Classic formal shoes for professional occasions."
    },
    {
    name : "Women's Flat Sandals",
    price : 1600,
    category : "Footwear",
    image : "project Images/flat-sandals.jpg",
    description : "Comfortable and stylish sandals for daily use."
    },
    {
    name : "Elegant High Heels",
    price : 3000,
    category : "Footwear",
    image : "project Images/high-heels.jpg",
    description : "Stylish heels for parties and formal events."
    },
    {
    name : "Sports Running Shoes",
    price : 3800,
    category : "Footwear",
    image : "project Images/running shoes.jpg",
    description : "Lightweight sports shoes for running and exercise."
    },
    {
    name : "Classic Wrist Watch",
    price : 2800,
    category : "Accessories",
    image : "project Images/wrist-watch.jpg",
    description : "A timeless wristwatch with a minimalist design."
    },
    {
    name : "Premium Leather Wallet",
    price : 1500,
    category : "Accessories",
    image : "project Images/leather-wallet.jpg",
    description : "Compact wallet with a stylish leather finish."
    },
    {
    name : "Classic Sunglasses",
    price : 1800,
    category : "Accessories",
    image : "project Images/sunglasses.jpg",
    description : "Modern sunglasses for a stylish everyday look."
    },
    {
    name : "Leather Belt",
    price : 1200,
    category : "Accessories",
    image : "project Images/leather-belt.jpg",
    description : "Classic belt suitable for formal and casual outfits."
    },
    {
    name : "Everyday Backpack",
    price : 3200,
    category : "Accessories",
    image : "project Images/backpack.jpg",
    description : "Spacious backpack for work, travel and everyday use."
    }
    
]

// const newCard = document.createElement("div")
// newCard.classList.add("product-card")
// productsContainer.appendChild(newCard)

// const productHeading = document.createElement("h2")
// productHeading.textContent = "Summer Lawn Suit"
// newCard.appendChild(productHeading)

// const productImage = document.createElement("img")
// productImage.src = "Image 2.jpg"
// productImage.alt = "Three piece suit"
// newCard.appendChild(productImage)

// const productInfo = document.createElement("div")
// productInfo.classList.add("product-info")
// productInfo.appendChild(productHeading)
// newCard.appendChild(productInfo)

// const productDescription = document.createElement("p")
// productDescription.textContent = "Beautiful Men's Black Three piece Suit"
// productInfo.appendChild(productDescription)

// const productPrice = document.createElement("div")
// productPrice.classList.add("product-price")
// productPrice.textContent = "Rs. 6000"
// productInfo.appendChild(productPrice)

// const buyBtn = document.createElement("button")
// buyBtn.classList.add("buy-btn")
// buyBtn.textContent = "BUY NOW"
// productInfo.appendChild(buyBtn)

const productsContainer = document.getElementById("products")
const searchInput = document.getElementById("searchInput")
const categoryFilter = document.getElementById("categoryFilter");
const productCount  =  document.getElementById("productCount")
const sortFilter = document.getElementById("sortFilter")
const clearFiltersBtn = document.getElementById("clearFilters")
const cartCount = document.getElementById("cartCount")
const cartItems = document.getElementById("cartItems")
const cartTotal = document.getElementById("cartTotal")
const removeCart = document.getElementById("removeCart")


function displayProducts(productList)
{
productsContainer.innerHTML = ""
    productList.forEach((product)=>{
    // console.log(product.name)
    const newCard = document.createElement("div");
    newCard.classList.add("product-card");
    productsContainer.appendChild(newCard);

    const productImage = document.createElement("img")
    productImage.src = product.image;
    productImage.alt = product.name
    newCard.appendChild(productImage);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    newCard.appendChild(productInfo)

    const productHeading = document.createElement("h2");
    productHeading.textContent = product.name
    productInfo.appendChild(productHeading)

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description
    productInfo.appendChild(productDescription);

    const productPrice = document.createElement("div")
    productPrice.classList.add("product-price")
    productPrice.textContent = "Rs. " + product.price
    productInfo.appendChild(productPrice)

    const buyButton = document.createElement("button")
    buyButton.classList.add("buy-btn")
    buyButton.textContent = "Add to Cart"
    productInfo.appendChild(buyButton)

    buyButton.addEventListener("click", function(){
        const existingItem = cart.find((item)=>{
            return item.product === product;
        });
        if(existingItem){
            existingItem.quantity++;
        }else{
            cart.push({
                product: product,
                quantity: 1
            });
        }
        
        // cartCount.textContent = "Cart : " + cart.length;
        updateCartCount()
        displayCart()

    })
    

    
})
}

displayProducts(products)

function updateCartCount(){
    const totalItems = cart.reduce((total,item)=>{
            return total + item.quantity;
        },0)
        cartCount.textContent = "Cart : " , totalItems;
}

function applyFilters(){
    productsContainer.innerHTML = ""
    const TypedText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedSort = sortFilter.value;
    const filteredProducts = products.filter((product)=>{
    const matchesSearch = product.name.toLowerCase().includes(TypedText)
    const matchesCategory = 
        selectedCategory === "all" || 
        selectedCategory === product.category ;
    return matchesSearch && matchesCategory;
    
    })

    if(selectedSort === "LowToHigh")
    {
        filteredProducts.sort((a,b)=> a.price - b.price)
    }
    else if(selectedSort === "HighToLow")
    {
        filteredProducts.sort((a,b)=> b.price - a.price)
    }

    if (filteredProducts.length === 0)
    {
        // NoProductMsg = document.createElement("p")
        // NoProductMsg.textContent = "No Product Found"
        // productsContainer.appendChild(NoProductMsg)
        productCount.textContent = "No Product Found"
    }
    else 
    {
        productCount.textContent = "Showing " + filteredProducts.length + " Products";
    }

    
    displayProducts(filteredProducts);

    // if (filteredProducts === 0)
    // {

    // }else{
    //     displayProducts(filteredProducts);
    // }

}


function displayCart()
{
    cartItems.innerHTML = ""
    let total = 0
    cart.forEach((cartEntry)=>{
        const product = cartEntry.product;
        const cartItem = document.createElement("div")
        cartItem.classList.add("cartItem")
        cartItems.appendChild(cartItem)
        const displayParagraph = document.createElement("p")
        displayParagraph.classList.add("paragraph")
        displayParagraph.textContent = "Product Name : " + product.name + " Product Price : " + product.price
        cartItem.appendChild(displayParagraph)
        
        // display quantity
        const quantityText = document.createElement("p")
        quantityText.textContent="Quantity: " + cartEntry.quantity;
        cartItem.appendChild(quantityText)

        // Plus button
        const plusButton = document.createElement("button")
        plusButton.textContent = "+"

        plusButton.addEventListener("click", function(){
            cartEntry.quantity++

            updateCartCount();
            displayCart();
        })

        cartItem.appendChild(plusButton);

        // Minus Button
        const minusButton = document.createElement("button")
        minusButton.textContent = "-"

        minusButton.addEventListener("click", function(){
            cartEntry.quantity--;
            if(cartEntry.quantity === 0){
                const productIndex = cart.findIndex((item)=>{
                    return item === cartEntry;
                });
                cart.splice(productIndex,1)
            }
            updateCartCount()
            displayCart()
        })

        cartItem.appendChild(minusButton)


        // Create Remove button
        const removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.addEventListener("click", function(){
            const productIndex = cart.findIndex((item)=>{
                return item === product;
            });
            cart.splice(productIndex,1);
            updateCartCount();
            displayCart()
        })
        cartItem.appendChild(removeBtn)
        cartItems.appendChild(cartItem)
        
        total += product.price * cartEntry.quantity;
                
    });
    cartTotal.textContent = "Total price : " + total
    

}

searchInput.addEventListener("input",function(){
    applyFilters();
});


categoryFilter.addEventListener("change",function(){
    applyFilters();

})

sortFilter.addEventListener("change",function(){
    applyFilters();
})

clearFiltersBtn.addEventListener("click", function(){
    searchInput.value = ""
    categoryFilter.value = "all"
    sortFilter.value = "Default"
    applyFilters();
})

























