// crear un formulario el cual tenga
// first name text
// last name text
// birthdate date
// gender radio button
// country select
// lenguajes de ´programacion checkbox  4 opciones
// description text area

// Agregar un botton que al darle click 
// - validar que ningun campo este vacio
// mostar la informacion camptura en un objeto en la consola

// {
//   firstName: 'asdasdasd',
//   birthdate: 112-09-02
// }

// const woman= document.querySelector('#flexRadioDefault1')
// const man= document.querySelector('#flexRadioDefault1')

// woman.addEventListener('click',()=>{})

// man.addEventListener('click',()=>{ })
// if(man===true){
//     alert(man)
// }else{
//     alert(woman)
// }

const btnSave=document.querySelector('#saveBtn')
btnSave.addEventListener('click', ()=>{
        const firstName= document.querySelector('#FirstName').value;
        const lastName= document.querySelector('#LastName').value;
        const birthDate= document.querySelector('#birthDate').value;
        const selectCountry= document.querySelector('#inputGroupSelectCountry').value;
        const textArea= document.querySelector('#ControlTextarea').value;

        if(firstName===''|| lastName===''|| birthDate===''|| selectCountry===''
        || textArea===''){
            alert('Todos los datos son necesarios')
        }

        const obj={
            firstName, 
            lastName,
            birthDate,
            selectCountry,
            textArea,
        }
        console.log(obj)
})

// const formInfo=document.querySelector('#formPersonalInf')
// formInfo.onsubmit = function(e){
//     e.preventDefault();
//     const firstName= document.querySelector('#FirstName').value;
//         const lastName= document.querySelector('#LastName').value;
//         const birthDate= document.querySelector('#birthDate').value;
//         const selectCountry= document.querySelector('#inputGroupSelectCountry').value;
//         const textArea= document.querySelector('#ControlTextarea').value;

//         if(firstName===''|| lastName===''|| birthDate===''|| selectCountry===''
//         || textArea===''){
//             alert('Todos los datos son necesarios')
//         }

//                 const obj={
//             firstName, 
//             lastName,
//             birthDate,
//             selectCountry,
//             textArea,
//         }
//         console.log(obj)
// }


