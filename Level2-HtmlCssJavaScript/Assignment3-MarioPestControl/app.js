const addForm = document.add
addForm.addEventListener('submit', function(event){
    event.preventDefault()

    let num1 = Number(document.add.num1.value)*5
    let num2 = Number(document.add.num2.value)*7
    let num3 = Number(document.add.num3.value)*11
    let sum = add(num1, num2, num3)

    console.log(typeof num1)
    console.log(typeof num2)
    console.log(typeof num3)

    result = document.getElementById('result')
    result.innerHTML = 'Total Cost: '+ sum + ' coins'

    console.log(sum)
})
 function add(num1, num2, num3){
        return Number(num1) + Number(num2) + Number(num3) 
    }

// const form = document.contactForm

// form.addEventListener('submit', function(event){
//     event.preventDefault()

//     const firstName = form.firstName.value
//     console.log(firstName)
//     const lastName = form.lastName.value
//     console.log(lastName)

//     alert(firstName +' '+ lastName + ', your message has been sent.')

// })
  