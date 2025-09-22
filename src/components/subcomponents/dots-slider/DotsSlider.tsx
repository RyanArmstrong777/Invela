import React from 'react';
import './DotsSlider.css'

interface DotsSliderProps {
  numOptions: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const DotsSlider: React.FC<DotsSliderProps> = ({ numOptions, value, setValue }) => {
  return (
    <div id="dots-slider-container" className="mobile-only">
      {Array.from({ length: numOptions }).map((_, index) => (
        <button key={index + 1} onClick={() => setValue(index + 1)} className="dots-slider-option-wrapper">
            <div className={`dots-slider-option ${value === index + 1 ? "active" : ""}`} />
        </button>
      ))}
    </div>
  );
};

export default DotsSlider;
