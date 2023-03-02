console.log(window.location.search.substr(1));

let id = window.location.search.substr(1).split("=")[1] - 1;

const breadcrumbProductLink = document.querySelector("ul.breadcrumb li:last-child"),
itemTitle = document.querySelector(".product-details__title"),
imgMain = document.querySelector(".main-img"),
imgFront = document.querySelector(".product-front"),
imgRear = document.querySelector(".product-rear"),
itemRating = document.querySelector(".product-details-rating"),
itemReviews = document.querySelector(".reviews"),
itemPrice = document.querySelector(".product-details-price"),
itemColors = document.querySelector(".product-colors"),
itemSizes = document.querySelector(".product-sizes"),
orderBtn = document.querySelector(".order__btn");

const title = arrProducts[id].title,
article = arrProducts[id].article,
imgFrontUrl = arrProducts[id].frontUrl,
imgRearUrl = arrProducts[id].rearUrl,
rating = arrProducts[id].rating,
reviews = arrProducts[id].reviews,
price = arrProducts[id].price,
colors = arrProducts[id].colors,
sizes = arrProducts[id].sizes;

itemTitle.innerHTML = `${title} <span class="add-info">ITEM ${article}</span>`;
breadcrumbProductLink.innerHTML = `<a href="#">${title}</a>`;
imgMain.setAttribute("src", imgFrontUrl);
imgFront.style.backgroundImage = `url('${imgFrontUrl}')`;
imgRear.style.backgroundImage = `url('${imgRearUrl}')`;
itemRating.setAttribute("src", `../image/${rating}-star.png`);
itemReviews.innerHTML = `${reviews} REVIEWS`;
itemPrice.innerHTML = `$${price}`;
orderBtn.setAttribute('data-id', id + 1);

const createColors = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let newColor = document.createElement("div");
        newColor.classList.add("color-box", "product-color");
        newColor.classList.add(arr[i]);
        itemColors.appendChild(newColor);
      }
},

createSizes = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let newSize = document.createElement("div");
        newSize.classList.add("size-box", "product-size");
        newSize.innerText = (arr[i]);
        itemSizes.appendChild(newSize);
      }
};

createColors(colors);
createSizes(sizes);

const mainImg = document.querySelector(".main-img");

mainImg.addEventListener('click', () => {
  mainImg.classList.toggle("magnified");
})

const [...previewImgs] = document.getElementsByClassName("product-preview");

previewImgs.forEach(element => {
    element.addEventListener('click', event => {
      let bgImg = event.target.style.backgroundImage,
      url = bgImg.substring(5, bgImg.length-2);

      removeSelection(previewImgs);

      event.target.classList.add("selected");
      mainImg.setAttribute('src', url);
      
    })
});

