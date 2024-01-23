import React, { useState , useContext } from 'react';
import { useLocation} from 'react-router-dom';
import ImageSelection from './pages/ImageSelection/ImageSelection';
import Header from './Header';
import mapContext from './context/mapContext';
import "./map.css"

export default function Map() {

  // const {state} = useLocation();
  // const submittedData = location.state?.submittedData;
  // const team1 = submittedData?.team1 || {};
  // const team2 = submittedData?.team2 || {};
  // const { team1, team2 } = state;
  const context =  useContext(mapContext);
  const {t1 , t2 , sett1 , sett2 , updateT2 , updateT1}= context;

  console.log('Team 1 Data in Map:', t1);
  console.log('Team 2 Data in Map:', t2);
  console.log("hi");
  
  const [selectedImages, setSelectedImages] = useState([]);
  // if (!submittedData) {
  //   // Handle the case where data is not available
  //   return null;
  // }

  const handleImageSelection = (images) => {
    // Handle selected images as needed
    setSelectedImages(images);
  };

  return (
    <>
      
      {/* Render the ImageSelection component */}
      {/* <Header team1 = {team1Data}  team2 ={team2Data}/> */}

      <div className="header-container">
      <div className="team-name">{t1.name}</div>
      <div className="scores-container">
        <div className="team-score">{t1.score}</div>
        <div className="vs">VS</div>
        <div className="team-score">{t2.score}</div>
      </div>
      <div className="team-name">{t2.name}</div>
    </div>

      <h2 style={{color:"white",fontSize:"3rem"}}>Maps</h2>
      <ImageSelection onImageSelection={handleImageSelection} />

      {/* Display selected images */}
      <ul>
        {selectedImages.map((image) => (
          <li key={image.id}>{image.title}</li>
        ))}
      </ul>
    </>
  );


 }
