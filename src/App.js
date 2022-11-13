import Date1 from "./components/Date1";
import axios from "axios";
import { useState } from "react";
import Header from "./components/Header";
function App() {
  const [result, setResult] = useState({});
  const [date, setDate] = useState("");
  const [explanation, setExplanation] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [mediaType, setMediaType] = useState("");

  const pullImage = (dateStr) => {
    setLoading(true);
    var selectedDate = dateStr;
    var url = `https://api.nasa.gov/planetary/apod?api_key=HiY2DgDDEydCnAlkhfV8kpNTsaTrM8cGCsfZF9Mq&date=${selectedDate}`;
    axios.get(url).then((res) => {
      setLoading(false);
      setTitle(res.data.title);
      setExplanation(res.data.explanation);
      setResult(res.data.url);
      setMediaType(res.data.media_type);
      console.log(res);
    });
  };
  const handleChangeP = (d) => {
    console.log("handle change", d);
  };
  const isResultEmpty = () => {
    console.log(Object.keys(result).length === 0);
    return Object.keys(result).length === 0;
  };

  return (
    <>
      <Header></Header>
      <div className="main-container" style={{ color: "wheat" }}>
        <Date1 pullImage={pullImage} handleChangeP={handleChangeP}></Date1>
        <div>
          {/* <hr></hr> */}

          {!isResultEmpty() ? (
            <div className="info grid-container">
              {mediaType == "image" ? (
                <img className="img-pulled grid-item" src={result}></img>
              ) : (
                <iframe className="img-pulled grid-item" src={result}></iframe>
              )}
              <div className="info-text grid-item">
                <Header text={title}></Header>
                <p style={{ padding: "20px" }}>{explanation}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
