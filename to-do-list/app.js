const newInput = document.querySelector('#addNew')
const ulDOM = document.querySelector('ul')

// let tasks = []
// //local storage getting method..
// if(localStorage.getItem('tasks')){
//     tasks  = JSON.parse(localStorage.getItem('tasks'))
//      // to take a value tasks where achieve the ul>li 
//     tasks.forEach(task => {
//         const liMaker = document.createElement('li')
//         liMaker.innerHTML =  `${task} <button id="removeBtn" class= "removeBtn">&times;</button>`
//         ulDOM.appendChild(liMaker)
//     })
// }
// TRIED TO STORE AS A ARRAY...


const alertBox = document.createElement('div')
const addButton = document.querySelector('.addBtn')

const userName = prompt('Please, enter your name: ')
const nameGet = document.querySelector('h1')
nameGet.innerHTML = ` ${userName.toUpperCase()} 's `

        
addButton.addEventListener('click', toDoFunc)

function toDoFunc(){
    if(!newInput.value.trim()){
        showAlertMsg()
    }else{
        showAlertMsg()
        // const taskValue = newInput.value.trim()
        // tasks.push(taskValue)
        // localStorage.setItem('tasks', JSON.stringify(tasks))

        const liMaker = document.createElement('li')
        liMaker.innerHTML =  `
        ${newInput.value.trim()} <button id="removeBtn" class= "removeBtn">&times;</button>
        `
        ulDOM.appendChild(liMaker)
    }
    newInput.value = ""
    saveData()
}


newInput.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
       // console.log("enter key pressed!!")
        toDoFunc()
    }
})

ulDOM.addEventListener('click' , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('mission-done')
        saveData()
    }else if(e.target.classList.contains('removeBtn')){
        const listMember = e.target.parentElement
        // const taskValue = newInput.value.trim()
        // const taskIndex = tasks.indexOf(taskValue)
        // if(taskIndex !== -1){
        //     tasks.splice(taskIndex , 1)
        //     localStorage.setItem('tasks', JSON.stringify(tasks))
        // } 
        //older form of the localstorage. Done the way that is simple one to store them.
        listMember.remove()
        saveData()
    }
})

function showAlertMsg(){
    if(!newInput.value.trim()){
        // console.log("showAlertMsg called!")
        alertBox.className = "error-alert"
        alertBox.textContent = 'You cannot leave it empty!!'
        document.body.appendChild(alertBox)
    }else{      
        alertBox.className = "success-alert"
        alertBox.textContent = 'Your mission is been added properly!'
        document.body.appendChild(alertBox)
    }
    alertBox.style.display = "block"
    setTimeout(hideAlertMsg, 1500)
}

function hideAlertMsg(){
    alertBox.style.display = "none"
}

function saveData(){
    localStorage.setItem('tasks', ulDOM.innerHTML)
}

function showToDo(){
    ulDOM.innerHTML = localStorage.getItem('tasks')
}
showToDo()