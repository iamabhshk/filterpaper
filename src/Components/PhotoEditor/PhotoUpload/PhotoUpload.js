import React from 'react';

const UploadImage = ({ handleFileUpload }) => {
  return (
    <div className="upload">
      <label htmlFor="upload">Upload Image</label>
      <input type="file" id="upload" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadImage;
