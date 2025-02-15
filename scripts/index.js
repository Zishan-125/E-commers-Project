const menuIcon =document.getElementById("menu-icon");
const menu =document.getElementById("menu");

menuIcon?.addEventListener("click",()=> {

if(menu.className==="hidden"){
    menu?.classList.remove("hidden");
}
else{
    menu?.classList.add("hidden");
}

});

const search = () => {
    // সার্চ ইনপুট ফিল্ড থেকে ইউজারের টাইপ করা মানটি নিয়ে তা বড় হাতের অক্ষরে রূপান্তর করি
    const searchbox = document.getElementById("search-item").value.toUpperCase(); 
    
    // সব প্রোডাক্ট এলিমেন্টগুলো সিলেক্ট করি যেগুলোতে "product" এবং "card" ক্লাস রয়েছে
    const products = document.querySelectorAll(".product.card"); 
    
    // প্রতিটি প্রোডাক্টের নাম (product__name) সিলেক্ট করি যাতে সার্চ করা যায়
    const productNames = document.querySelectorAll(".product__name"); 

    // প্রতিটি প্রোডাক্টের নামের সাথে সার্চ করা টেক্সট ম্যাচ করার জন্য লুপ চালাই
    for (let i = 0; i < productNames.length; i++) {
        let match = productNames[i]; // প্রোডাক্ট নামের বর্তমান এলিমেন্ট ধরে রাখি

        if (match) { 
            // প্রোডাক্টের নাম টেক্সট বের করি (যদি "textContent" না থাকে তবে "innerHTML" থেকে)
            let textValue = match.textContent || match.innerHTML; 

            // সার্চ ইনপুটের টেক্সট প্রোডাক্টের নামের সাথে মিলিয়ে দেখি
            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                products[i].style.display = ""; // যদি টেক্সট মিলে যায়, প্রোডাক্টটি দেখাই
            } else {
                products[i].style.display = "none"; // যদি টেক্সট না মিলে, প্রোডাক্টটি লুকিয়ে রাখি
            }
        }
    }
};



// Function to filter products based on selected price range
const filterByPriceRange = () => {
    // Get all product cards
    const products = document.querySelectorAll(".product.card");

    // Get the selected price range from radio buttons
    const selectedRange = document.querySelector('input[name="price"]:checked');

    if (selectedRange) {
        // Parse the selected value into min and max
        const range = selectedRange.value.replace(/[\[\]]/g, "").split(","); // Remove brackets and split
        const min = parseFloat(range[0]);
        const max = range[1] === "+" ? Infinity : parseFloat(range[1]);

        // Loop through each product and filter based on price range
        products.forEach(product => {
            // Get the product price (remove the $ and parse as float)
            const priceText = product.querySelector(".product__price").textContent.trim();
            const productPrice = parseFloat(priceText.replace("$", ""));

            // Show or hide the product based on the price range
            if (productPrice >= min && productPrice <= max) {
                product.style.display = ""; // Show product
            } else {
                product.style.display = "none"; // Hide product
            }
        });
    }
};

// Add event listeners to all radio buttons
document.querySelectorAll('input[name="price"]').forEach(radioButton => {
    radioButton.addEventListener("change", filterByPriceRange); // Trigger the filter when a radio button is clicked
});


document.getElementById("currentYear").textContent = new Date().getFullYear();


