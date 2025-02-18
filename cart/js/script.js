const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartConfirmBtn = document.getElementById("confirm-order-btn");
const finalConfirmBtn = document.getElementById("final-confirm-btn");
let cartListArray = [];
let totalPrice = 0.0;
let itemCount = 0;

// function to update itemCount
const updateItemCount = (count) => {
    const countElement = document.getElementById("cart-item-count");
    countElement.textContent = count;
}

// function to update totalPrice
const updateTotalPrice = (price) => {
    price = price.toFixed(2)
    const totalPriceElement = document.getElementById('total-price-to-pay');
    totalPriceElement.textContent = `$${price}`;
}
// function to remove item list in cart 
function removeListItem(price) {
    // update totalPrice
    totalPrice -= price;
    updateTotalPrice(totalPrice);
    // upadate empty image
    if (totalPrice === 0) {
        const emptySection = document.getElementById("empty-cart");
        emptySection.style.display = 'flex';
    }
    // update itemCount
    itemCount--;
    updateItemCount(itemCount);
}

// function to add item in cart list
const addItemInCart = (name, price) => {
    // remove empty section 
    const emptySection = document.getElementById("empty-cart");
    emptySection.style.display = 'none';

    //create a item list 
    let itemList = document.createElement('li');
    itemList.classList.add('item');
    itemList.innerHTML = `
                    <div class="item-name">${name}</div>
                    <div class="item-price-detail">
                        <span class="item-price">@ $${price}</span>
                    </div>
                    <button onclick="removeListItem(${price})" class="item-remove-btn"><img src="assets/images/icon-remove-item.svg"
                            alt="remove item"></button>`;

    // add eventlistener in cross(removeListBtn)
    let removeIcon = itemList.querySelector('.item-remove-btn');
    removeIcon.addEventListener('click', () => {
        itemList.remove();
        cartListArray.pop();
    })
    // push item on array
    cartListArray.push(itemList);

    // appent the created item in list container
    const itemListContainer = document.getElementById('item-list');
    itemListContainer.append(itemList);
    // update total price
    price = parseFloat(price);
    totalPrice += price;
    updateTotalPrice(totalPrice)
    // update item count in list
    itemCount++;
    updateItemCount(itemCount);
}


cartConfirmBtn.addEventListener('click', () => {
    if (cartListArray.length === 0) {
        alert("Cart is empty");
    }
    else {
        const confirmWindow = document.getElementById("confirm-window-container");
        const confirmItemList = document.getElementById("confirm-item-list");
        const finalPrice = document.getElementById("final-price-to-pay");
        finalPrice.textContent = "$" + totalPrice;
        confirmWindow.style.display = "flex";
        cartListArray.forEach((item) => {
            confirmItemList.append(item);
        })
    }
})

finalConfirmBtn.addEventListener('click', () => {
    alert("Order confirm")
    window.location.reload();
})


// eventlistener for addtocartbtn
addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        let item = btn.nextElementSibling
        let name = item.children[0].textContent;
        let price = item.children[1].textContent;
        price = price.substr(1);

        addItemInCart(name, price);

        // change btn
        btn.disabled = true;
        btn.textContent = "Added";
        btn.style.color = "white";
        btn.style.background = "var(--primary-color)";

    })
})





