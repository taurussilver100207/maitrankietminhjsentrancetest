import { useState } from 'react'
import { ChromePicker } from 'react-color';

const GradientPicker = () => {
  const [startColor, setStartColor] = useState('#ffffff');
  const [endColor, setEndColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedField, setSelectedField] = useState(null);

  const handleColorChange = (color) => {
    if (selectedField === 'start') {
      setStartColor(color.hex);
    } else if (selectedField === 'end') {
      setEndColor(color.hex);
    }
  };

  const handleFieldClick = (field) => {
    setSelectedField(field);
    setShowColorPicker(true);
  };

  const handleColorPickerClose = () => {
    setShowColorPicker(false);
  };

  const gradientStyle = {
    background: `linear-gradient(to right, ${startColor}, ${endColor})`,
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Color Picker</h1>
      <div className="w-48 h-48" style={gradientStyle}></div>
      <div className="flex mb-4 mt-3">
        <div
          className="w-10 h-10 rounded border cursor-pointer"
          style={{ backgroundColor: startColor }}
          onClick={() => handleFieldClick('start')}
        ></div>
        <div className="ml-2">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            value={startColor}
            readOnly
          />
        </div>
      </div>
      <div className="flex mb-4">
        <div
          className="w-10 h-10 rounded border cursor-pointer"
          style={{ backgroundColor: endColor }}
          onClick={() => handleFieldClick('end')}
        ></div>
        <div className="ml-2">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            value={endColor}
            readOnly
          />
        </div>
      </div>
      {showColorPicker && (
        <div className="absolute z-10">
          <ChromePicker
            color={selectedField === 'start' ? startColor : endColor}
            onChange={handleColorChange}
            onChangeComplete={handleColorPickerClose}
          />
        </div>
      )}
    </div>
  );
}

export default GradientPicker