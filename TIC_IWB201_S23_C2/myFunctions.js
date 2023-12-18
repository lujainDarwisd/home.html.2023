var cartItems = [];

function addToCart(name, price, quantity) {
    var item = {
        name: name,
        price: price,
        quantity: quantity
    };

    cartItems.push(item);
    updateCart();
}

function updateCart() {
    var cartBody = document.getElementById('cartBody');
    var totalAmountElement = document.getElementById('totalAmount');

    cartBody.innerHTML = '';

    var totalAmount = 0;

    cartItems.forEach(function (item) {
        var row = cartBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);


        cell1.innerHTML = item.name;
        cell2.innerHTML = item.price;
        cell3.innerHTML = item.quantity;
        cell4.innerHTML = item.price * item.quantity;

        totalAmount += item.price * item.quantity;
    });

    var tax = totalAmount * 0.05;
    totalAmount += tax;

    totalAmountElement.textContent = totalAmount;

    document.getElementById('continueButton').style.display = 'block';
}

function clearCart() {
    cartItems = [];
    updateCart();
}
function showForm() {
    document.getElementById("orderForm").style.display = "block";
}
let btn = document.getElementById('submitBtn');
btn.onclick = function () {
    window.alert('تم الشراء بنجاح');
}


/*-----------CAPATCHA------------*/
function refreshCaptcha() {
    var newCaptcha = generateCaptcha();
    document.getElementById("captcha").innerText = newCaptcha;
}
function generateCaptcha() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var captcha = "";

    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}
document.addEventListener("DOMContentLoaded", function () {
    refreshCaptcha();
});
