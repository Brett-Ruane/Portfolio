import './Header.css';

function Header() {
    return (
      <div className="header">
        <h1>
          Brett Ruane
        </h1>
        <header className="header-menu">
          <h1>
            <a
            className="Git-link"
            href="https://github.com/Brett-Ruane"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className="Resume-link"
            href="https://github.com/Brett-Ruane"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          </h1>      
        </header>
      </div>
    );
  }

export default Header;