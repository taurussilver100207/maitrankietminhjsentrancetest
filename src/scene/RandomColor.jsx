import { useState } from 'react'

const RandomColor = () => {
    const [colorCode, setColorCode] = useState('');

    const generateRandomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const colorCode = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      setColorCode(colorCode);
      document.body.style.backgroundColor = colorCode; // Change the background color
    };
  
    const copyColorCode = () => {
      navigator.clipboard.writeText(colorCode);
      alert('Color code copied to clipboard!');
    };
  
    return (
    <>
        <div
          className="w-48 h-48 bg-white"
          style={{ backgroundColor: colorCode }}
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold">Color Picker</h1>
          <p className="text-lg">Color code: {colorCode}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={generateRandomColor}
          >
            Generate Random Color
          </button>
          <p className="mt-2"></p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={copyColorCode}
          >
            Copy Color Code
          </button>
        </div>
      </>
    );
}

export default RandomColor