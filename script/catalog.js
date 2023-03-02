//заповнюємо карточки на сторінці каталога
const [...cards] = document.getElementsByClassName("shopping-card");
let filteredItems = [];
const show = (array, i = 0) => {
    displayAll();
    cards.forEach(card => {

        if (i < array.length) { 
            i++;

            const transferLink = card.firstElementChild,
                cardImg = transferLink.children[0],
                cardTitle = transferLink.children[1],
                cardRating = transferLink.children[2],
                cardPrice = transferLink.children[3],
                cardColors = document.createElement("div"),
                cartBtn = card.lastElementChild;

            const imgUrl = array[i - 1].frontUrl,
                title = array[i - 1].title,
                rating = array[i - 1].rating,
                price = array[i - 1].price,
                colors = array[i - 1].colors;

            transferLink.setAttribute("href", `../products/index.html?id=${array[i - 1].id}`);
            card.setAttribute('data-id', array[i - 1].id)
            cardImg.setAttribute("src", imgUrl);
            cardTitle.innerHTML = title;
            cardRating.setAttribute("src", `../image/${rating}-star.png`);
            cardPrice.innerHTML = `As low as <span class="price">$${price}</span>`;
            cardColors.classList.add("card-colors");


            const createColors = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    let newColor = document.createElement("div");
                    newColor.classList.add("product-color");
                    newColor.classList.add(arr[i]);
                    cardPrice.append(cardColors);
                    cardColors.appendChild(newColor);
                }
            };

            createColors(colors);

            const resetCartBtn = () => {
                if (cartBtn.textContent === "VIEW CART") {
                    cartBtn.classList.remove("product-shopping__btn");
                    cartBtn.textContent = "ADD TO CART";
                }
            }

            resetCartBtn();
        }

        else {
            card.classList.add("display-none");
        }


    });


}

function displayAll() {
    cards.forEach(card => {
        card.classList.remove("display-none");
    });
}

show(arrProducts);

//пагінація
const [...paginBtns] = document.querySelectorAll(".pagination li");

function removeActive() {
    paginBtns.forEach(item => {
        if (item.firstElementChild.classList.contains("active")) {
            item.firstElementChild.classList.remove("active");
        }
    })
}

function removeSelection(array) {
    array.forEach(item => {
        if (item.classList.contains("selected")) {
            item.classList.remove("selected");
        }
    })
}

function hidePaginBtns(array) {     
    let currpaginBtns = paginBtns;
    q = Math.ceil(array.length / 10);
    console.log('PaginBtns:', q);

    let btnsHide = currpaginBtns.slice(q, (currpaginBtns.length - 1));
    console.log('PaginBtns:', paginBtns);
    console.log('btnsHide', btnsHide);

    paginBtns.forEach(btn => {
        btn.classList.remove("display-none");
    });

    btnsHide.forEach(btn => {
        btn.classList.add("display-none");
    });

}


function dividePages(event) {
    let array = filteredItems.length > 0 ? filteredItems : arrProducts;
    target = event.target;

    if (!target.classList.contains("active")) {

        if (target.textContent > 0) {

            removeActive();

            let y = target.textContent,
                start = 10 * (y - 1);

            show(array, start);

            target.classList.add("active");

        }

        else {

            let active = paginBtns.find(item => {
                return item.firstElementChild.classList.contains("active")
            });


            if (active.firstElementChild.textContent < 5) {

                let y = parseInt(active.firstElementChild.textContent) + 1,
                    start = 10 * (y - 1);

                show(array, start);

                active.firstElementChild.classList.remove("active");

                active.nextElementSibling.firstElementChild.classList.add("active");
            }


        }
    }
}


paginBtns.forEach(item => {
    item.addEventListener('click', (event) => dividePages(event))
});

//панель вертикальної навігації (фільтр)
const [...vertNavSections] = document.querySelectorAll(".vertical-nav p");

vertNavSections.forEach(item => {
    item.addEventListener('click', event => {

        if (event.target.firstElementChild !== null) {
            let src = event.target.firstElementChild.getAttribute("src"),
                urlVectorDown = "../image/vector-down.svg";

            console.log(event.target.textContent);
            console.log(event.target);

            if (src === urlVectorDown) {
                event.target.firstElementChild.setAttribute("src", "../image/vector-up.svg");
                event.target.nextElementSibling.classList.remove("display-none");
            }

            else {
                event.target.firstElementChild.setAttribute("src", "../image/vector-down.svg");
                event.target.nextElementSibling.classList.add("display-none");
            }
        }



    });

    item.firstElementChild.addEventListener('click', event => {
        let src = event.target.getAttribute("src"),
            urlVectorDown = "../image/vector-down.svg";

        if (src === urlVectorDown) {
            event.target.setAttribute("src", "../image/vector-up.svg");
            event.target.parentElement.nextElementSibling.classList.remove("display-none");
        }

        else {
            event.target.setAttribute("src", "../image/vector-down.svg");
            event.target.parentElement.nextElementSibling.classList.add("display-none");
        }

    });
});

