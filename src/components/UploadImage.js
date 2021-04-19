import { React, useState } from 'react';
import './../styles/UploadImage.css';

const ImageList = ({ url, file_name, timestamp }) => {
  return (
    <>
      <div className="image-view">
        <div className="view_wrap list-view">
          <div className="view_item">
            <div className="view_left">
              <img src={url} />
            </div>
            <div className="view_right">
              <p className="name">{file_name}</p>
              <p className="timestamp">{timestamp}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const UploadImage = () => {
  const [selectedImage, setselectedImage] = useState([]);
  const [selectedImageName, setselectedImageName] = useState(null);
  const [allImages, setAllImages] = useState([]);

  const handleChange = (e) => {
    if (e.target.files.length !== 0) {
      let imageDetails = [];

      Array.from(e.target.files).map((f) => {
        imageDetails.push({
          file_name: f.name,
          timestamp: new Date().toLocaleString(),
          url: URL.createObjectURL(f)
        });
      });

      setselectedImage(imageDetails[0]);
      setselectedImageName(imageDetails[0].file_name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // checks if image is already available in list
    const existing_image = allImages.some((el) => el.url === selectedImage.url);
    if (!existing_image) {
      setAllImages(allImages.concat(selectedImage));
    } else {
      alert('The image is already available in list. Please select another');
    }
  };

  return (
    <>
      <div className="content">
        <label className="custom-upload">
          <input name="image" type="file" accept="image/*" onChange={handleChange} />
          {selectedImageName ? <p>{selectedImageName}</p> : <p>Kies bestand...</p>}
        </label>
        <button type="submit" id="custom-button" onClick={handleSubmit}>
          Voeg toe !
        </button>
        {allImages.map((image, idx) => {
          return <ImageList {...image} key={idx} />;
        })}
      </div>
    </>
  );
};

export default UploadImage;
