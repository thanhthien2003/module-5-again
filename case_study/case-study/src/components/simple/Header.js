import React from 'react';


function Header() {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo" style={{ paddingTop: '10px' }}>
                    <h1>FURAMA</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contract/create">
                        New contract
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/service">
                        Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contract">
                        Contract
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/customer">
                        Customer
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;