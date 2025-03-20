const img = document.getElementById('img-central')
const inputTask = document.getElementById('nameTask')
const btnAddTask = document.getElementById('addTaskList')
const modalTask = document.querySelector('.details-task')
const openModalTask = document.getElementById('addTask')
const closeModalTask = document.getElementById('cancelTask')
const listTask = document.getElementById('list-task')
const inputDescription = document.getElementById('description')


let tasks = []

openModalTask.addEventListener('click', () => {
    modalTask.style.display = "block"

})

closeModalTask.addEventListener('click', () => {
    modalTask.style.display = 'none'
})


btnAddTask.addEventListener('click', () => {
    img.style.display = 'none'

    const li = document.createElement('li')
    
    li.innerHTML = `<input type="checkbox" class="check"><p>${inputTask.value}</p></br> 
    <p>${inputDescription.value}</p>
     <button id="btnRemove">remover</button>`

    console.log(li)

  const checkbox = li.querySelector('.check')
    checkbox.addEventListener('click', () => {
        if(checkbox.checked){
            li.style.cssText = 'text-decoration:line-through; color:gray;' 
        }else{
            li.style.cssText =  'color:white;'
        }
        
    }) 
  

    listTask.appendChild(li)
    tasks.push(listTask)

    let btn = document.getElementById('btnRemove')
    btn.addEventListener("click", () => {
        listTask.removeChild(li)
        img.style.display = 'block'
    })

    btn.style.cssText = 'padding:10px; border-radius:8px; border:none;'

    modalTask.style.display="none"
    inputTask.value = ""

   
})
