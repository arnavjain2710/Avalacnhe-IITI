import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import mapContext from '../../context/mapContext';

import Ascent from '../../../images/Ascent.png';
import Bind from '../../../images/Bind.png';
import Breeze from '../../../images/Breeze.png';
import Fracture from '../../../images/Fracture.png';
import Haven from '../../../images/Haven.png';
import Icebox from '../../../images/Icebox.png';
import Lotus from '../../../images/Lotus.png';
import Pearl from '../../../images/Pearl.png';
import Split from '../../../images/Split.png';
import Sunset from '../../../images/Sunset.png';
import './imgsl.css';

const allImages = [
  { id: 1, title: 'Ascent', url: Ascent },
  { id: 2, title: 'Bind', url: Bind },
  { id: 3, title: 'Breeze', url: Breeze },
  // { id: 4, title: 'Fracture', url: Fracture },
  { id: 5, title: 'Haven', url: Haven },
  // { id: 6, title: 'Icebox', url: Icebox },
  { id: 7, title: 'Lotus', url: Lotus },
  // { id: 8, title: 'Pearl', url: Pearl },
  { id: 9, title: 'Split', url: Split },
  { id: 10, title: 'Sunset', url: Sunset },
  // Add more image objects as needed
];

const ImageSelection = ({ onImageSelection }) => {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const { sImages, updateSelectedImages } = useContext(mapContext);

  const handleImageClick = (image) => {
    const isImageSelected = selectedImages.find((selectedImage) => selectedImage.id === image.id);

    if (isImageSelected) {
      const updatedSelectedImages = selectedImages.filter((selectedImage) => selectedImage.id !== image.id);
      setSelectedImages(updatedSelectedImages);
    } else if (selectedImages.length < 4) {
      setSelectedImages([...selectedImages, image]);
    }
  };

  // const handleContinue = () => {
  //   // Pass the selected images to the parent component
  //   // onImageSelection(selectedImages);
  //   updateSelectedImages(selectedImages);
  //   // Redirect to the next screen
  //   navigate('/remaining');
  // };

  const remainingImages = allImages.filter((image) => !selectedImages.includes(image));

  return (
    <div className='wall'>
    <div className='paddy'>
      <table>
        <tbody>
          <tr>
            {remainingImages.slice(0, 5).map((image) => (
              <td key={image.id} style={{ position: 'relative' }}>
                <img
                  src={image.url}
                  alt={image.title}
                  onClick={() => handleImageClick(image)}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
                {selectedImages.includes(image) && (
                  <div
                    style={{
                      textAlign:"center",
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    }}
                  />
                )}
                <p>{image.title}</p>
              </td>
            ))}
          </tr>
          <tr>
            {remainingImages.slice(5, 10).map((image) => (
              <td key={image.id} style={{ position: 'relative' }}>
                <img
                  src={image.url}
                  alt={image.title}
                  onClick={() => handleImageClick(image)}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
                {selectedImages.includes(image) && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    }}
                  />
                )}
                <p>{image.title}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {/* {selectedImages.length === 7 && (
        <button onClick={handleContinue}>Continue to Remaining Images</button>
      )} */}
    </div>
    </div>

  );
};

export default ImageSelection;
