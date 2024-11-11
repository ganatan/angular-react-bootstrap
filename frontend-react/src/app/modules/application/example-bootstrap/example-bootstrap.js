import React from 'react';
import { NavLink } from "react-router-dom";

import ExampleBootstrapRouting from './example-bootstrap-routing';

import './example-bootstrap.css';

class ExampleBootstrap extends React.Component {
  render() {
    return (


      <div className="container nga-container-layout">
        <div className="nga-container-sidebar">
          <ul className="list-unstyled p-2">
            <li className="mb-1">
              <button className="btn nga-btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                data-bs-target="#home-collapse" aria-expanded="false">
                Components
              </button>
              <div className="collapse" id="home-collapse">
                <ul className="nga-btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <NavLink className="link-dark rounded" to="/bootstrap/alerts">
                      <i className="fas fa-user text-primary mt-1 me-2"></i>Alerts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link-dark rounded" to="/bootstrap/badges">
                      <i className="fas fa-user-friends text-primary mt-1 me-2"></i>Badges
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/blockquotes" className="link-dark rounded"><i
                      className="fas fa-house-user text-primary mt-1 me-2"></i>Blockquotes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/cards" className="link-dark rounded"><i
                      className="fab fa-asymmetrik text-primary mt-1 me-2"></i>Cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/collapse" className="link-dark rounded"><i
                      className="fas fa-balance-scale-right text-primary mt-1 me-2"></i>Collapse
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/dropdowns" className="link-dark rounded"><i
                      className="fas fa-bahai text-primary mt-1 me-2"></i>Dropdowns
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/list-group" className="link-dark rounded"><i
                      className="fab fa-battle-net text-primary mt-1 me-2"></i>List-group
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/modal" className="link-dark rounded"><i
                      className="fab fa-canadian-maple-leaf text-primary mt-1 me-2"></i>Modal
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/toasts" className="link-dark rounded"><i
                      className="fas fa-cogs text-primary mt-1 me-2"></i>Toasts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/tooltips" className="link-dark rounded"><i
                      className="fab fa-edge text-primary mt-1 me-2"></i>Tooltips
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn nga-btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                data-bs-target="#orders-collapse" aria-expanded="false">
                Forms
              </button>
              <div className="collapse" id="orders-collapse">
                <ul className="nga-btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <NavLink to="/bootstrap/buttons" className="link-dark rounded">
                      <i className="fab fa-artstation text-primary mt-1 me-2"></i>Buttons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/checkbox" className="link-dark rounded">
                      <i className="fas fa-atom text-primary mt-1 me-2"></i>Checkbox
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/forms" className="link-dark rounded">
                      <i className="fas fa-basketball-ball text-primary mt-1 me-2"></i>Forms
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/pagination" className="link-dark rounded">
                      <i className="far fa-address-card text-primary mt-1 me-2"></i>Pagination
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/tables" className="link-dark rounded">
                      <i className="fas fa-chart-line text-primary mt-1 me-2"></i>Tables
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="border-top my-3"></li>
            <li className="mb-1">
              <button className="btn nga-btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                data-bs-target="#account-collapse" aria-expanded="false">
                Extra
              </button>
              <div className="collapse" id="account-collapse">
                <ul className="nga-btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <NavLink to="/bootstrap/accordions" className="link-dark rounded">
                      <i className="far fa-address-card text-primary mt-1 me-2"></i>Accordions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/breadcrumb" className="link-dark rounded">
                      <i className="fab fa-app-store text-primary mt-1 me-2"></i>Breadcrumb
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/popovers" className="link-dark rounded">
                      <i className="fab fa-jedi-order text-primary mt-1 me-2"></i>Popovers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/progress" className="link-dark rounded">
                      <i className="fab fa-galactic-republic text-primary mt-1 me-2"></i>Progress
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/spinners" className="link-dark rounded">
                      <i className="fab fa-empire text-primary mt-1 me-2"></i>Spinners
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bootstrap/typography" className="link-dark rounded">
                      <i className="fas fa-dove text-primary mt-1 me-2"></i>Typography
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col p-4">
            <ExampleBootstrapRouting />
          </div>
        </div>

      </div >

    )
  }
}

export default ExampleBootstrap;
