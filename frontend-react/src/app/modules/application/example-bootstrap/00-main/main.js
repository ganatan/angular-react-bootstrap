import React from 'react';
import { Link } from "react-router-dom";

import './main.css';

class Main extends React.Component {

  render() {

    const features =
      [
        { id: 1, name: 'Accordions', link: 'accordions', icon: 'far fa-address-card' },
        { id: 2, name: 'Alerts', link: 'alerts', icon: 'fas fa-user' },
        { id: 3, name: 'Badges', link: 'badges', icon: 'fas fa-user-friends' },
        { id: 4, name: 'Blockquotes', link: 'blockquotes', icon: 'fas fa-house-user' },
        { id: 5, name: 'Breadcrumb', link: 'breadcrumb', icon: 'fab fa-app-store' },
        { id: 6, name: 'Buttons', link: 'buttons', icon: 'fab fa-artstation' },
        { id: 7, name: 'Cards', link: 'cards', icon: 'fab fa-asymmetrik' },
        { id: 8, name: 'Checkbox', link: 'checkbox', icon: 'fas fa-atom' },
        { id: 9, name: 'Collapse', link: 'collapse', icon: 'fas fa-balance-scale-right' },
        { id: 10, name: 'Dropdowns', link: 'dropdowns', icon: 'fas fa-bahai' },
        { id: 11, name: 'Forms', link: 'forms', icon: 'fas fa-basketball-ball' },
        { id: 12, name: 'List-group', link: 'list-group', icon: 'fab fa-battle-net' },
        { id: 13, name: 'Modal', link: 'modal', icon: 'fab fa-canadian-maple-leaf' },
        { id: 14, name: 'Pagination', link: 'pagination', icon: 'far fa-address-card' },
        { id: 15, name: 'Popovers', link: 'popovers', icon: 'fab fa-jedi-order' },
        { id: 16, name: 'Progress', link: 'progress', icon: 'fab fa-galactic-republic' },
        { id: 17, name: 'Spinners', link: 'spinners', icon: 'fab fa-empire' },
        { id: 18, name: 'Tables', link: 'tables', icon: 'fas fa-chart-line' },
        { id: 19, name: 'Toasts', link: 'toasts', icon: 'fas fa-cogs' },
        { id: 20, name: 'Tooltips', link: 'tooltips', icon: 'fab fa-edge' },
        { id: 21, name: 'Typography', link: 'typography', icon: 'fas fa-dove' },
      ];

    function Item(props) {

      const iconclass = props["feature"].icon + " fa-lg text-dark";

      return <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-2">
        <div className="nga-card-rotate">
          <Link to={props.feature.link}>
            <div className="card">
              <div className="nga-card-header">
                <div className="row mt-2">
                  <div className="col-9 col-xl-9">
                    <h5 className="card-title text-primary">{props.feature.name}</h5>
                  </div>
                  <div className="col-3 col-xl-3">
                    <i className={iconclass}></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>;
    }


    return (

      <div>
        <div className="row mb-1">
          <div className="col-md-12 text-center">
            <h2 className="h4">Bootstrap Features<i className="ms-2 fab fa-bootstrap"></i></h2>
          </div>
        </div>
        <div className="row pt-2">
          {features.map((feature) => <Item key={feature.name} feature={feature} />)}
        </div>
      </div >


    )
  }

}
export default Main; 
