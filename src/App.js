import React, {useState} from 'react';
import analyzeImage from "./azure-image-analysis";

function App() {
  const [imageUrl , setImageUrl] = useState("");
  const [result , setResult] = useState(null);

  const handleImageAnalysis = async () => {
    try{
      const analysisResult = await analyzeImage(imageUrl);
      setResult (analysisResult);
    } catch (myeror){
      console.error("asd",myeror);
    }
  };

  const displayResults = () => {
    if(!result) return null;
    return(
      <div>
        <h2>Image result</h2>
        <img
          width="500px"
          src = {result?.url ? result.url : imageUrl}
          alt="upload"
          ></img>
          <pre>{JSON.stringify(result,null,2)} </pre>
      </div>
    );
  };

  return (
    <div>
      <h1>Analyze and generate imagaes</h1>
      <input type='text' placeholder='enter URL or textual prompt'
      value={imageUrl}
      onChange={event => setImageUrl(event.target.value)}></input>
      <button onClick={handleImageAnalysis}>Analyze image</button>
      <button>Generate image</button>
      {displayResults()}
    </div>
  );
};

export default App;
