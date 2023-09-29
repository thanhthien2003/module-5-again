import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contract/create">
                        New contract
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        Service
                      </Link>
                    </li>
                    <li className="nav-item">
                      {/* <div className="dropdown nav-link">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                          <li><Link className="dropdown-item active" to="/service/vila">Villa</Link></li>
                          <li><Link className="dropdown-item" to="/service/house">House</Link></li>
                          <li><Link className="dropdown-item" to="/service/room">Room</Link></li>
                        </ul>
                      </div> */}
                      <Dropdown>
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                          Facility
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item><Link className="dropdown-item active" to="/service/vila">Villa</Link></Dropdown.Item>
                          <Dropdown.Item><Link className="dropdown-item" to="/service/house">House</Link></Dropdown.Item>
                          <Dropdown.Item><Link className="dropdown-item" to="/service/room">Room</Link></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contract">
                        Contract
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/customer">
                        Customer
                      </Link>
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