import ColorPicker from './ColorPicker';
import Icon from '@mdi/react';
import './App.css';
import { mdiContentCopy } from '@mdi/js';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('#303030');
  const [transmitValue, setTransmitValue] = useState(0);
  const [name, setName] = useState('neo');
  const [index, setIndex] = useState(1);

  const colorValue = {
    red: (parseInt(color.slice(1, 3), 16) / 255).toFixed(2),
    green: (parseInt(color.slice(3, 5), 16) / 255).toFixed(2),
    blue: (parseInt(color.slice(5, 7), 16) / 255).toFixed(2),
  };

  const command = `SET_LED LED=${name} RED=${colorValue.red} GREEN=${colorValue.green} BLUE=${colorValue.blue} INDEX=${index} TRANSMIT=${transmitValue}`;

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  function handleIndexChange(e) {
    const index = Math.max(e.target.value, 1);
    setIndex(index);
  }

  function handleTransmitChange(e) {
    if (transmitValue) {
      e.target.style.backgroundColor = '#444444';
      setTransmitValue(0);
    } else {
      e.target.style.backgroundColor = '#303030';
      setTransmitValue(1);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(command);
  }

  return (
    <div className="container">
      <ColorPicker color={color} onChange={handleColorChange} />
      <div className="configuration">
        <input type="text" className="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" className="index" value={index} onChange={handleIndexChange} />
        <button className="transmit" onClick={handleTransmitChange}>
          Transmit
        </button>
      </div>
      <div className="command-container">
        <input type="text" className="command" value={command} />
        <button className="copy" onClick={handleCopy}>
          <Icon path={mdiContentCopy} size={1} />
        </button>
      </div>
    </div>
  );
}

export default App;
