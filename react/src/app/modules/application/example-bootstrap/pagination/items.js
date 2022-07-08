import React from 'react';

import './items.css';

class Blockquotes extends React.Component {

  render() {
    return (

      <div>

        <div className="alert alert-warning" role="alert">
          Warning !<br />
          <strong>Long Paginations with navbar are not responsive !</strong><br /><br />
          Try & Test the following paginations with mobile devices<br />
        </div>


        <div className="card mb-1">
          <div className="card-body">
            <h1 className="h4 card-title text-center text-primary mb-2">Simple</h1>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h1 className="h4 card-title text-center text-primary mb-2">With Icons</h1>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h1 className="h4 card-title text-center text-primary mb-2">With Icons</h1>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&lsaquo;</span>
                  </a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&rsaquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h1 className="h4 card-title text-center text-primary mb-2">Disabled/Enabled</h1>
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Prev</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h1 className="h4 card-title text-center text-primary mb-2">Large</h1>
            <nav aria-label="...">
              <ul className="pagination pagination-lg">
                <li className="page-item active" aria-current="page">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h1 className="h4 card-title text-center text-primary mb-2">Small</h1>
            <nav aria-label="...">
              <ul className="pagination pagination-sm">
                <li className="page-item active" aria-current="page">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
              </ul>
            </nav>
          </div>
        </div>


        <div className="card mb-2">
          <div className="card-body">
            <h1 className="h4 card-title text-center text-primary mb-4">Justify Center</h1>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="card mb-2">
          <div className="card-body">
            <h1 className="h4 card-title text-center text-primary">Justify End</h1>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Prev</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

    )
  }

}
export default Blockquotes; 
