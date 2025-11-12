import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        
          Shubham Singh
        
      </div>
      <div className="header-center">
        <h1>🧠 Sentiment Analyzer</h1>
        <p>Built with VADER + MERN Stack</p>
      </div>
    </header>
  );
};

export default Header;
