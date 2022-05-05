const form = document.clientInfo

//submit event
form.addEventListener('submit',function(event){
    event.preventDefault()
    //grabs name 
    const firstName = form.firstName.value
    console.log(firstName)
    const lastName = form.lastName.value
    console.log(lastName)
    const age = form.age.value
    console.log(age)
    const gender = form.gender.value
    console.log(gender)
    const destination = form.Destination.value
    console.log(destination)
    const mealArray=[]
    if(form.vegetarian.checked){
        mealArray.push(form.vegetarian.value)
    }
    if(form.kosher.checked){
        mealArray.push(form.kosher.value)
    }
    if(form["lactose-free"].checked){
        mealArray.push(form["lactose-free"].value)
    }
    

    
    alert("First Name: " + firstName + '\nLast Name: ' + lastName + '\nAge: ' + age + '\nGender: ' + gender + "\nDestination: " + destination + "\nDietary Restrictions: " + mealArray)
})






