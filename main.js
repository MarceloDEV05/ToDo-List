const img = document.getElementById('img-central')
const inputTask = document.getElementById('nameTask')
const btnAddTask = document.getElementById('addTaskList')
const modalTask = document.querySelector('.details-task')
const openModalTask = document.getElementById('addTask')
const closeModalTask = document.getElementById('cancelTask')
const listTask = document.getElementById('list-task')

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
    li.innerHTML = `<li>${inputTask.value}</li>`
    console.log(li)

    listTask.appendChild(li)
    tasks.push(listTask)

    modalTask.style.display="none"
})