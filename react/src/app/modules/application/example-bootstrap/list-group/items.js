import React from 'react';

import './items.css';

class Blockquotes extends React.Component {

  render() {
    return (

      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-primary">List group</h2>
          <ul className="list-group">
            <li className="list-group-item active">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <hr />
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
          </div>
          <hr />
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span className="badge badge-primary badge-pill">1</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}
export default Blockquotes; 
