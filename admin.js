const products = JSON.parse(localStorage.getItem("products")) || [];

const productForm = document.getElementById("productForm")
let productName = document.getElementById("productName")
let productPrice = document.getElementById("productPrice")
let productCategory = document.getElementById("productCategory")
const submitBtn = document.getElementById("submitBtn")
const productList = document.getElementById("productList")
const emptyMessageDiv = document.getElementById("emptyMessage")
let emptyMessage = document.createElement("p")

productForm.addEventListener("submit",function(event){
    event.preventDefault();
    const enteredName = productName.value
    const enteredPrice = productPrice.value
    const enteredCategory = productCategory.value
    // emptyMessage = ""
    
    if (enteredName === "" || enteredPrice === "" || enteredCategory === "") {
        
        emptyMessage.classList.add("empty-message")
        emptyMessage.textContent = "Please fill up the inputs"
        emptyMessageDiv.appendChild(emptyMessage)
        console.log(emptyMessage)
    }else{
        const newProduct = {
        name : enteredName,
        price : enteredPrice,
        category : enteredCategory
    }
    products.push(newProduct)
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
    console.log(newProduct,"new Product was added")
    productName.value = ""
    productPrice.value = ""
    productCategory.value = ""
    emptyMessage = ""

    productForm.reset()
    }
    

        
})

function displayProducts(){

    productList.innerHTML = ""
    products.forEach((product)=>{
        const productCard = document.createElement("div")
        productCard.classList.add("admin-product")
        const productName = document.createElement("h3")
        productName.textContent = product.name
        
        const productPrice = document.createElement("p")
        productPrice.textContent = "Price: Rs. " + product.price;

        const productCategory = document.createElement("p")
        productCategory.textContent = "Category: " + product.category;
        
        productCard.appendChild(productName)
        productCard.appendChild(productPrice)
        productCard.appendChild(productCategory)
        
        productList.appendChild(productCard)

        
    })
    
}

displayProducts()

const student = {
    name : "Salman Khan",
    age : 22
}

// const studentData = JSON.stringify(student)
// localStorage.setItem("studentData", studentData)
// const savedData = localStorage.getItem("studentData")
// const originalData = JSON.parse(savedData)
// console.log(originalData.age)



