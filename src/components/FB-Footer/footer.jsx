const Footer = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light text-dark">
    <div className="container-fluid mt-3">

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav offset-2 mt-4 mb-4">
          <a className="nav-link nav-text " href="/">English(US)</a>
          <a className="nav-link nav-text text-primary" href="/">Deutch</a>
          <a className="nav-link nav-text text-primary" href="/">Turkce</a>
          <a className="nav-link nav-text text-primary" href="/">Polski</a>
          <a className="nav-link nav-text text-primary" href="/">Italiano</a>
          <a className="nav-link nav-text text-primary" href="/">Francais(France)</a>
          <a className="nav-link nav-text text-primary" href="/">Romana</a>
          <a className="nav-link nav-text text-primary" href="/">Espanol</a>
          <a className="nav-link nav-text text-primary" href="/">Portugues(Brasil)</a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Footer;