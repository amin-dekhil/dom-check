var articles = document.querySelectorAll('article')

function calcsum(){
    let sum=0
    for (i=0; i<articles.length -1; i++){
    price = parseInt(articles[i].children[5].children[0].innerHTML)
    sum += price
}
document.querySelector('#price').innerHTML = sum;
}
calcsum();

for (i=0; i<articles.length -1; i++){
    let quantity = articles[i].children[3];
    let price = articles[i].children[5].children[0];

    articles[i].children[2].addEventListener('click', function() {
        if(parseInt(quantity.innerHTML) > 0){
            quantity.innerHTML = parseInt(quantity.innerHTML) -1
            price.innerHTML = parseInt(quantity.innerHTML) *100
        }
        calcsum()
    })

    articles[i].children[4].addEventListener('click', function() {
        if(parseInt(quantity.innerHTML) >0){
            quantity.innerHTML = parseInt(quantity.innerHTML) +1
            price.innerHTML = parseInt(quantity.innerHTML) *100
        }
        calcsum()
    })

    articles[i].children[6].addEventListener('click', function(e){
        e.target.parentElement.remove()
        articles = document.querySelectorAll('article')
        calcsum()
    })

    articles[i].children[7].addEventListener('click', function(e){
        if(e.target.classList.contains('far'))
        e.target.classList.replace('far', 'fas')
        else 
        e.target.classList.replace('fas', 'far')
    })
}