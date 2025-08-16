import { useState } from "react";

export default function TubeLight() {
    const [isOn, setIsOn] = useState(false);

    const toggleBulb = () => {
        setIsOn(!isOn)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <h1>Assignment no 2</h1>

            <img src={isOn ? '/light-on.png' : '/light-off.png'}
                alt={isOn ? 'bulb on' : 'bulb off'}
                style={{ height: 'auto', width: '150px', marginBottom: '20px' }}
            />

            <button onClick={toggleBulb} style={{ marginTop: '10px' }}>
                Turn{isOn ? 'On' : 'Off'}
            </button>
        </div>
    )
}