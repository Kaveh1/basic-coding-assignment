import React from 'react'

const ImageList = ({props}) => {
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

export default ImageList