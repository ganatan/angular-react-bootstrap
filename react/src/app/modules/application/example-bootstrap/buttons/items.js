import React from 'react';

import './items.css';

class Blockquotes extends React.Component {

  render() {
    return (

      <div>
        <div className="card mb-2">
          <div className="card-body">
            <h1 className="card-title text-center text-primary">Buttons</h1>
            <button type="button" className="btn btn-primary me-2">Alien</button>
            <button type="button" className="btn btn-secondary me-2">Gladiator</button>
            <button type="button" className="btn btn-success me-2">Legend</button>
            <button type="button" className="btn btn-danger me-2">Blade Runner</button>
            <button type="button" className="btn btn-warning me-2">Covenant</button>
            <button type="button" className="btn btn-info me-2">Prometheus</button>
            <button type="button" className="btn btn-light me-2">Exodus</button>
            <button type="button" className="btn btn-dark me-2">Black rain</button>
            <button type="button" className="btn btn-link me-2">Black Hawk Down</button>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h1 className="card-title text-primary">Button Tags</h1>
            <button className="btn btn-primary me-2" type="submit">Button</button>
            <input className="btn btn-primary me-2" type="button" value="Input" />
            <input className="btn btn-primary me-2" type="submit" value="Submit" />
            <input className="btn btn-primary me-2" type="reset" value="Reset" />
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h1 className="card-title text-primary">Outline buttons</h1>
            <button type="button" className="btn btn-outline-primary me-2">Primary</button>
            <button type="button" className="btn btn-outline-secondary me-2">Secondary</button>
            <button type="button" className="btn btn-outline-success me-2">Success</button>
            <button type="button" className="btn btn-outline-danger me-2">Danger</button>
            <button type="button" className="btn btn-outline-warning me-2">Warning</button>
            <button type="button" className="btn btn-outline-info me-2">Info</button>
            <button type="button" className="btn btn-outline-light me-2">Light</button>
            <button type="button" className="btn btn-outline-dark me-2">Dark</button>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h1 className="card-title text-primary">Sizes</h1>
            <button type="button" className="btn btn-primary btn-lg me-2">Large button</button>
            <button type="button" className="btn btn-secondary btn-lg me-2">Large button</button>
            <button type="button" className="btn btn-primary btn-sm me-2">Small button</button>
            <button type="button" className="btn btn-secondary btn-sm me-2">Small button</button>
          </div>
        </div>
      </div>
    )
  }

}
export default Blockquotes; 
