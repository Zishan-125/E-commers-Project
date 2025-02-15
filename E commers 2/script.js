
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}




document.getElementById("currentYear").textContent = new Date().getFullYear();





document.addEventListener("DOMContentLoaded", function () {
    // Select all rows in the table
    const rows = document.querySelectorAll("tbody tr");
    const totalElements = document.querySelectorAll(".total"); // Select all total elements

    // Function to update subtotal when quantity changes
    function updateSubtotal(row) {
        const priceElement = row.querySelector(".price");
        const quantityInput = row.querySelector(".quantity");
        const subtotalElement = row.querySelector(".subtotal");

        let price = parseFloat(priceElement.textContent.replace("$", "").trim()); // Get numeric price
        let quantity = parseInt(quantityInput.value) || 1; // Get quantity, default 1
        let total = price * quantity; // Calculate total

        // Update subtotal
        subtotalElement.textContent = `$${total.toFixed(2)}`;

        // Update total cart value
        updateCartTotal();
    }

    // Function to update total cart value
    function updateCartTotal() {
        let totalCartValue = 0;

        document.querySelectorAll(".subtotal").forEach(subtotal => {
            let subtotalValue = parseFloat(subtotal.textContent.replace("$", "").trim()) || 0;
            totalCartValue += subtotalValue;
        });

        // Update all total elements, including the one inside <strong>
        totalElements.forEach(totalElement => {
            totalElement.innerHTML = `<strong>$${totalCartValue.toFixed(2)}</strong>`;
        });
    }

    // Attach event listeners to each quantity input
    rows.forEach(row => {
        const quantityInput = row.querySelector(".quantity");

        if (quantityInput) {
            quantityInput.addEventListener("input", () => updateSubtotal(row));
        }

        // Initialize subtotal on page load
        updateSubtotal(row);
    });

});

