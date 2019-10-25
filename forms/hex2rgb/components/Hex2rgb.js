import React, {useState} from 'react';

export default function Hex2rgb(props) {

    const [form, setForm] = useState({
        color: ''
    });

    const [bgColor, setBgColor] = useState({
        color: '#fff'
    });

    const [result, setResult] = useState({
        rgb: ''
    });

    const handleColorChange = ({target}) => {

        let hex = target.value;

        setForm(prevForm => ({...prevForm, color: hex}));

        // if (hex.length >= 7) {

            let result = hex2rgb(hex);

            if (!result) {

                setResult({rgb: 'Ошибка!'});
                setBgColor({color: '#fff'});

            } else {
                let rgb = 'rgb(' + result.r + ', ' + result.g + ', ' + result.b + ')';

                setResult({rgb: rgb});
                setBgColor({color: hex});

            }
        // }

        

    }

    const hex2rgb = hex => {

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;

    }

    return (
        <div style={{backgroundColor: bgColor.color}}>
            <input type="text" name="color" value={form.color} onChange={handleColorChange} />
            <div className="result">{result.rgb}</div>
        </div>
    )
}
