import { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    
    try {
      const res = await axios.post("https://text-sentiment-anayzer-backend.onrender.com/api/analyze", { text });
      setResult(res.data);
    } catch (err) {
      console.error("API error:", err);
      setResult({ sentiment: "Error", compound: 0, positive: 0, neutral: 0, negative: 0 });
    } finally {
      setLoading(false);
    }
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
          <button className="submit-buttton" onClick={handleSubmit} disabled={loading}>
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>
      </div>
      <div className="Resultdata">
         <h2>Result:</h2>
            {loading && <p className="loading">⏳ Analyzing sentiment...</p>}
        {result && !loading (
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
