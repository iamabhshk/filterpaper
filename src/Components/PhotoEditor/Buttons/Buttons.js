import React from 'react';
import "./Buttons.css"

const Buttons = ({ handleDownload, handleFileUpload, resetFilters, imageSrc }) => {
  return (
    <div className="MainButton">
      <li className="buttons">
        <button onClick={handleDownload}>Download</button>
        <button onClick={resetFilters}>Reset</button>
      </li>
      {imageSrc && (
        <div className="upload2">
          <label htmlFor="upload" className='upload2-label'>Upload New Image</label>
          <input type="file" id="upload" onChange={handleFileUpload} className='upload2-input' />
        </div>
      )}
    </div>
  );
};

export default Buttons;
