//отримуємо дані про ід товарів
const cart = [];
const cartTitle = document.querySelector(".cart-title");


function itemQuant() {
    if (cartTitle !== null) {
        cartTitle.firstElementChild.innerHTML = `CART (${cart.length})`;
        if (cart.length === 0) {
            tick.classList.add("display-none");
            localStorage.setItem('tick', false);
        } else {
            tick.classList.remove("display-none");
            localStorage.setItem('tick', true);
        }
    }

}


//заповнюємо корзину
const displayCart = document.getElementById("cart");

let keys = Object.keys(localStorage);

if (displayCart !== null) {
    for (let key of keys) {
        if (key.indexOf("cart_") !== -1) {
            const id = key.split("_")[1];
            const item = document.createElement("div");

            item.classList.add("cart-product");
            item.setAttribute('data-id', id);

            displayCart.appendChild(item);

            cart.push(id);
            //console.log(cart)
        }

    }
}

function isColorSelected(id, arrColors) {
    let color = localStorage.getItem('cart-' + id + '-color');

    if (color == null) {
        localStorage.setItem('cart-' + id + '-color', arrColors[0]);
        return arrColors[0];
    } 

    else {
        return localStorage.getItem('cart-' + id + '-color');
    }
}

function isSizeSelected(id, arrSizes) {
    let size = localStorage.getItem('cart-' + id + '-size');

    if (size == null) {
        localStorage.setItem('cart-' + id + '-size', arrSizes[0]);
    } 
}

function selectSelect(selectId, selectedValue) {
    let [...options] = document.getElementById(selectId).children;

    options.forEach(option => {
        let value = option.textContent;
        if (value == selectedValue) {
            option.setAttribute("selected", "selected");
        }
    });

}

function changeSelection(selectId, id, prop) {
    let mySelect = document.getElementById(selectId);

    mySelect.addEventListener('change', (event) => {
        let colorBox = event.target.parentElement.firstElementChild;       
        let sel = mySelect.selectedIndex;
        let options = mySelect.options;
        let selValue = options[sel].text;

        console.log(selValue);
        localStorage.setItem('cart-'+id+prop, selValue);

        if (colorBox !== null) {
            let [...colorBoxClassList] = colorBox.classList;
            let colorBefore = colorBoxClassList.pop();
            
            colorBox.classList.remove(colorBefore);
            colorBox.classList.add(selValue);
        }

    })
}


function generateOptions(array, selectId) {
    let html = "";

    array.forEach(element => {
        let value = element;

        html += '<option value="' + value + '">' + value + '</option>';

    });

    document.getElementById(selectId).innerHTML = html;

}

const [...cartItems] = document.getElementsByClassName("cart-product");

let sum = 0;

cartItems.forEach(item => {
    const id = Number(item.dataset.id),
        title = arrProducts[id].title,
        article = arrProducts[id].article,
        imgUrl = arrProducts[id].frontUrl,
        price = arrProducts[id].price,
        colors = arrProducts[id].colors,
        sizes = arrProducts[id].sizes,
        quantity = localStorage.getItem('cart_' + id),
        size = localStorage.getItem('cart-' + id + '-size'),
        color = localStorage.getItem('cart-' + id + '-color');

    isSizeSelected(id, sizes);
    //isColorSelected(id, colors);

    item.innerHTML = `<div class="product-front cart-img" style="background-image:url('${imgUrl}')">
    <a href="../products/index.html?id=${id+1}" target="_blank"></a>
</div>

<div class="cart-details">
    <a href="../products/index.html?id=${id+1}" class="cart-details__title"><p>${title}</p>
        <span class="add-info">ITEM # ${article}</span></a>

    <div class="details">
        <div class="product-details-section text-uppercase">
            <p>COLOR:</p>
            <div class="product-colors cart-product-colors">     
                <div class="product-color ${isColorSelected(id, colors)}"></div>
                <select id="selectColor-${id}"></select>
            </div>
        </div>

        <div class="product-details-section text-uppercase">
            <p>SIZE:</p>
            <div class="product-sizes">
                <select id="selectSize-${id}">
                <option> Select </option>
              </select>
            </div>
        </div>
    </div>

</div>

<div class="cart-product-price">$<span>${(price * quantity).toFixed(2)}</span></div>

<div class="quantity">
    <div class="quantity-btn">-</div>
    <p>${quantity}</p>
    <div class="quantity-btn">+</div>
    <div class="remove-btn" title="Remove from cart">✕</div>
</div>`;

    sum += price * quantity;
    generateOptions(sizes, "selectSize-"+id);
    generateOptions(colors, "selectColor-"+id);
    selectSelect("selectSize-"+id, size);
    changeSelection("selectSize-"+id, id, "-size");
    selectSelect("selectColor-"+id, color);
    changeSelection("selectColor-"+id, id, "-color");
});

