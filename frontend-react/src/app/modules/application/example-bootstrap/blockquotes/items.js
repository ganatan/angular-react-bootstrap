import React from 'react';

import './items.css';

class Blockquotes extends React.Component {

  render() {
    return (


      <div className="row">
        <div className="col p-4">
          <div className="card mb-2">
            <div className="card-body">
              <h1 className="card-title text-center text-primary">Blockquotes</h1>
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <hr />
              <figure>
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
              <hr />
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
              <hr />
              <figure className="text-end">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
              <hr />
            </div>
          </div>
        </div>
      </div>
      
    )
  }

}
export default Blockquotes; 
