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
    button2.addEventListener('click', ()=>{cart.addToCart(productToCart(productTag))})

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



           
function productToCart(productTag){
        //create html tags
    let miniCard = document.createElement('div')
    let figure = document.createElement('figure')
    let img = document.createElement('img')
    let div = document.createElement('div')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    let button = document.createElement('button')
        //add class
    miniCard.classList.add('mini-card', 'flex')
    figure.classList.add('flex', 'center')
    img.setAttribute('src', productTag.product.image)
    img.setAttribute('alt', 'Product reference')
    div.classList.add('flex', 'center')
        //appends
    miniCard.append(figure, div)
    figure.append(img)
    div.append(h4, p, button)
        //add content
    h4.innerText = productTag.product.name
    p.innerText = `R$ ${productTag.product.price.toFixed(2)}`
    button.innerText = 'Remover produto'
        //add event listener
    button.addEventListener('click', ()=>{cart.rmvToCart(cartItem.cartId)})
        //to cart
    let cartItem = {
        productId : productTag.id,
        cartId : cart.products.length,
        product : productTag.product,
        mCard : miniCard
    }

    return cartItem
}
            


let cart = {
    html : document.querySelector('#cart-itens'),
    products : [],
    addToCart : (cartItem)=>{
        cart.products.push(cartItem)
        cart.attCart()
    },
    rmvToCart : (cartId)=>{
        cart.products.map((product, indx)=>{
            if(product.cartId == cartId){
                cart.products.splice(indx, 1)                
            }
        })
        cart.attCart()
    },
    attCart : ()=>{
        let totalItens = 0
        let totalValue = 0
        let totalItenshtml = document.querySelector('#cart-resume').children[0].children[1]
        let totalValuehtml = document.querySelector('#cart-resume').children[1].children[1]
        cart.html.innerHTML = ''
        cart.products.map((cartItem)=>{
            cart.html.append(cartItem.mCard)
            totalValue += cartItem.product.price
            totalItens ++
        })
        totalItenshtml.innerText = totalItens == 0 ? ' - ' : totalItens
        totalValuehtml.innerText = totalValue == 0 ? ' - ' : `R$ ${totalValue.toFixed(2)}`
    },
}

const menu = document.querySelector('#menu')
const menuLi = menu.firstElementChild.children
let menuButtons = []
for(i = 0; i < menuLi.length; i++){
    menuButtons.push(menuLi[i].firstElementChild)
}

menuButtons.map((button)=>{button.addEventListener('click',()=>{showcase.attShowcase(button.innerText, button.innerText == 'Todos' ? '' : 'type')})})

const search = document.querySelector('#search')
search.children[1].addEventListener('click', ()=>{showcase.attShowcase(search.children[0].value, 'name')})

const toggleCart = document.querySelector('.toggleCart')
const cartButton = document.querySelector('#cart').children[0]

cartButton.addEventListener('click', ()=>{toggleCart.classList.toggle('toggleCart')})



