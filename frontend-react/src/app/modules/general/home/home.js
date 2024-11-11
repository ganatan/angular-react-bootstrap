import React from 'react';
import { Link } from "react-router-dom";

import './home.css';
import { environment } from '../../../../environments/environment';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.title = environment.application.name;
    this.version = environment.application.version;
    this.name = environment.application.name;
    this.angular = environment.application.angular;
    this.bootstrap = environment.application.bootstrap;
    this.fontawesome = environment.application.fontawesome;

  }


  

  render() {

    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 text-center mb-2">
            <h1 className="h5">
              <i className="fas fa-laptop fa-lg me-2 text-primary"></i>
              {this.name}
              <i className="fas fa-mobile-alt fa-lg ms-2 text-primary"></i>
            </h1>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-dark mb-2">
            <h2 className="h5">
              {this.version}<i className="fab fa-react fa-lg ms-2"></i>
            </h2>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-primary mb-2">
            <h2 className="h5">
              {this.bootstrap}<i className="fab fa-bootstrap fa-lg ms-2"></i>
            </h2>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 text-center text-success mb-2">
            <h2 className="h5">
              {this.fontawesome}<i className="fab fa-font-awesome-flag fa-lg ms-2"></i>
            </h2>
          </div>
        </div>
        <hr />
        <div className="row mb-2">
          <div className="col-md-12 text-center mb-4">
            <h3 className="h5">Features<i className="fas fa-list ms-2"></i></h3>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
            <div className="card nga-card bg-light mb-3">
              <Link to="/bootstrap">
                <div className="card-header">
                  <div className="row">
                    <div className="col-10 col-xl-10">
                      <h4 className="card-title h5">Bootstrap</h4>
                    </div>
                    <div className="col-2 col-xl-2">
                      <i className="fab fa-bootstrap fa-lg text-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">How to use Buttons, Alerts, Pagination, Tables, Collapses</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
            <div className="card nga-card bg-light mb-3">
              <div className="card-header">
                <div className="row">
                  <div className="col-10 col-xl-10">
                    <h4 className="card-title h5">Services</h4>
                  </div>
                  <div className="col-2 col-xl-2">
                    <i className="fas fa-handshake fa-lg text-primary"></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">Use services to view a playlist and a youtube player</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
            <div className="card nga-card bg-light mb-3">
              <div className="card-header">
                <div className="row">
                  <div className="col-10 col-xl-10">
                    <h4 className="card-title h5">Components</h4>
                  </div>
                  <div className="col-2 col-xl-2">
                    <i className="far fa-clone  fa-lg text-primary"></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">Channel component with Input, Output and Event Emitter</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
            <div className="card nga-card bg-light mb-3">
              <div className="card-header">
                <div className="row">
                  <div className="col-10 col-xl-10">
                    <h4 className="card-title h5">Reactive Forms</h4>
                  </div>
                  <div className="col-2 col-xl-2">
                    <i className="far fa-file-alt fa-lg text-primary"></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">A model-driven approach to handling form inputs</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2">
            <div className="card nga-card bg-light mb-3">
              <div className="card-header">
                <div className="row">
                  <div className="col-10 col-xl-10">
                    <h4 className="card-title h5">Template Driven Forms</h4>
                  </div>
                  <div className="col-2 col-xl-2">
                    <i className="far fa-file-alt fa-lg text-primary"></i>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">Forms are the mainstay of business applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Home; 
