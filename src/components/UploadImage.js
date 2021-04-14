import {React, useState} from 'react'

const UploadImage = () => {
  const [ selectedImages, setSelectedImages ] = useState([])

  function imageHandleChange(e) {
    if (e.target.files) {
      let images = []
      Array.from(e.target.files).map((f) => {
        images.push({
          file_name: f.name,
          timestamp: f.lastModified,
          url: URL.createObjectURL(f)
        })
      })

      setSelectedImages(images)
    }
  }

  const renderImages = (images) => {
    return images.map((image_source) => {
      return (
        <>
          <img src={image_source.url} key={image_source.url}/>
          <h3 key={image_source.file_name}>{image_source.file_name}</h3>
          <h3 key={image_source.timestamp}>{image_source.timestamp}</h3>
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
              multiple
              type='file'
              onChange={imageHandleChange}/>
              Kies bestand...
          </label>
          <button 
            type='submit'>
            Voeg toe !
          </button>
        </div>
        {renderImages(selectedImages)}
      </div>
    </>
  )
}

export default UploadImage;