let orderSection = document.querySelector(".order-section");

function enableOrder(sum) {
    if (orderSection !== null) {
        if (cart.length !== 0) {
            orderSection.innerHTML = `<div class="price">Total: $<span class="cart-price-total">${sum.toFixed(2)}</span></div>
        <btn type="button" class="buy__btn"><a href="#">ORDER</a></btn>`
            tick.classList.remove("display-none");
        }
        else {
            orderSection.innerHTML = "";
            tick.classList.add("display-none");
        }
    }

}

enableOrder(sum);

const [...pickColors] = document.getElementsByClassName("pick-color");

pickColors.forEach(element => {
    element.addEventListener('click', (event) => {
        let i = 0;
        let id = event.target.closest(".cart-product").dataset.id;
        let colors = arrProducts[id].colors;

        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            let colorBox = event.target;

            console.log("colors", colors);

            colorBox.classList.add(color);
            console.log(i)
        }

    })
});

const [...quantityBtns] = document.getElementsByClassName("quantity-btn");

quantityBtns.forEach(element => {
    element.addEventListener('click', event => {
        let sign = event.target.textContent;
        let quantity = event.target.parentElement.children[1];
        let id = event.target.closest(".cart-product").dataset.id;
        let price = arrProducts[id].price;
        let quantityBlock = event.target.closest(".cart-product").children[2];
        let quantityPriceBlock = quantityBlock.children[0];
        let quantityPrice = quantityPriceBlock.textContent;
        let totalBlock = document.querySelector(".cart-price-total");
        let total = parseFloat(totalBlock.textContent);
        total -= quantityPrice;

        let result = price * parseInt(quantity.textContent);
        let value = 0;

        console.log('quantityPrice', quantityPrice);


        if (quantity.textContent >= 1 && sign === "+") {
            let count = quantity.textContent++;
            let totalCount = count + 1;


            quantity.innerHTML = totalCount;

            localStorage.setItem("cart_" + id, totalCount);
            console.log('count', totalCount);
            value = price * totalCount;
            quantityPriceBlock.innerHTML = `${value.toFixed(2)}`;
        }
        else if (quantity.textContent >= 1 && sign === "-") {
            let count = quantity.textContent;
            let totalCount = count - 1;

            if (totalCount === 0) {
                if (confirm("Are you sure you want to remove this item from your cart?")) {
                    removeFromCart(event);
                    return
                } else {
                    return
                }

            }

            quantity.textContent--;

            console.log('totalCount', totalCount);

            quantity.innerHTML = totalCount;

            localStorage.setItem("cart_" + id, totalCount);
            console.log('count', totalCount);
            value = price * totalCount;
            quantityPriceBlock.innerHTML = `${value.toFixed(2)}`;

        }

        total += value;
        console.log('total', total);
        totalBlock.innerHTML = total.toFixed(2);
    })
});

function removeFromCart(event) {
    let childParent = event.target.parentElement,
        parentParent = childParent.parentElement,
        id = parentParent.dataset.id,
        index = cart.indexOf(id),
        totalBlock = document.querySelector(".cart-price-total"),
        total = parseFloat(totalBlock.textContent),
        quantityBlock = event.target.closest(".cart-product").children[2],
        quantityPriceBlock = quantityBlock.children[0],
        quantityPrice = quantityPriceBlock.textContent;

    total -= quantityPrice;

    totalBlock.innerHTML = total.toFixed(2);

    cart.splice(index, 1);
    console.log(cart);

    localStorage.removeItem("cart_" + id);
    localStorage.removeItem("cart-" + id + "-size");
    localStorage.removeItem("cart-" + id + "-color");

    parentParent.remove();

    itemQuant();
}

const [...removeBtns] = document.getElementsByClassName("remove-btn");

removeBtns.forEach(btn => {
    btn.addEventListener('mouseover', (event) => {
        let childParent = event.target.parentElement,
            parentParent = childParent.parentElement;

        parentParent.style.border = "1px solid #A04955";;

    });

    btn.addEventListener('mouseout', (event) => {
        let childParent = event.target.parentElement,
            parentParent = childParent.parentElement;

        parentParent.style.border = "1px solid #D1D1D1";;

    });

    btn.addEventListener('click', (event) => {

        removeFromCart(event);

    })
});


itemQuant();



