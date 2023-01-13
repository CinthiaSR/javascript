//DESCTRUCTURING
// const list=[{
//     signature:'React',
//     score:8,
// },
// ];

// const list2=[{
//     signature:'JS',
//     score:8,
// },
// {
//     signature:'CSS',
//     score:8,
// },
// ];

// const resultado=[...list,...list2]
// console.log(resultado)


// REDUCE
// Obtener un arreglo de personas vacunadas
// const getVaccinated=()=>{


// }
// getVaccinated(arrayPersons)

// const mentorsArray = [
//     {
//       name: "Ivan Diaz",
//       scores: [
//         {
//           signature: "HTML",
//           score: 8,
//         },
//         {
//           signature: "CSS",
//           score: 10
//         },
//         {
//           signature: "JS",
//           score: 8
//         },
//         {
//           signature: "ReactJS",
//           score: 8
//         }
//       ]
//     },
//     {
//       name: "Alan Medina",
//       scores: [
//         {
//           signature: "HTML",
//           score: 8
//         },
//         {
//           signature: "CSS",
//           score: 7
//         },
//         {
//           signature: "JS",
//           score: 10
//         },
//         {
//           signature: "ReactJS",
//           score: 10
//         }
//       ]
//     },
//     {
//       name: "Elvira Camarillo",
//       scores: [
//         {
//           signature: "HTML",
//           score: 9
//         },
//         {
//           signature: "CSS",
//           score: 9
//         },
       
//         {
//           signature: "ReactJS",
//           score: 9
//         }
//       ]
//     },
//     {
//       name: "Alejandra Paez",
//       scores: [
//         {
//           signature: "HTML",
//           score: 8
//         },
//         {
//           signature: "CSS",
//           score: 10
//         },
       
//         {
//           signature: "ReactJS",
//           score: 10
//         }
//       ]
//     },
//   ];
//   const AverageByMentor = (list) => {
//     let newArray=[]
//    list.map((element)=>{
//         let resultado= element.scores.reduce((accum,item)=>{
//           const materia= item.signature
//           if(newArray.includes(materia)){
//           }else{
//             newArray.push(materia)
//             return accum + item.score
//           }
//         },0)
//         console.log(resultado)
//         }) 
//   }
//   console.log(AverageByMentor(mentorsArray));





  // const AverageByMentor = (list) => {
  //   let newArray=[]
  //  list.map((element)=>{
  //       let resultado= element.scores.reduce((accum,item)=>{
  //        return accum + item.score
  //     },0) 
  //    const averagetotal= resultado/element.scores.length
  //     newArray.push({
  //        mentor: element.name,
  //        average: averagetotal
  //      })
  //     })
  //    return newArray
  // }
  // console.log(AverageByMentor(mentorsArray));

  //recuerda que el map(), ya te devuelve un arreglo, por lo tanto no es 
  //necesario crear una variable aparte, puedes agregarlo con un .push()
  


  const fecha =new Date("1970/01/01");
  // console.log(fecha.getTime())
  
  
  // DATE
  const sumarDias=(fechaActual, dias)=>{
    console.log(fechaActual,dias)
    //tranformar los dias a milisegundos para poder hacer la operacion
    const minuto=60000 //60000 milisegundos en un minuto
    const  hora=minuto*60 //para obtener milisegundos en una hora
    const diaenMilisegundos=hora*24 //obtener miliseundos
    const milisegundosEnDias=diaenMilisegundos*dias
    console.log(milisegundosEnDias)
    const fechaenMilisegundos=fechaActual.getTime()
    console.log(fechaenMilisegundos)
    const fechaFinal= fechaenMilisegundos+ milisegundosEnDias
    console.log(fechaFinal)

    console.log(new Date(fechaFinal))

  }
  sumarDias(fecha, 2);


  // LIBRERIAS PARA TIEMPO
  //LUXON
  // MOMENT