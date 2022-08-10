const todoForm = document.todoform
const editForm = document.getElementById('editForm')
// const clearForm = (todoForm) => {
//   todoForm.title.value = '';
//   todoForm.description.value = '';
//   todoForm.imgUrl.value = '';
// }

todoForm.addEventListener("submit", function(event){
  event.preventDefault()
  
  const newTodo = {
    title: todoForm.title.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value
  }

  axios.post("https://api.vschool.io/angelaEllsworth/todo", newTodo)
    .then(response => getData()) 
    .catch(error => console.log(error))
})

const list = document.getElementById("list")

function getData() {
  axios.get("https://api.vschool.io/angelaEllsworth/todo")
  .then(response => {
    // for (let i = 0; i < response.data.length; i++) {
    //     createToDoElement(response.data[i])
    // }
    createToDoElements(response.data)
  })
}
getData()

function createToDoElements (todoItems) {

        clearList()

        for(let i=0; i < todoItems.length; i++){

        const container = document.createElement("div")
        const checkbox = document.createElement("input")
        const h3 = document.createElement("h3")
        const img = document.createElement('img')
        const editBtn = document.createElement("button")
        editBtn.textContent = "edit";
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "delete"
        const titleTextBox = document.createElement("input")
        const saveButton = document.createElement("button")
        saveButton.textContent = "save"
        const imgUrlTextBox = document.createElement("input")



        container.className = "todoContainer"
        h3.textContent = todoItems[i].title
        img.src = todoItems[i].imgUrl
        img.className = "todoIMG"
        checkbox.type = "checkbox"
        titleTextBox.type = "text"
        titleTextBox.placeholder = "Title"
        titleTextBox.className = "hidden"
        saveButton.className = "hidden"
        imgUrlTextBox.className = "hidden"
        imgUrlTextBox.placeholder = "Image Url"
        titleTextBox.required = true
        imgUrlTextBox.required = true
        

            checkbox.addEventListener("click", function(event){ 
                axios.put(`https://api.vschool.io/angelaEllsworth/todo/${todoItems[i]._id}`, {completed: event.target.checked})
                .then(response => console.log(response))
                .catch(error => console.log(error))
                if (event.target.checked === true){
                    h3.className = "complete"
                } else {
                    h3.className = ""
                }
            })

            if (todoItems[i].completed) {
            checkbox.checked = true
            h3.className = "complete"
            }

            deleteBtn.addEventListener("click", (e) => {
            axios.delete(`https://api.vschool.io/angelaEllsworth/todo/${todoItems[i]._id}`)
            .then(response => getData())
            .catch(error => console.log(error))   
            })

       console.log(editBtn)

        editBtn.addEventListener("click", function(event){
            console.log("The edit button was pressed")
            titleTextBox.className = ""
            h3.className = "hidden"
            saveButton.className = ""
            editBtn.className = "hidden"
            img.className = "hidden"
            imgUrlTextBox.className = ""

            // editForm.style.display = "block"
            // editForm["editTitle"].value = todoItems[i].title

          
        // editForm['save'].addEventListener("click", function(event){
        //     console.log("save button was pressed")
        //     editForm.style.display = "none"
        // })
            
        })

        saveButton.addEventListener("click", function(event){
            if(
                titleTextBox.value !== "" && imgUrlTextBox.value !== "" 
            ){ 
                // If both text boxes are filled out
                axios.put(`https://api.vschool.io/angelaEllsworth/todo/${todoItems[i]._id}`, {
                    title: titleTextBox.value,
                    imgUrl: imgUrlTextBox.value
                })
                .then(response => {
                    console.log("The edit/Save is being attempted")
                    console.log(response.data)
                    img.src = response.data.imgUrl
                    h3.textContent = response.data.title
                    titleTextBox.className = "hidden"
                    imgUrlTextBox.className = "hidden"
                    saveButton.className = "hidden"
                    editBtn.className = ""
                    img.className = "todoIMG" 
                // keep complete classname    
                    if(response.data.completed === true){
                        h3.className = "complete"
                        checkbox.checked = true
                    } else {
                        h3.className = ""
                        checkbox.checked = false
                    } 
                    titleTextBox.value = ""
                    imgUrlTextBox.value = ""
                })
                .catch(error => console.log(error))    
            } 
            // If one or more textboxes are not filled out it goes back to original
            else {
                titleTextBox.className = "hidden"
                imgUrlTextBox.className = "hidden"
                img.className = "todoIMG" 
                saveButton.className = "hidden"
                editBtn.className = ""

                if(todoItems[i].completed === true){
                    h3.className = "complete"
                    checkbox.checked = true
                } else {
                    h3.className = ""
                    checkbox.checked = false
                } 
            }
            
        })
        

        list.appendChild(container)
        container.appendChild(checkbox)
        container.appendChild(h3)
        container.appendChild(titleTextBox)
        container.appendChild(img)
        container.appendChild(imgUrlTextBox)
        container.appendChild(saveButton)
        container.appendChild(editBtn)
        container.appendChild(deleteBtn)

    }
}

function clearList(){
    const el = document.getElementById('list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
} 
// // const button = document.getElementById('delete-button')

// // button.addEventListener("click",function(){
// //     axios.delete("https://api.vschool.io/angelaEllsworth/todo/<id#>")
// //     .then(response => console.log(response))
// //     .catch(error => console.log(error))

// // })

// // // const updateButton = 
// // const updates = {
// //   title: "I changed the Title!!!"
// // }

// // axios.put("https://api.vschool.io/angelaEllsworth/todo/<id#>", updates)
// //   .then(response => console.log(response.data))
// //   .catch(error => console.log(error))


  
// // axios.get("https://api.vschool.io/angelaEllsworth/todo")
// //   .then(res => console.log(res))
// //   .catch(err => console.log(err))