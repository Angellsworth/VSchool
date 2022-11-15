// // import React from "react"

// // Practice updating state through the following prompts. Try to write these first without testing them in a react app. 

// // 1. Pass in a new color of your choosing in place of the old one. 
    
// //     Hint: we don’t care what the previous color was.
    
    
//     const [color, setColor] = React.useState("pink")
    
//     setColor("purple")
    
    
// // 2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.
    
//     const [color, setColor] = React.useState("pink")

//         function toggleColors() {
//             if (color === "pink") {
//                 setColor("blue")
//             }
//             else if (color === "blue") {
//                 setColor("pink")
//             }
//         }
//         console.log(toggleColors)
    
// 3. Add a new person object to the following `people` array in state. 
// You can hard-code a new object but it must be a person object with 
// `firstName` and `lastName` properties.
// import React from "react"

// export default function addPerson()
    const [people, setPeople] = React.useState([
    	{
    		firstName: "John",
    		lastName: "Smith"
    	}
    ])
    
    setPeople(prevPeople => [...prevPeople, {firstName: "Angela", lastName: "Ellsworth"}])
    console.log(people)
    
    
// // // 4. Change the following state-setting functions to use an implicit return
// // //     A. 

//         const [colors, setColors] = useState(['pink', 'blue'])
//         setColors(prevColors => [...prevColors, 'green'])
        
       
        
// // //     // B. 
      
//         const [countObject, setCountObject] = setState({
//         	count: 0
//         })
//         setCountObject(prevState => {count: prevState.count + 1})

      
        
// // // 5. Update the following state to add an additional property `age` and set the value to `30`, ensuring that the other properties are not overwritten.
   
    
//     const [person, setPerson] = React.useState({
//     		firstName: "John",
//     		lastName: "Smith"
//     })
//         setPerson(prevPerson => {...prevPerson, age: 30}
        
    
// // // 6. What’s wrong with the following state update?
       
//     const [colors, setColor] = setState("pink", "blue")
        
//         setColor("green")
    
    