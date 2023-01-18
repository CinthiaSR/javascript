import api from './api.js';
// console.log(api)

// mostrar las sigueintes propiedades
// "id": 21,
// "name": "Aqua Morty",
// "status": "unknown",
// "species": "Humanoid",
// "type": "Fish-Person",
// "gender": "Male",
// image



const printAll=((person)=>{ 
    const {id, name, image, status,species,type}= person
    //create div section
    const section = document.querySelector('#divSection')
    const divCard=document.createElement('div')
    divCard.id =id
    divCard.classList.add('card')
    divCard.style = "width: 18rem;";
    section.appendChild(divCard)
    // image
    const cardImg= document.createElement('img')
    cardImg.src=image
    cardImg.classList.add('card-img-top', 'mt-1')
    divCard.appendChild(cardImg)
    //Card Body
    const divContent=document.createElement('div')
    divContent.classList.add('card-body')
    divCard.appendChild(divContent)
    //Card Title
    const nameTitle= document.createElement('h3')
    nameTitle.classList.add("card-title")
    nameTitle.textContent=`Name: ${name}`
    divContent.appendChild(nameTitle)
    //status
    const statusTitle= document.createElement('p')
    statusTitle.classList.add('card-text')
    statusTitle.textContent= `Status: ${status}`
    divContent.appendChild(statusTitle)
    //species
    const speciesTitle=document.createElement('p')
    speciesTitle.classList.add('card-text')
    speciesTitle.textContent= `Species: ${species}`
    divContent.appendChild(speciesTitle)
    //type
    const typeTitle= document.createElement("p")
    typeTitle.classList.add("card-text")
    typeTitle.textContent=`Type: ${type}`
    divContent.appendChild(typeTitle)
    })   


const getData=((list)=>{
    list.forEach(element => {
        printAll(element)
    });
// const allPerson=list.map(element => {
//    const newArray={
//                id: element["id"],
//                name: element["name"],
//                status:element["status"],
//                species:element["species"],
//                type:element["type"],
//                gender: element["gender"],
//                img: element["image"]
//              }  
//              printAll(newArray)
//     });

})
// getData(api)
// console.log(getData(api))

const button=document.querySelector('#test')
button.addEventListener('click', ()=>{
    console.log('dio click')
})
// button.addEventListener('mouseover', ()=>{
//     console.log('evento sobre cursor')
// })
// button.addEventListener('mouseout', ()=>{
//     console.log('evento')
// })
// button.addEventListener('onkeyup', ()=>{
//     console.log('evento')
// })


