1. What is "conditional rendering"?
    When we want to only sometimes display something on the page based on a condition of some sort.


2. When would you use &&?
    When you want to either display something or NOT display it.


3. When would you use a ternary?
    When you need to decide which thing among 2 options to display.

        function App() {
            return (
                <div>{____ ? <SomeJSXElement /> : <SomeOtherElement>}</div>
            )
        }


4. What if you need to decide between > 2 options on
   what to display?
    If you need to decide between more than 2 options use an "If...else if...else" conditional or a "switch" statement


        function App() {
            let someVar
            if () {
                someVar = <SomeJSX />
            } else if() {
                ...
            } else {
                ...
            }
            return (
                <div>{someVar}</div>
            )
        }

    

