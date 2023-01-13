// document
// console.log(document)
// console.log(window)
const element=document.getElementsByName('test')
// console.log(element)

const elementClass=document.getElementsByClassName('test')
// console.log(elementClass) // para poder acceder al elemento es necesario acceder por posiciones

for (let index = 0; index < elementClass.length; index++) {
    const element = elementClass[index];
    // console.log(elementClass[index])
}
// NodeList se itera con forEach
// HTMLCollection se itera con un for normal accediendo por posicion

const elementById=document.getElementById('principal')
// console.log(elementById)

// console.log(document.querySelectorAll('#principal'))

// .test //para clases
// #test //para id
// h1 //para etiquetas
// input //para etiquetas


//modificar el texto dentro de un tag
// console.log(document.querySelector('h1').textContent='hola Cinthia')


// const list=document.querySelectorAll('#msm')
// // console.log(list)
// list.forEach(element => {
//     console.log(element)
//     element.textContent= 'Hola Cinthia'
// });


// const newElement =document.createElement('div')
// newElement.textContent='este es un nuevo nodo desde js'
// document.body.appendChild(newElement)



const mentorsArray = [
    {
      name: "Ivan Diaz",
      scores: [
        {
          signature: "HTML",
          score: 8,
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 8
        },
        {
          signature: "ReactJS",
          score: 8
        }
      ]
    },
    {
      name: "Alan Medina",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 7
        },
        {
          signature: "JS",
          score: 10
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
    {
      name: "Elvira Camarillo",
      scores: [
        {
          signature: "HTML",
          score: 9
        },
        {
          signature: "CSS",
          score: 9
        },
       
        {
          signature: "ReactJS",
          score: 9
        }
      ]
    },
    {
      name: "Alejandra Paez",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 10
        },
       
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
  ];

  const AverageByMnetor=((list)=>{
   const AverageList= list.map(({scores, name})=>{
       const suma= scores.reduce((accum,iterator)=>{
            return accum + iterator.score
        },0)
        const average= suma/scores.length
        const newElement= document.createElement('div')
        newElement.textContent=`${name} ${average}`
        document.body.appendChild(newElement)
        // return{name:name, average, }
    })
    return AverageList
  })
  console.log(AverageByMnetor(mentorsArray))
  