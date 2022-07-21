
const xhr = new XMLHttpRequest()
    //  (method,            url,                  async? T/F)
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const pokeJSON = xhr.responseText
        const data = JSON.parse(pokeJSON)
        console.log(data.objects[0].pokemon)
        pokeData(data.objects[0].pokemon)
    } 
}

function pokeData(arr){
    for(let i = 0; i < 10; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}
