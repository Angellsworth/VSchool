import React, {useState} from "react"
import { ChromePicker } from "react-color";

export default React.memo (function ColorInput(props){
    const {color, index, setColorList} = props;

    const [displayPicker, setDisplayPicker] = useState(false);

    const [pickerColor, setPickerColor] = useState(color)

    return (
        <div className='input-container'>
            <label htmlFor={index}>Color {index + 1}</label>
            <input 
                type='text'
                className='color-input'
                placeholder={color}
                value={pickerColor}
                onChange={(e) => setPickerColor(e.target.value)}
                onFocus={() => setDisplayPicker(true)}
                name={index}
            />
            <button 
                onClick={(e) => {
                    setColorList(prev => {
                        const newList = [...prev]
                        newList[index] = pickerColor;
                        return newList
                    });
                    setDisplayPicker(false);
                }}
            >
                Save
            </button>
            {index >= 2 && 
                <button 
                    onClick={() => 
                        setColorList(prevList => {
                            const newList = [...prevList]
                            newList.splice(index, 1)
                            return newList
                        })
                    }
                >
                    Delete
                </button>
            }
            {displayPicker && 
            <ChromePicker
                color={pickerColor}
                onChange={pickerColor => {
                    setPickerColor(pickerColor.hex)
                }}
            />}
        </div>
    )
})