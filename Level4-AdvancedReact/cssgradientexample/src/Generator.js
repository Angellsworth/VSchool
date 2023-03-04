import React, {useState, useEffect, useRef} from 'react'
import ColorInput from "./ColorInput.js"

export default function Generator(){
    //state for saving colors - 
    const [colorList, setColorList] = useState(["#561bb5", "#20DAF6" ])

    //state for gradient angle
    const [angle, setAngle] = useState('0');

    function handleAngleChange(e){
        setAngle(e.target.value)
    }  
    //rendering color inputs
    const colorInputs = colorList.map(function(color, index){
        return (
            <div key={index}>
                <ColorInput 
                    color={color} 
                    index={index}
                    setColorList={setColorList}
                />
            </div>
        )
    })
//useRef and useEffect to generate and easily highlight output
    const [gradientCode, setGradientCode] = useState('')

    useEffect(() => {
        setGradientCode(`backgroundImage: linear-gradient(${angle}deg, ${colorList.toString()})`)
    },[angle, colorList])

    const gradientRef = useRef();
    
    function copyToClipboard(e) {
        gradientRef.current.select();
        document.execCommand('copy');
        e.target.focus();
    };

    return(
        <div className='generator'>
            <div className="color-picker">
                {colorInputs}
                <button
                    onClick={() => setColorList(prevList => [...prevList, "#ffffff" ])}
                >
                    Add Color
                </button>
                <br/>
                <label htmlFor="angle">Gradient Angle</label>
                <input 
                    className='angle-input'
                    type="range"
                    name='angle'
                    id='angle'
                    min='0'
                    max='359'
                    value={angle}
                    onChange={handleAngleChange}
                />
            </div>
            <div 
                className='preview'
                style={{
                    backgroundImage:`linear-gradient(${angle}deg, ${colorList.toString()})`
                }}
            />
            <textarea 
            readOnly
            ref={gradientRef}
            defaultValue={gradientCode} />
            <button 
                onClick={copyToClipboard}
            >
                Copy to Clipboard
            </button>
        </div>
    )
}