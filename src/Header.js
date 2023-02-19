import './Header.css';

function Header() {
    return (
      <div className="Header">
        <header className="Header-header">
          <h1>
            Brett Ruane
            <a
            className="Git-link"
            href="https://github.com/Brett-Ruane"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className="Git-link"
            href="https://github.com/Brett-Ruane"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          </h1>
          
        </header>
      </div>
    );
  }

export default Header;