import "./App.css"
import {useState} from "react" 
import Form from "./Form"
 

function App() {
  
  const [list, setlist] = useState([ ])
  const listArray = list.map(names => <li>{names.firstName} {names.lastName}</li>)

  function addToList(addName) {
    setlist([...list, addName])
  }

  return (
    <div className="App">
      <h2>Add New Name</h2>
      <Form 
        addToList = {addToList}
        />
        <h1>Names</h1>
        {listArray}

    </div>
  )
}

export default App;

