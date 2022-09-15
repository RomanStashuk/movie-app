function Header() {
  return (
    <header>
      <nav className="cyan accent-3">
        <div className="nav-wrapper">
          <h1>
            <a href="!#" className="brand-logo">
              React Movies
            </a>
          </h1>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="!#">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { Header };
