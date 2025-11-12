import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1>Shubham Singh</h1> 
        
      </div>
      <div className="header-center">
        <h1>🧠 Sentiment Analyzer</h1>
        <p>Built with VADER + React</p>
      </div>
    </header>
  );
};

export default Header;
