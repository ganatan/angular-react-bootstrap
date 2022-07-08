import React from 'react';
import movieScreen from '../../../../../assets/params/images/example-bootstrap/movie-screen.jpg';

import './items.css';

class Blockquotes extends React.Component {

  render() {

    return (

      <div className="row">
        <div className="col p-4">
          <div className="row mb-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Simple Bootstrap Card</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card&lsquo;s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="nga-card">
                <div className="card-body">
                  <h5 className="card-title">Card with Shadow</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card&lsquo;s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="nga-card-box">
                <div className="card-body">
                  <h5 className="card-title">Card with Shadow & Hover</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card&lsquo;s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="nga-card-box">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card&lsquo;s content.</p>
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="nga-card-box">
                <img src={movieScreen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card&lsquo;s content.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="nga-card-box">
                <img src={movieScreen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card&lsquo;s content.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div className="nga-card-box">
                <img src={movieScreen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card&lsquo;s content.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div className="nga-card-box">
                <img src={movieScreen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card&lsquo;s content.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div className="nga-card-box">
                <img src={movieScreen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card&lsquo;s content.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div className="nga-card-box">
                <img src={movieScreen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card&lsquo;s content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

}
export default Blockquotes; 
