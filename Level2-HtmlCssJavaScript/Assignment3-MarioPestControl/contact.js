const form = document.contactForm

form.addEventListener('submit', function(event){
    event.preventDefault()

    const firstName = form.firstName.value
    console.log(firstName)
    const lastName = form.lastName.value
    console.log(lastName)

    alert(firstName +' '+ lastName + ', your message has been sent.')

})
  