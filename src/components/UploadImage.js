import {React, useState} from 'react'
// import ImageList from './ImageList'

const ImageList = ({
  url,
  file_name,
  timestamp
}) => {
  return (
    <>
      <ul>
        <img src={url}></img>
        <h2>{file_name}</h2>
        <h2>{timestamp}</h2>
      </ul>
    </>
  )
}

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

    // checks if image is already available in list
    const existing_image = allImages.some(
      el => el.url === selectedImage.url);
    if (!existing_image) {
      setAllImages(allImages.concat(selectedImage))
    } else {
      alert('The image is already available in list. Please select another')
    }
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
        {allImages.map((image, idx) => {
          return <ImageList {...image}
          key={idx}/>
        })}
      </div>
    </>
  )
}

export default UploadImage;
