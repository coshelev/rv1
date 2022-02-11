import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function FileInput() {
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl]           = useState(null);

    useEffect(() => {
        if (selectedImage) {
          setImageUrl(URL.createObjectURL(selectedImage));
        }
      }, [selectedImage]);
      
    return (
        <>
            <input accept="image/*" type="file" id="select-image" 
                style={{ display: 'none' }}
                onChange={e => setSelectedImage(e.target.files[0])}/>
            <label htmlFor="select-image">
                <Button variant="contained" color="primary" component="span">Upload Image</Button>
            </label>
        </>
    );
}
  export default FileInput;