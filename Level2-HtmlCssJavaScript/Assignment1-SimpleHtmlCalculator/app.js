let result1 = 'Result'
let result2 = 'Result'
let result3 = 'Result'

document.add.addEventListener('submit', function(event){
    event.preventDefault()

    let num1 = document.add.num1.value
    let num2 = document.add.num2.value
    let sum = add(num1, num2)
    
    result1 = document.getElementById('result1')
    result1.innerHTML = sum

    console.log(sum)
})
 function add(num1, num2){
        return Number(num1) + Number(num2)
    }

   
document.subtract.addEventListener('submit', function(event){
    event.preventDefault()

    let num3 = document.subtract.num3.value
    let num4 = document.subtract.num4.value
    let difference = subtract(num3, num4)

    result2 = document.getElementById('result2')
    result2.innerHTML = difference

    console.log(difference)
})
function subtract(num3, num4){
    return Number(num3) - Number(num4)
}


document.multiply.addEventListener('submit', function(event){
    event.preventDefault()

    let num5 = document.multiply.num5.value
    let num6 = document.multiply.num6.value
    let product = multiply(num5, num6)

    result3 = document.getElementById('result3')
    result3.innerHTML = product
    
    console.log(product)
})
function multiply(num5, num6){
    return Number(num5) * Number(num6)
}




