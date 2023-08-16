function Product(name, price, type, image, description){
    this.name = name;
    this.price = price;
    this.type = type;
    this.image = image;
    this.description = description;
}

let products = []
products.push(new Product('Lightweight Jacket', 100.00, 'Camisetas', 'https://picsum.photos/600/450/?blur=2', 'Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante...'))
products.push(new Product('Lightweight Jacket', 110.00, 'Camisetas', 'https://picsum.photos/600/450/?blur=2', 'Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante...'))
products.push(new Product('Black Hat', 120.00, 'Camisetas', 'https://picsum.photos/600/450/?blur=2', 'Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante...'))
products.push(new Product('Lightweight Jacket', 130.00, 'Camisetas', 'https://picsum.photos/600/450/?blur=2', 'Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante...'))
products.push(new Product('Lightweight Jacket', 140.00, 'Acessórios', 'https://picsum.photos/600/450/?blur=2', 'Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante...'))
products.push(new Product('Lightweight Jacket', 150.00, 'Camisetas', 'https://picsum.photos/600/450/?blur=2', 'Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante...'))
products.push(new Product('Champion Packable Jacket', 160.00, 'Acessórios', 'https://picsum.photos/600/450/?blur=2', 'Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante...'))
products.push(new Product('Lightweight Jacket', 170.00, 'Camisetas', 'https://picsum.photos/600/450/?blur=2', 'Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante...'))

function productTager(product, id){
        //create html tags
    let cardProduct = document.createElement('div')
    let figure = document.createElement('figure')
    let img = document.createElement('img')
    let div = document.createElement('div')
    let button1 = document.createElement('button')
    let h4 = document.createElement('h4')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let button2 = document.createElement('button')
        //add class
    cardProduct.classList.add('productCard')
    figure.classList.add('flex', 'center')
    div.classList.add('flex')
        //add atributes
    img.setAttribute('src', product.image)
    img.setAttribute('alt', 'Product image reference')
        //add content
    button1.innerText = product.type
    h4.innerText = product.name
    p1.innerText = product.description
    p2.innerText = `R$ ${product.price.toFixed(2)}`
    button2.innerText = 'Adicionar ao carrinho'
        //appends
    cardProduct.append(figure, div)
    figure.append(img)
    div.append(button1, h4, p1, p2, button2)
    button1.addEventListener('click', ()=>{showcase.attShowcase(button1.innerText, 'type')})
    button2.addEventListener('click', ()=>{alert('test')})

    let productTag = {
        id: id,
        product: product,
        card: cardProduct,
    }

    return productTag
}

let showcase = {
    html : document.querySelector('#showcase'),
    products : [],
    attShowcase : (filter, type)=>{
        showcase.products = []
        if(type == 'type'){
            products.map((product, id)=>{
                if(product.type.toUpperCase() == filter.toUpperCase()){
                    showcase.products.push(productTager(product, id))
                }
            })
        }else if(type == 'name'){
            products.map((product, id)=>{
                if(product.name.toUpperCase() == filter.toUpperCase()){
                    showcase.products.push(productTager(product, id))
                }
            })
        }else {
            products.map((product, id)=>{
                showcase.products.push(productTager(product, id))
            })
        }
        showcase.html.innerHTML = ''
        showcase.products.map((product)=>{
            showcase.html.appendChild(product.card)
        })
    },
}

showcase.attShowcase()

const menu = document.querySelector('#menu')
const menuLi = menu.firstElementChild.children
let menuButtons = []
for(i = 0; i < menuLi.length; i++){
    menuButtons.push(menuLi[i].firstElementChild)
}

menuButtons.map((button)=>{button.addEventListener('click',()=>{showcase.attShowcase(button.innerText, button.innerText == 'Todos' ? '' : 'type')})})

const search = document.querySelector('#search')
search.children[1].addEventListener('click', ()=>{showcase.attShowcase(search.children[0].value, 'name')})
            



