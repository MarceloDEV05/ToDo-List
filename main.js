

let input = document.querySelector('.nameTask')
let button = document.querySelector('.addTask')
let ul = document.querySelector('ul')
let alertMessage = document.getElementById('alert-message')
let partImg = document.querySelector(".part-img")


let list = []

button.addEventListener('click', () => {

    partImg.style.display = "none"

    let liElement = document.createElement('li')
    liElement.innerHTML = `<input id="check" type="checkbox"> ${input.value}`



    input.style.borderColor = '#000'

    ul.appendChild(liElement)

    let btnElement = document.createElement('button')
    btnElement.innerHTML = `<i class="fa-solid fa-trash"></i>`
    btnElement.style.background = 'none'
    btnElement.style.marginLeft = '320px'
    btnElement.style.border = 'none'
    btnElement.addEventListener('click', () => {
        ul.removeChild(liElement)
        ul.removeChild(btnElement)


        if (ul.children.length === 0) {
            partImg.style.display = "block"
        }

    })

    
    ul.appendChild(btnElement)

    list.push(ul)



    console.log(list)

    if (input.value === "") {

        input.style.border = "1px solid"
        input.style.borderColor = "#cf0e0e"
        ul.removeChild(liElement)
        ul.removeChild(btnElement)

        alertMessage.style.display = "block"

    }

    input.value = ""

  


})


