import React from 'react';

const Canvas = ({ imageSrc, canvasRef }) => {
  return (
    <div className="img-box">
      {/* {imageSrc && <img src={imageSrc} alt="Edited" />} */}
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Canvas;
