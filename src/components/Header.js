import "./Header.css";

function Header() {
  return (
    <div className="header">
      <p>Brett Ruane</p>
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
        href="https://docs.google.com/document/d/1SDma7VWNdpnhUY_BEeZPUx4OQb6nhK3F/edit?usp=sharing&ouid=107780228373600394384&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
}

export default Header;
