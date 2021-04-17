import {React, useState} from 'react'
import ImageList from './ImageList'

const UploadImage = () => {
  const [ selectedImage, setselectedImage ] = useState([])
  const [ selectedImageName, setselectedImageName ] = useState(null)
  const [ allImages, setAllImages ] = useState([])
  
  const handleChange = (e) => {
    if (e.target.files.length !== 0) {
      let imageDetails = []
      
      Array.from(e.target.files).map((f) => {
        imageDetails.push({
          file_name: f.name,
          timestamp: new Date().toLocaleString(),
          url: URL.createObjectURL(f)
        })
      })

      setselectedImage(imageDetails[0])
      setselectedImageName(imageDetails[0].file_name)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAllImages(allImages.concat(selectedImage))
    /*const existing_image = allImages.some(
      el => el.createObjectURL === selectedImage.createObjectURL);
    console.log(existing_image)
    if (existing_image) { 
      // showing message when an image already exists
    } else {
      setAllImages(allImages.concat(selectedImage))
    }
    */
  }

  return (
    <>
      <div className='wrapper'>
        <div className='fileUpload'>
          <label className='upload'>
            <input 
              name='image'
              type='file'
              accept='image/*'
              onChange={handleChange}/>
              {selectedImageName ? selectedImageName : 
              <p>Kies bestand...</p>}
          </label>
          <button 
            type='submit'
            onClick={handleSubmit}
            >
            Voeg toe !
          </button>
        </div>
        <ImageList props={allImages} />
      </div>
    </>
  )
}

export default UploadImage;
