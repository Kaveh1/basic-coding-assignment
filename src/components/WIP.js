import {React, useState} from 'react'

const UploadImage = () => {
  const [ selectedImage, setSelectedImage ] = useState([])
  const [ isSelected, setIsSelected ] = useState(false)
  const [ selectedImageName, setselectedImageName ] = useState('')

  const imageHandleChange = (e) => {
    if (e.target.files) {
      const imageObj = e.target.files[0]
      let pattern = /image-*/

      if (!imageObj.type.match(pattern)) {
        alert('Invalid format: only images are allowed');
        return;
      } else {
        setSelectedImage(imageObj)
        setIsSelected(true);
        setselectedImageName(imageObj.name)
      }
    } 
  }

  const handleSubmit = () => {
    // requires adjustments for workable solutions
    /* 
    TODO: after an image is selected, the handlesubmit
    has to add the selected image to the 'ImageList' 
    (which consists of the other images) afterwards 
    some rendering to properly (1) show a preview of 
    image, (2) name of image, and (3) timestamp 
    */ 
  }

  return (
    <>
      <div className='wrapper'>
        <div className='fileUpload'>
          <label className='upload'>
            <input 
              name='image'
              // multiple
              type='file'
              accept='image/*'
              onChange={imageHandleChange}/>
              {isSelected ? selectedImageName : 
              <p>Kies bestand...</p>}
              {/* {selectedImages[0].file_name}  */}
          </label>
          <button 
            type='submit'
            onClick={handleSubmit}
            >
            Voeg toe !
          </button>
        </div>
        {/* Conditional rendering: if there is a list of 
        image(s) : show ? stay empty */}
      </div>
    </>
  )
}

export default UploadImage;
