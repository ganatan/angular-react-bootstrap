import React from 'react';

import './items.css';

class Blockquotes extends React.Component {

  render() {
    return (

      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-primary">Popovers</h2>



          <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title"
            data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>

          <hr />


          <button type="button" className="btn btn-secondary me-2" data-bs-container="body" data-bs-toggle="popover"
            data-bs-placement="top" data-bs-content="Top popover">
            Popover on top
          </button>
          <button type="button" className="btn btn-secondary me-2" data-bs-container="body" data-bs-toggle="popover"
            data-bs-placement="right" data-bs-content="Right popover">
            Popover on right
          </button>
          <button type="button" className="btn btn-secondary me-2" data-bs-container="body" data-bs-toggle="popover"
            data-bs-placement="bottom" data-bs-content="Bottom popover">
            Popover on bottom
          </button>
          <button type="button" className="btn btn-secondary me-2" data-bs-container="body" data-bs-toggle="popover"
            data-bs-placement="left" data-bs-content="Left popover">
            Popover on left
          </button>

          <hr />

          <a tabIndex="0" className="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus"
            title="Dismissible popover"
            data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>

          <hr />

          <span className="d-inline-block" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus"
            data-bs-content="Disabled popover">
            <button className="btn btn-primary" type="button" disabled>Disabled button</button>
          </span>


        </div>
      </div>
    )
  }

}
export default Blockquotes; 
