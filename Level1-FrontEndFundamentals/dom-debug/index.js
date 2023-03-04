const colors = ["red", "blue", "green"]
console.log(colors)
//changed onclick to click
document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select");
    //added .length to colors
    for (let i = 0; i < colors.length; i++){
        //added document. before createElement
        const option = document.createElement("option"); 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    //changed onchange to change
    dropDown.addEventListener("change", function(e){
        //added .style between parent and backgroundColor
        e.target.parent.style.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    //added .value after ("input")
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


