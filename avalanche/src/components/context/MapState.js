import mapContext from "./mapContext";
import { useState } from "react";

import React from 'react'

export default function MapState(props) {
    const [t1, sett1] = useState(null);
    const [t2, sett2] = useState(null);
    const [sImages, setSImages] = useState([]);

    const updateT1 = (newT1) => {
      sett1(newT1);
    };
  
    const updateT2 = (newT2) => {
      sett2(newT2);
    };


    const updateSelectedImages = (newImages) => {
      setSImages(newImages);
    };

  return (
    <mapContext.Provider value={{t1 , t2 , sett1 , sett2 , updateT1 , updateT2, sImages, updateSelectedImages}}>
            {props.children}
        </mapContext.Provider>
  )
}
