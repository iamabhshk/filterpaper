import React from 'react';
import "./Buttons.css"
// import "../../../App.css"

const Buttons = ({ handleDownload, handleFileUpload, resetFilters, imageSrc }) => {
  return (
    <li className="buttons">
      <button onClick={handleDownload}>Download</button>
      {imageSrc && (
        <div className="upload2">
          <label htmlFor="upload" className='upload2-label'>Upload Image</label>
          <input type="file" id="upload" onChange={handleFileUpload} className='upload2-input' />
        </div>
      )}
      <button onClick={resetFilters}>Reset</button>
    </li>
  );
};

export default Buttons;
