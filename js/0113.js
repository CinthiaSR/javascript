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
    //create div section
    const section = document.querySelector('#divSection')
    const divCard=document.createElement('div')
    divCard.id = person.id
    divCard.classList.add('card')
    divCard.style = "width: 18rem;";
    section.appendChild(divCard)
    // image
    const cardImg= document.createElement('img')
    cardImg.src=person.img
    cardImg.classList.add('card-img-top', 'mt-1')
    divCard.appendChild(cardImg)
    //Card Body
    const divContent=document.createElement('div')
    divContent.classList.add('card-body')
    divCard.appendChild(divContent)
    //Card Title
    const nameTitle= document.createElement('h3')
    nameTitle.classList.add("card-title")
    nameTitle.textContent=`Name: ${person.name}`
    divContent.appendChild(nameTitle)
    //status
    const statusTitle= document.createElement('p')
    statusTitle.classList.add('card-text')
    statusTitle.textContent= `Status: ${person.status}`
    divContent.appendChild(statusTitle)
    //species
    const speciesTitle=document.createElement('p')
    speciesTitle.classList.add('card-text')
    speciesTitle.textContent= `Species: ${person.species}`
    divContent.appendChild(speciesTitle)
    //type
    const typeTitle= document.createElement("p")
    typeTitle.classList.add("card-text")
    typeTitle.textContent=`Type: ${person.type}`
    divContent.appendChild(typeTitle)
    })   


const getData=((list)=>{
const allPerson=list.map(element => {
   const newArray={
               id: element["id"],
               name: element["name"],
               status:element["status"],
               species:element["species"],
               type:element["type"],
               gender: element["gender"],
               img: element["image"]
             }  
             printAll(newArray)
    });
return allPerson
})
console.log(getData(api))

