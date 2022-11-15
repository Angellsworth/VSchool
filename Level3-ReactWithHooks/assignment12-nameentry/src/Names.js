import React from "react";

export default function Names() {
    const [names, setNames] = React.useState(
        {name: ""}
        )

    const [dataListArray, setDataListArray] = React.useState([ ])
    
    const listElement = dataListArray.map((fullName, index) => {

    })

    function handleChange(event) {
        const {name, value} = event.target
        setNames(prevNames => {
            return {
                ...prevNames,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        alert("scheduled")
    }
    console.log(names)
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Full Name"
                onChange={handleChange}   
                name="name"
                value={names.name}
            />
            <br />
            
            {/* <select 
                id="serviceRequest"
                value={formData.serviceRequest}
                onChange={handleChange}
                name="serviceRequest"
            >
                <option value="">-- Service --</option>
                <option value="basicCut">Basic Cut</option>
                <option value="cutShave">Cut and Shave</option>
                <option value="hotTowelShave">Hot Towel Shave</option>
                <option value="wax">Facial Waxing</option>
                <option value="beard">Beard Shaping</option>
            
            </select> */}
            <br />
            <br />
            <h1>{names.name}</h1>
        </form>
    )
}