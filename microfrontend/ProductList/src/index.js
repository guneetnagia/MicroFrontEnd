import faker from 'faker';

var products = '';

for(let i=0;i<5;i++){
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
}

console.log(products);
document.querySelector("#product-id").innerHTML = products;