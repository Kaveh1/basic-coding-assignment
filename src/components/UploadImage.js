import {React, useState} from 'react'

const UploadImage = () => {
  const [ selectedImages, setSelectedImages ] = useState([])
  const [ isSelected, setIsSelected ] = useState(false)
  const [ selectedImageName, setselectedImageName ] = useState('')

  function imageHandleChange(e) {
    if (e.target.files) {
      let imageDetails = []
      
      Array.from(e.target.files).map((f) => {
        imageDetails.push({
          file_name: f.name,
          timestamp: f.lastModifiedDate,
          url: URL.createObjectURL(f)
        })
      })
      
      setSelectedImages(imageDetails)
      setIsSelected(true);
      setselectedImageName(imageDetails[0].file_name)
    }
  }

  const renderImages = (images) => {
    return images.map((image_source) => {
      return (
        <>
          <img src={image_source.url} key={image_source.url}/>
          <h3 key={image_source.file_name}>{image_source.file_name}</h3>
          <h3 key={image_source.timestamp}>{image_source.timestamp.toLocaleDateString()}</h3>
        </>
      )
    })
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
          </label>
          {/* <button 
            type='submit'>
            Voeg toe !
          </button> */}
        </div>
        {renderImages(selectedImages)}
      </div>
    </>
  )
}

export default UploadImage;
