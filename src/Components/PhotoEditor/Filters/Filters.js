import React from 'react';

const Filters = ({
  saturate,
  contrast,
  brightness,
  sepia,
  grayscale,
  blur,
  hueRotate,
  handleSliderChange,
}) => {
  return (
    <ul>
      <li>
        <label htmlFor="saturate">Saturate</label>
        <input
          type="range"
          id="saturate"
          min="0"
          max="200"
          value={saturate}
          onChange={(e) => handleSliderChange('saturate', e.target.value)}
        />
      </li>
      <li>
        <label htmlFor="contrast">Contrast</label>
        <input
          type="range"
          id="contrast"
          min="0"
          max="200"
          value={contrast}
          onChange={(e) => handleSliderChange('contrast', e.target.value)}
        />
      </li>
      <li>
        <label htmlFor="brightness">Brightness</label>
        <input
          type="range"
          id="brightness"
          min="0"
          max="200"
          value={brightness}
          onChange={(e) => handleSliderChange('brightness', e.target.value)}
        />
      </li>
      <li>
        <label htmlFor="sepia">Sepia</label>
        <input
          type="range"
          id="sepia"
          min="0"
          max="100"
          value={sepia}
          onChange={(e) => handleSliderChange('sepia', e.target.value)}
        />
      </li>
      <li>
        <label htmlFor="grayscale">Grayscale</label>
        <input
          type="range"
          id="grayscale"
          step="0.1"
          min="0"
          max="1"
          value={grayscale}
          onChange={(e) => handleSliderChange('grayscale', e.target.value)}
        />
      </li>
      <li>
        <label htmlFor="blur">Blur</label>
        <input
          type="range"
          id="blur"
          step="0.1"
          min="0"
          max="10"
          value={blur}
          onChange={(e) => handleSliderChange('blur', e.target.value)}
        />
      </li>
      <li>
        <label htmlFor="hue-rotate">Hue-Rotate</label>
        <input
          type="range"
          id="hue-rotate"
          step="0.1"

          min="0"
          max="360"
          value={hueRotate}
          onChange={(e) => handleSliderChange('hueRotate', e.target.value)}
        />
      </li>
    </ul>
  );
};

export default Filters;
