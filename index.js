document.addEventListener("DOMContentLoaded", ()=> {
    loadCats();
    searchCats();
});

const searchInput = document.querySelector("#search");
const catsContainer = document.querySelector('.cat-cards-grid')
function showOneCat(cat){
    let card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <div class="card-header card-image">
    <img src="${cat.img}"/>
    </div>
    <div class="cat-card-body">
    <h2>${cat.name}</h2>
    <div> Breed: ${cat.breed}</div>
    <div> Age: ${cat.age}</div>
    <div> Housetrained: ${cat.housetrained}</div>
    <div> Sex: ${cat.sex}</div>
    <div> Temperament: ${cat.temperament}</div>
    <div> About Me: ${cat.description}</div>
    <div class="card-footer">
    <button class="btn"> Adopt Me </button>
    <button class="btn btn-outline"> Contact Seller</button>
    <button class="like-btn"> &#128150 </button>
    </div>
    `
    let firstEmoji = true
    const likeBtn = card.querySelector('.like-btn')

    likeBtn.addEventListener('click', (e)=>{
        if(firstEmoji) {
            likeBtn.innerHTML = '&#128571'
        } else {
            likeBtn.innerHTML = '&#128150'
        }
        firstEmoji = !firstEmoji
    })

    const adoptbtn = card.querySelector('.btn')
    adoptbtn.addEventListener("click", (e)=>{
        alert("Thank you for showing interest. We will reach out to you shortly.")
    })

    const contactSellerBtn = card.querySelector('.btn.btn-outline')
    contactSellerBtn.addEventListener('click', (e) =>(
        alert("Have questions? Someone will reach out with any information you might need.")
    ))
    catsContainer.appendChild(card)
}
 let cats = []
function loadCats() {
    fetch('http://localhost:3000/catData')
    .then(res=> res.json())
    .then(catData => {
         cats = catData
        catData.forEach(showOneCat);
        //catData.forEach(cat =>showOneCat(cat));
    });
}

 
function searchCats() {  
    searchInput.addEventListener("input", (e) => { 
        const value = e.target.value.toLowerCase(); 
        console.log(value)
        console.log(cats)
        catsContainer.innerHTML = ""
         cats.forEach((cat) => 
        { const isVisible = cat.name.toLowerCase().includes(value)
        // cat.breed.includes(value) || 
        // cat.age.includes(value) || 
        // cat.sex.includes(value) || 
        // cat.temperament.includes(value) || 
        // cat.housetrained.includes(value)
        if (isVisible){
            showOneCat(cat)
        }
     })
     })
     }
