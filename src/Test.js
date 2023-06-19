import React, { useState, useRef, Fragment } from 'react';
import './App.css';

const PhotoEditor = () => {
  const [saturate, setSaturate] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [brightness, setBrightness] = useState(100);
  const [sepia, setSepia] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [blur, setBlur] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [imageSrc, setImageSrc] = useState(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const image = new Image();
      image.src = reader.result;
      image.onload = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
        setImageSrc(canvas.toDataURL('image/jpeg'));
        imageRef.current = image;
      };
    };

    reader.readAsDataURL(file);
  };

  const applyFilters = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.filter = `saturate(${saturate}%) contrast(${contrast}%) brightness(${brightness}%) sepia(${sepia}%) grayscale(${grayscale}%) blur(${blur}px) hue-rotate(${hueRotate}deg)`;
    context.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);
    setImageSrc(canvas.toDataURL('image/jpeg'));
  };

  const resetFilters = () => {
    setSaturate(100);
    setContrast(100);
    setBrightness(100);
    setSepia(0);
    setGrayscale(0);
    setBlur(0);
    setHueRotate(0);
    applyFilters();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'NewProject.jpg';
    link.click();
  };

  return (
    <Fragment>
      
      <div className="container">
        <div className="img">
          <div className="img-box">
            {/* {imageSrc && <img src={imageSrc} alt="Edited"  />} */}
            <canvas ref={canvasRef}></canvas>
          </div>

          {!imageSrc && (
                <div className="upload">
                  <label htmlFor="upload">Upload Image</label>
                  <input type="file" id="upload" onChange={handleFileUpload} />
                </div>
          )}
        </div>

        <div className="filters">
          <ul>
            <li>
              <label htmlFor="saturate">Saturate</label>
              <input
                type="range"
                id="saturate"
                min="0"
                max="200"
                value={saturate}
                onChange={(e) => {
                  setSaturate(e.target.value);
                  applyFilters();
                }}
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
                onChange={(e) => {
                  setContrast(e.target.value);
                  applyFilters();
                }}
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
                onChange={(e) => {
                  setBrightness(e.target.value);
                  applyFilters();
                }}
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
                onChange={(e) => {
                  setSepia(e.target.value);
                  applyFilters();
                }}
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
                onChange={(e) => {
                  setGrayscale(e.target.value);
                  applyFilters();
                }}
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
                onChange={(e) => {
                  setBlur(e.target.value);
                  applyFilters();
                }}
              />
            </li>
            <li>
              <label htmlFor="hue-rotate">Hue-Rotate</label>
              <input
                type="range"
                id="hue-rotate"
                min="0"
                max="360"
                value={hueRotate}
                onChange={(e) => {
                  setHueRotate(e.target.value);
                  applyFilters();
                }}
              />
            </li>
            <li className='buttons'>
              <button onClick={handleDownload}>Download</button>
              {imageSrc && (
                <div className="upload2">
                  <label htmlFor="upload">Upload Image</label>
                  <input type="file" id="upload" onChange={handleFileUpload} />
                </div>
              )}
              <button onClick={resetFilters}>Reset</button>
            </li>
          </ul>
        </div>

        
        
    </div>
    </Fragment>
    
  );
};

export default PhotoEditor;
