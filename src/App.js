import { useState, useEffect } from "react";
import './App.css'

import ButtonBar from "./components/ButtonBar";
import Gallery from "./components/Gallery";

const API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
const DEFAULT_ART_ID = 12720;

function App() {

  let [artId, setArtId] = useState(DEFAULT_ART_ID)
  let [data, setData] = useState({})


  useEffect(() => {
    let getArtObject = async (artId) => {
      let response = await fetch (`${API_URL}/${artId}`);
      let resData = await response.json();
      setData(resData);
    }
    getArtObject(artId);
  }, [artId]);
  

  return (
    <div className="App">
      <ButtonBar 
        artId={artId}
        setArtId={setArtId}
      />
      <Gallery 
        primaryImage={data.primaryImage} 
        artistDisplayName={data.artistDisplayName} 
        title={data.title} 
      />
    </div>
  );
}

export default App;