const filterBtn = document.querySelector(".vertical-nav__collapse");
const vertNav = document.querySelector(".vertical-nav");
const products = document.querySelector(".products");



function filterCollapse() {
    if (filterBtn !== null) {
        filterBtn.addEventListener('click', () => {
            vertNav.classList.toggle("vertical-nav_collapsed");
    
        })
    }
}

filterCollapse();

window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        if (vertNav !== null) {
            vertNav.classList.remove("vertical-nav_collapsed");
        }
    }
})

//фільтрація товарів
const [...allSizes] = document.querySelectorAll(".size-box");
const [...allColors] = document.querySelectorAll(".color-box");
const [...allBrands] = document.querySelectorAll(".checkbox");
const selectedColors = [];
const selectedSizes = [];
const selectedBrands = [];

const select = function (array, arrSelected, filterParam, event) {
    array.forEach(() => {

        if (event.target.classList.contains("applied")) {
            event.target.classList.remove("applied");
            const index = arrSelected.indexOf(filterParam);
            arrSelected.splice(index, 1);
        } else {
            event.target.classList.add("applied");

            arrSelected.push(filterParam);
        }

    });
}

const checkBrands = function (event) {

    let brand = event.target.dataset.brand;

    if (event.target.checked) {
        selectedBrands.push(brand);
    } else {
        const index = selectedBrands.indexOf(brand);
        selectedBrands.splice(index, 1);
    }

    console.log('selectedBrands', selectedBrands);
}

function contains(where, what) {
    for (var i = 0; i < what.length; i++) {
        for (var j = 0; j < where.length; j++) {

            if (what[i] == where[j]) {
                break;
            }

            if (j === where.length - 1) {
                return false;
            }
        }
    }
    return true;
}



function filterItems() {

    filteredItems = arrProducts.filter(function (item) {

        if (selectedBrands.length === 0) {
            if (contains(item.sizes, selectedSizes) && contains(item.colors, selectedColors)) {
                return item;
            }
        }

        else {
            if (contains(item.sizes, selectedSizes) && contains(item.colors, selectedColors) && selectedBrands.includes(item.brand)) {
                return item;
            }
        }

    })

};


const filter = function () {

    allSizes.forEach(element => {

        element.addEventListener('click', event => {
            if (paginBtns[0] !== undefined) {
                removeActive();
                paginBtns[0].firstElementChild.classList.add("active");

                select(allSizes, selectedSizes, event.target.textContent, event);

                console.log('selectedSizes', selectedSizes);

                filterItems();

                console.log('filteredItems', filteredItems);

                show(filteredItems);

                hidePaginBtns(filteredItems);
            } else {
                let id = window.location.search.substr(1).split("=")[1] - 1;
                removeSelection(allSizes);

                let size = event.target.textContent;

                event.target.classList.add("selected");
                console.log('size', size);
                localStorage.setItem('cart-' + id + '-size', size);
            }

        })
    });

    allColors.forEach(element => {
        element.addEventListener('click', event => {
            if (paginBtns[0] !== undefined) {
                removeActive();
                paginBtns[0].firstElementChild.classList.add("active");

                select(allColors, selectedColors, event.target.getAttribute("class").split(" ")[1], event);

                console.log('selectedColors', selectedColors);

                filterItems();

                console.log('filterItems', filteredItems);

                show(filteredItems);

                hidePaginBtns(filteredItems);
            } else {
                let id = window.location.search.substr(1).split("=")[1] - 1;
                removeSelection(allColors);

                let color = event.target.getAttribute("class").split(" ")[2];

                event.target.classList.add("selected");

                console.log('color', color);
                localStorage.setItem('cart-' + id + '-color', color);
            }

        })
    });

    allBrands.forEach(element => {
        element.addEventListener('click', event => {
            removeActive();
            paginBtns[0].firstElementChild.classList.add("active");

            checkBrands(event);

            filterItems();

            console.log('filteredItems', filteredItems);

            show(filteredItems);

            hidePaginBtns(filteredItems);
        })
    });

}

filter();


const [...cartBtns] = document.getElementsByClassName("order__btn");
tick = document.querySelector(".svg-icon");


cartBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        if (event.target.textContent === "ADD TO CART") {
            let id = event.target.parentElement.dataset.id - 1;

            tick.classList.remove("display-none");

            event.target.textContent = "VIEW CART";
            event.target.classList.add("product-shopping__btn");

            localStorage.setItem('cart_' + id, JSON.stringify(1));
            localStorage.setItem('tick', true);

        }

        else {
            window.location.href = '../cart/index.html';
        }

    })
});


