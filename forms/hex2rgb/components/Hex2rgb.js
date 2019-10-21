import React, {useState} from 'react';

export default function Hex2rgb(props) {

    const [form, setForm] = useState({
        color: '',
        rgb: '',
        bgColor: '#fff'
    });

    const handleColorChange = ({target}) => {

        let hex = target.value;
        let rgb = '';
        let bgColor = '#fff';

        if (hex.length >= 7) {

            let result = hex2rgb(hex);

            if (!result) {
                rgb = 'Ошибка!';
            } else {
                rgb = 'rgb(' + result.r + ', ' + result.g + ', ' + result.b + ')';
                bgColor = hex;
            }
        }

        setForm(prevForm => ({...prevForm, color: hex, rgb: rgb, bgColor: bgColor}));

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
        <div style={{backgroundColor: form.bgColor}}>
            <input type="text" name="color" value={form.color} onChange={handleColorChange} />
            <div className="result">{form.rgb}</div>
        </div>
    )
}