import { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    const res = await axios.post("http://localhost:5000/api/analyze", { text });
    setResult(res.data);
  };

  const handleRefresh = () => {
    setText("");
    setResult(null);
  };

  return (
    <div className="app">
      <div className="enterdata">
        <h2>Sentiment Analyzer (VADER + MERN)</h2>
        <textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
        <br />
        <div >
          <button className="sumbit-buttton" onClick={handleSubmit}>Analyze</button>
        </div>
      </div>
      <div className="Resultdata">
         <h2>Result:</h2>
        {result && (
          <div className="result">
            <p>Sentiment: {result.sentiment}</p>
            <p>Compound: {result.compound}</p>
            <p>Positive: {result.positive}</p>
            <p>Neutral: {result.neutral}</p>
            <p>Negative: {result.negative}</p>
          </div>
        )}
        <div >
          <button className="refresh-button" onClick={handleRefresh} >Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default App;
