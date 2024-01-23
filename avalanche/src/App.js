import React from "react";
import Form from "./components/pages/form/Form";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Map from "./components/Map";
import MapState from "./components/context/MapState";

export default function App() {
  return (
    <>
    <MapState>
    <Router>
      <Routes>
      <Route exact path='/' element={<Form/>}></Route>
          <Route exact path='/map' element={<Map />}></Route>
      </Routes>
  </Router>
    </MapState>
    </>

  );
}
