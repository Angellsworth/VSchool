const todoForm = document.todoform

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
  .then(response => {
      const h1 = document.createElement("h1")
      h1.textContent = response.data.title
      list.appendChild(h1)
  })
    .catch(error => console.log(error))
})

const list = document.getElementById("list")

function getData() {
  axios.get("https://api.vschool.io/angelaEllsworth/todo")
  .then(response => {
    for (let i = 0; i < response.data.length; i++) {
      const h1 = document.createElement("h1")
      h1.textContent = response.data[i].title
      list.appendChild(h1)
    const img = document.createElement('img')
      img.src = response.data[i].imgUrl
      list.appendChild(img)
    }
  })
}
getData()


// const button = document.getElementById('delete-button')

// button.addEventListener("click",function(){
//     axios.delete("https://api.vschool.io/angelaEllsworth/todo/<id#>")
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

// })

// // const updateButton = 
// const updates = {
//   title: "I changed the Title!!!"
// }

// axios.put("https://api.vschool.io/angelaEllsworth/todo/<id#>", updates)
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error))


  
// axios.get("https://api.vschool.io/angelaEllsworth/todo")
//   .then(rex => console.log(res))
//   .catch(err => console.log(err))