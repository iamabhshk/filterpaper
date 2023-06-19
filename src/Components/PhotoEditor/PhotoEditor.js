import React, { useState, useRef, Fragment } from 'react';
// import './App.css';
import "../../App.css"
import Canvas from './Canvas/Canvas';
import UploadImage from './PhotoUpload/PhotoUpload';
import Filters from './Filters/Filters';
import Buttons from './Buttons/Buttons';

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
    try {
      setSaturate(100);
      setContrast(100);
      setBrightness(100);
      setSepia(0);
      setGrayscale(0);
      setBlur(0);
      setHueRotate(0);
      applyFilters();
      
    } catch (error) {
      alert("The file is empty");
    }
    
  };

  const handleDownload = () => {
    if(imageSrc){
      const link = document.createElement('a');
      link.href = imageSrc;
      link.download = 'NewProject.jpg';
      link.click();
    }else{
      alert("Cannot download empty file, Upload a photo! ");
    }
    
  };

  const handleSliderChange = (filter, value) => {
    switch (filter) {
      case 'saturate':
        setSaturate(value);
        break;
      case 'contrast':
        setContrast(value);
        break;
      case 'brightness':
        setBrightness(value);
        break;
      case 'sepia':
        setSepia(value);
        break;
      case 'grayscale':
        setGrayscale(value);
        break;
      case 'blur':
        setBlur(value);
        break;
      case 'hueRotate':
        setHueRotate(value);
        break;
      default:
        break;
    }
    applyFilters();
  };

  return (
    <Fragment>
      <div className="container">
        <div className="img">
          <Canvas imageSrc={imageSrc} canvasRef={canvasRef} />
          {!imageSrc && <UploadImage handleFileUpload={handleFileUpload} />}
        </div>
        <div className="filters">
          <Filters
            saturate={saturate}
            contrast={contrast}
            brightness={brightness}
            sepia={sepia}
            grayscale={grayscale}
            blur={blur}
            hueRotate={hueRotate}
            handleSliderChange={handleSliderChange}
          />
          <Buttons
            handleDownload={handleDownload}
            handleFileUpload={handleFileUpload}
            resetFilters={resetFilters}
            imageSrc={imageSrc}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PhotoEditor;
