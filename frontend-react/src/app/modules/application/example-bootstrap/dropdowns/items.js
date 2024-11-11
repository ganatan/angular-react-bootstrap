import React from 'react';

import './items.css';

class Blockquotes extends React.Component {

  render() {
    return (

      <div className="card mb-2">
        <div className="card-body">
          <h1 className="card-title text-center text-primary">Dropdowns</h1>
          <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
              data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Game of Thrones</a></li>
              <li><a className="dropdown-item" href="#">Battlestar Galactica</a></li>
              <li><a className="dropdown-item" href="#">Lost</a></li>
            </ul>
          </div>
          <hr />
          <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
              data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Game of Thrones</a></li>
              <li><a className="dropdown-item" href="#">Battlestar Galactica</a></li>
              <li><a className="dropdown-item" href="#">Lost</a></li>
            </ul>
          </div>
          <hr />
          <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false">
              Action
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Game of Thrones</a></li>
              <li><a className="dropdown-item" href="#">Battlestar Galactica</a></li>
              <li><a className="dropdown-item" href="#">Lost</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">The Walking Dead</a></li>
            </ul>
          </div>
          <hr />
          <div className="btn-group">
            <button className="btn btn-secondary btn-lg dropdown-toggle me-2" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Large button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Game of Thrones</a></li>
              <li><a className="dropdown-item" href="#">Battlestar Galactica</a></li>
              <li><a className="dropdown-item" href="#">Lost</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">The Walking Dead</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button className="btn btn-secondary btn-lg" type="button">
              Large split button
            </button>
            <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Game of Thrones</a></li>
              <li><a className="dropdown-item" href="#">Battlestar Galactica</a></li>
              <li><a className="dropdown-item" href="#">Lost</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">The Walking Dead</a></li>
            </ul>
          </div>
          <hr />
          <div className="btn-group">
            <button className="btn btn-secondary btn-sm dropdown-toggle me-2" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Small button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Game of Thrones</a></li>
              <li><a className="dropdown-item" href="#">Battlestar Galactica</a></li>
              <li><a className="dropdown-item" href="#">Lost</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">The Walking Dead</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button className="btn btn-secondary btn-sm" type="button">
              Small split button
            </button>
            <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Game of Thrones</a></li>
              <li><a className="dropdown-item" href="#">Battlestar Galactica</a></li>
              <li><a className="dropdown-item" href="#">Lost</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">The Walking Dead</a></li>
            </ul>
          </div>
          <hr />
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2"
              data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li><a className="dropdown-item active" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <hr />
          <div className="btn-group dropup">
            <button type="button" className="btn btn-secondary dropdown-toggle me-2" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropup
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item active" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div className="btn-group dropup">
            <button type="button" className="btn btn-secondary">
              Split dropup
            </button>
            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item active" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <hr />
          <div className="btn-group dropend">
            <button type="button" className="btn btn-secondary dropdown-toggle me-2" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropright
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item active" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div className="btn-group dropend">
            <button type="button" className="btn btn-secondary">
              Split dropend
            </button>
            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropright</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item active" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <hr />
          <div className="btn-group dropstart">
            <button type="button" className="btn btn-secondary dropdown-toggle me-2" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropstart
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item active" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <div className="btn-group dropstart" role="group">
              <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropstart</span>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item active" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <button type="button" className="btn btn-secondary">
              Split dropstart
            </button>
          </div>
          <hr />
          <div className="btn-group">
            <button className="btn btn-secondary dropdown-toggle me-2" type="button" id="dropdownMenuButton"
              data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle me-2" data-bs-toggle="dropdown"
              aria-expanded="false">
              Right-aligned menu
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle me-2" data-bs-toggle="dropdown"
              data-bs-display="static" aria-expanded="false">
              Left-aligned, right-aligned lg
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle mb-2 me-2" data-bs-toggle="dropdown"
              data-bs-display="static" aria-expanded="false">
              Right-aligned, left-aligned lg
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
          <div className="btn-group dropstart">
            <button type="button" className="btn btn-secondary dropdown-toggle me-2" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropstart
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
          <div className="btn-group dropend">
            <button type="button" className="btn btn-secondary dropdown-toggle me-2" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropend
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
          <div className="btn-group dropup">
            <button type="button" className="btn btn-secondary dropdown-toggle me-2" data-bs-toggle="dropdown"
              aria-expanded="false">
              Dropup
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
          <hr />
        </div>
      </div>

    )
  }

}
export default Blockquotes; 
