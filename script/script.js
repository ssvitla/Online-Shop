class Product {
  constructor(id, title, article, brand, frontUrl, rearUrl, rating, reviews, price, arrSize, arrColors) {
    this.id = id;
    this.title = title;
    this.article = article;
    this.brand = brand;
    this.frontUrl = frontUrl;
    this.rearUrl = rearUrl;
    this.rating = rating;
    this.reviews = reviews;
    this.price = price;
    this.sizes = arrSize;
    this.colors = arrColors;
  }
}

const arrProducts = [
  new Product(1, "SPORTIF'S ORIGINAL SHORT", "670170", "Sportif", "../image/sportif-original-short-front.png", "../image/sportif-original-short-rear.png", 5, 93, "67.00", [30, 32, 34, 36, 38, 40, 42, 44, 46], ["black", "beige", "brown", "navy", "grey"]),
  new Product(2, "MARCHAL'S ORIGINAL CARGO SHORT", "670171", "Sportif", "../image/original-cargo-short-front.jpg", "../image/original-cargo-short-rear.jpeg", 5, 65, "40.99", [36, 38, 40, 42, 46], ["black", "beige", "brown", "grey"]),
  new Product(3, "SPORTIF'S TIDEWATER SHORT", "670178", "Sportif", "../image/tidewater-short-front.jpg", "../image/tidewater-short-rear.jpg", 4, 17, "58.70", [36, 38, 40, 44, 46], ["black", "beige", "blue", "grey"]),
  new Product(4, "SPORTIF'S LAUDERDALE SHORT", "670184", "Sportif", "../image/lauderdale-short-front.jpg", "../image/lauderdale-short-rear.jpg", 3, 2, "77.00", [40, 44, 46], ["black", "beige", "brown", "blue", "grey"]),
  new Product(5, "GALAPAGOS PLAIN SHORT", "670197", "Sportif", "../image/galapagos-short-front.jpeg", "../image/galapagos-short-rear.jpg", 4, 2, "69.00", [30, 32, 34, 36, 42], ["black", "navy"]),
  new Product(6, "INLET ORIGINAL SHORT", "670201", "Sportif", "../image/inlet-original-short-front.jpeg", "../image/inlet-original-short-rear.jpeg", 5, 124, "38.99", [30, 36, 38, 40, 42], ["black", "navy", "blue", "grey"]),
  new Product(7, "HOOK & TACKLE ORIGINAL SHORT", "680399", "Hook & Tackle", "../image/beer-can-island-short-front.jpg", "../image/beer-can-island-short-rear.jpg", 5, 88, "56.99", [34, 40, 42], ["black", "navy", "blue", "grey"]),
  new Product(8, "ECOTHS BY SPORTIF GO TO SHORT", "670389", "Sportif", "../image/ecoths-go-to-short-front.jpg", "../image/ecoths-go-to-short-rear.jpg", 3, 11, "43.99", [34, 36, 38], ["black", "navy"]),
  new Product(9, "INLET ORIGINAL PANT", "670412", "Sportif", "../image/inlet-original-pant-front.jpeg", "../image/inlet-original-pant-rear.jpg", 4, 99, "52.99", [38, 40, 42, 44, 46], ["black", "navy", "grey"]),
  new Product(10, "TGIF PANT", "670525", "Sportif", "../image/tgif-pant-front.jpg", "../image/tgif-pant-rear.jpg", 4, 38, "40.99", [38, 40, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(11, "WEEKENDER DECK DRAW CORD SHORT", "670408", "Sportif", "../image/weekender-short-front.jpg", "../image/weekender-short-rear.jpg", 3, 9, "75.15", [32, 34, 36, 38, 40, 42, 44, 46], ["black", "navy", "grey"]),
  new Product(12, "SPORTIF'S ORIGINAL PANT", "670409", "Sportif", "../image/original-pant-front.jpeg", "../image/original-pant-rear.jpg", 5, 99, "92.99", [38, 40, 44, 46], ["black", "navy", "grey"]),
  new Product(13, "ECOTHS BY SPORTIF HYBRID SHORT", "670347", "Sportif", "../image/ecoths-hybrid-short-front.jpg", "../image/ecoths-hybrid-short-rear.jpg", 3, 8, "62.89", [34, 36, 38, 40, 44, 46], ["black", "navy"]),
  new Product(14, "SPORTIF'S CALCUTTA CHINOS", "670414", "Sportif", "../image/calcutta-chinos-front.jpeg", "../image/calcutta-chinos-rear.jpeg", 5, 39, "55.77", [32, 38, 40, 44, 46], ["black", "navy", "grey"]),
  new Product(15, "ECOTHS BY SPORTIF CHAMBERS PAJAMA PANT", "670418", "Sportif", "../image/ecoths-pajama-pant-front.jpg", "../image/ecoths-pajama-pant-rear.jpg", 5, 85, "40.00", [38, 40, 44, 46], ["black", "brown", "blue", "grey"]),
  new Product(16, "HOOK & TACKLE ISLAND PANT", "680524", "Hook & Tackle", "../image/hook-tackle-pant-front.jpg", "../image/hook-tackle-pant-rear.jpg", 5, 33, "52.00", [38, 40, 44, 46], ["black", "brown", "blue", "grey"]),
  new Product(17, "RJC BAYSIDE PULL-ON SHORTS", "670348", "Sportif", "../image/RJC-bayside-shorts-front.jpg", "../image/RJC-bayside-shorts-rear.jpg", 4, 8, "67.90", [34, 36, 38, 40, 44, 46], ["black", "brown", "navy"]),
  new Product(18, "adidas Men's Essentials Logo Pants", "780525", "adidas", "../image/adidas-logo-pants-front.jpg", "../image/adidas-logo-pants-rear.jpg", 3, 37, "92.99", [36, 40, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(19, "adidas Men's Training Pants", "780526", "adidas", "../image/adidas-training-pants-front.jpg", "../image/adidas-training-pants-rear.jpg", 4, 37, "92.99", [38, 40, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(20, "adidas Men's Climawarm Fleece Pant", "780527", "adidas", "../image/adidas-fleece-front.jpg", "../image/adidas-fleece-rear.jpg", 3, 37, "74.15", [38, 40, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(21, "adidas Men's Tapered Pants", "780528", "adidas", "../image/adidas-tampered-front.jpg", "../image/adidas-tampered-rear.jpg", 5, 37, "74.15", [32, 38, 40, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(22, "adidas Men's Soccer Training Pants", "780529", "adidas", "../image/adidas-soccer-pants-front.jpg", "../image/adidas-soccer-pants-rear.jpg", 5, 37, "74.15", [36, 38, 40, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(23, "adidas Colombia Sweat Pants Men's", "780530", "adidas", "../image/adidas-colombia-pants-front.jpg", "../image/adidas-colombia-pants-rear.jpg", 3, 40, "101.30", [38, 40], ["black", "brown", "blue", "grey", "white"]),
  new Product(24, "Under Armour Men's Tactical Patrol Pants", "870100", "Under Armour", "../image/under-armour-patrol-pants-front.jpg", "../image/under-armour-patrol-pants-rear.jpg", 5, 42, "99.99", [30, 38, 40, 42, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(25, "Under Armour Men's Tricot Joggers", "870101", "Under Armour", "../image/under-armour-joggers-front.jpg", "../image/under-armour-joggers-rear.jpg", 5, 42, "99.99", [32, 34, 36, 40, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(26, "Under Armour Men's Armour Twist Pants", "870102", "Under Armour", "../image/under-armour-twister-pants-front.jpg", "../image/under-armour-twister-pants-rear.jpg", 5, 42, "99.99", [34, 36, 40, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(27, "Under Armour Men's Knicker Pants", "870103", "Under Armour", "../image/under-armour-knicker-pants-front.jpg", "../image/under-armour-knicker-pants-rear.jpg", 5, 42, "99.99", [38, 40, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(28, "Jerzees 8 oz. 50/50 Fleece Sweatpants", "990100", "Jerzees", "../image/jerzees-sweatpants-front.jpg", "../image/jerzees-sweatpants-rear.jpg", 5, 42, "99.99", [32, 36, 40, 42, 44, 46], ["black", "brown", "blue", "grey", "white"]),
  new Product(29, "Champion Men's Pullover Hoodie", "980101", "Champion", "../image/champion-pullover-hoodie-front.jpg", "../image/champion-pullover-hoodie-rear.jpg", 5, 42, "84.99", [34, 38, 40, 44, 46], ["black", "blue", "yellow", "white"]),
  new Product(30, "Champion Men's Powerblend Hoodie", "980102", "Champion", "../image/champion-powerblend-hoodie-front.jpg", "../image/champion-powerblend-hoodie-rear.jpg", 4, 58, "78.00", [32, 38, 40, 42, 44, 46], ["blue", "yellow", "white"]),
  new Product(31, "Champion Reverse Weave Pullover", "980102", "Champion", "../image/champion-reverse-pullover-front.jpg", "../image/champion-reverse-pullover-rear.jpg", 4, 58, "78.00", [38, 40, 42, 44, 46], ["blue", "yellow", "white"]),
  new Product(32, "Champion Men’s Heavyweight Zip Hoodie Jacket", "980102", "Champion", "../image/champion-heavyweight-jacket-front.jpg", "../image/champion-heavyweight-jacket-rear.jpg", 5, 58, "78.00", [34, 38, 40, 42, 44, 46], ["blue", "yellow", "green", "white"]),
  new Product(33, "Under Armour Men's Fleece Full Zip Hoodie", "980102", "Under Armour", "../image/under-armour-fleece-hoodie-front.jpg", "../image/under-armour-fleece-hoodie-rear.jpg", 5, 58, "78.00", [38, 40, 42, 44, 46], ["black"]),
  new Product(34, "Nike Men's NSW Club Full Zip Hoodie", "980102", "Nike", "../image/nike-full-zip-hoodie-front.jpg", "../image/nike-full-zip-hoodie-rear.jpg", 5, 58, "78.00", [38, 40, 42, 44, 46], ["yellow"]),
  new Product(35, "Nike mens Pull Over Hoodie", "980102", "Nike", "../image/nike-mens-pullover-front.jpg", "../image/nike-mens-pullover-rear.jpg", 5, 58, "78.00", [30, 38, 40, 42, 44, 46], ["black", "blue", "yellow"]),
  new Product(36, "Nike Sportswear Lined Jacket", "980102", "Nike", "../image/nike-sportswear-jacket-front.jpg", "../image/nike-sportswear-jacket-rear.jpg", 5, 58, "78.00", [38, 40, 42, 44, 46], ["black", "grey"]),
  new Product(37, "Lacoste Men's LS Solid Crewneck", "980102", "Lacoste", "../image/lacoste-solid-crewneck-front.jpg", "../image/lacoste-solid-crewneck-rear.jpg", 5, 58, "78.00", [36, 38, 40, 42, 44, 46], ["black", "grey", "beige", "brown", "navy"]),
  new Product(38, "Lacoste Men's Long Sleeve Sweatshirt", "980102", "Lacoste", "../image/lacoste-long-sleeve-sweatshirt-front.jpg", "../image/lacoste-long-sleeve-sweatshirt-rear.jpg", 5, 58, "78.00", [36, 38, 40, 42, 44, 46], ["black", "blue", "green", "grey"]),
  new Product(39, "Lacoste Sport Full Zip Hoodie", "980102", "Lacoste", "../image/lacoste-sport-hoodie-front.jpg", "../image/lacoste-sport-hoodie-rear.jpg", 4, 58, "78.00", [34, 36, 38, 40, 42, 44, 46], ["grey", "white"]),
  new Product(40, "Lacoste Men's Kangaroo Pocket Sweatshirt", "980102", "Lacoste", "../image/lacoste-kangaroo-sweatshirt-front.jpg", "../image/lacoste-kangaroo-sweatshirt-rear.jpg", 5, 58, "78.00", [34, 36, 38, 40, 42, 44, 46], ["beige", "brown"]),
  new Product(41, "Under Armour Men's Blitzing 3.0 Cap", "980102", "Under Armour", "../image/under-armour-blitzing-cap-front.jpg", "../image/under-armour-blitzing-cap-rear.jpg", 5, 41, "18.00", [34, 36, 46], ["black", "brown"]),
  new Product(42, "Under Armour Men's Launch Run Hat", "980102", "Under Armour", "../image/under-armour-run-hat-front.jpg", "../image/under-armour-run-hat-rear.jpg", 5, 41, "25.00", [36, 46], ["white"]),
  new Product(43, "Nike Unisex Beanie Cuffed", "980102", "Nike", "../image/nike-unisex-beanie-front.jpg", "../image/nike-unisex-beanie-rear.jpg", 5, 41, "30.99", [36, 46], ["black"]),
  new Product(44, "Champion Ribbed Knit Cap", "980102", "Champion", "../image/champion-ribbed-knit-cap-front.jpg", "../image/champion-ribbed-knit-cap-rear.jpg", 5, 41, "30.99", [34, 36, 46], ["white"]),
  new Product(45, "adidas Men's Superlite Relaxed Fit Hat", "980102", "adidas", "../image/adidas-superlite-relaxed-hat-front.jpg", "../image/adidas-superlite-relaxed-hat-rear.jpg", 5, 41, "28.99", [36, 46], ["blue", "white"]),
  new Product(46, "Under Armour Men's Webbed Belt", "980102", "Under Armour", "../image/under-armour-belt-front.jpg", "../image/under-armour-belt-rear.jpg", 5, 41, "15.99", [36, 46], ["blue", "black"]),
  new Product(47, "SPORTIF'S LEATHER TAB COTTON BELT", "980102", "Sportif", "../image/sportif-cotton-belt-front.jpg", "../image/sportif-cotton-belt-rear.jpg", 5, 41, "14.99", [36, 46], ["black", "beige"]),
  new Product(48, "Nike Men's Buckle Belt Straps", "980102", "Nike", "../image/nike-buckle-belt-front.jpg", "../image/nike-buckle-belt-rear.jpg", 5, 41, "14.99", [36, 46], ["black", "brown", "beige"]),
  new Product(49, "Nike Men's ACU Fit Ratchet Belt", "980102", "Nike", "../image/nike-acu-ratchet-belt-front.jpg", "../image/nike-acu-ratchet-belt-rear.jpg", 5, 41, "14.99", [36, 46], ["black", "white"]),
  new Product(50, "Nike mens Swoosh Laser Loop Reversible Belt", "980102", "Nike", "../image/nike-reversible-belt-front.jpg", "../image/nike-reversible-belt-rear.jpg", 5, 41, "14.99", [36, 46], ["black", "beige"])
]

//перевіряємо корзину на наявність товарів
let tick = document.querySelector(".svg-icon");

function showTick() {
  if (localStorage.getItem('tick') == "true") {
    tick.classList.remove('display-none');
    console.log("+");
  }
  else {
    console.log("-");
  }
}

showTick();

