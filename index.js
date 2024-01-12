document.addEventListener("DOMContentLoaded", ()=> console.log("CONNECTED!!!"))

function showOneCat(cat){
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <img src="${cat.img}"
    width="500"
    height="600">
    <div class="content">
    <h4> Name: ${cat.name}<h4>
    <p> Breed: ${cat.breed}<p>
    <p> Age: ${cat.age}<p>
    <p> Pottytrained: ${cat.pottytrained}<p>
    <p> Sex: ${cat.sex}<p>
    <p> Temperment: ${cat.temperment}<p>
    <p> About Me: ${cat.description}<p>
    <div class="buttons">
    <button> Adopt Me <button>
    <div>
    `
    document.querySelector('#cat-adoptees').appendChild(card)
}

function loadCats() {
    fetch('http://localhost:3000/catData')
    .then(res=> res.json())
    .then(catData => catData.forEach(cat=> showOneCat(cat)))
}

loadCats();