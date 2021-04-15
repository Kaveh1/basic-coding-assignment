import {React, useState} from 'react'

const UploadImage = () => {
  const [ selectedImage, setselectedImage ] = useState([])
  const [ isSelected, setIsSelected ] = useState(false)
  const [ selectedImageName, setselectedImageName ] = useState('')
  const [ allImages, setAllImages ] = useState([])
  
  const imageHandleChange = (e) => {
    if (e.target.files) {
      let imageDetails = []
      
      Array.from(e.target.files).map((f) => {
        imageDetails.push({
          file_name: f.name,
          timestamp: new Date().toLocaleString(),
          url: URL.createObjectURL(f)
        })
      })
      
      setselectedImage(imageDetails)
      setIsSelected(true);
      setselectedImageName(imageDetails[0].file_name)
    }
  }

  const handleSubmit = () => {
    setAllImages(allImages.concat(selectedImage))
  }

  const ListImages = ({props}) => {
    return props.map((image) => {
      return  (
        <>
          <ul> 
            <img src={image.url}/>
            <h3>{image.file_name}</h3>
            <h3>{image.timestamp}</h3>
          </ul>
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
          <button 
            type='submit'
            onClick={handleSubmit}
            >
            Voeg toe !
          </button>
        </div>
        <ListImages props={allImages} />
      </div>
    </>
  )
}

export default UploadImage;
