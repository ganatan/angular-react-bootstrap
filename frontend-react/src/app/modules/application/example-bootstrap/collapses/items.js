import React from 'react';

import './items.css';

class Blockquotes extends React.Component {

  render() {


    const style1 = {
      minHeight: '120px',
    };
    const style2 = {
      width: '300px',
    };

    return (

      <div>
        <div className="card mb-2">
          <div className="card-body">
            <h1 className="card-title text-center text-primary">Close collapse with Javascript</h1>
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseWidthJavascript" aria-expanded="false"
                aria-controls="collapseWidthJavascript">
                Toggle width collapse
              </button>
            </p>
            <div style={style1}>
              <div className="collapse collapse-horizontal" id="collapseWidthJavascript">
                <div className="card card-body" style={style2}>
                  This is some placeholder content for a horizontal collapse. It&lsquo;s hidden by default and shown when
                  triggered.
                </div>
              </div>
            </div>
            <p>
              <button type="button" className="btn btn-primary me-2" >Close</button >
              <button type="button" className="btn btn-primary me-2" >Show</button>
              <button type="button" className="btn btn-primary me-2" >Toggle</button>
            </p>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h1 className="card-title text-center text-primary">Collapse with ahref</h1>
            <p>
              <a className="btn btn-primary me-2" data-bs-toggle="collapse" href="#collapseExample" role="button"
                aria-expanded="false" aria-controls="collapseExample">
                Link with href
              </a>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample">
                Button with data-bs-target
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the user activates the relevant trigger.
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h1 className="card-title text-center text-primary">Multiple Targets</h1>
            <p>
              <a className="btn btn-primary me-2" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
                aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
              <button className="btn btn-primary me-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle
                second element</button>
              <button className="btn btn-primary me-2" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse"
                aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both
                elements</button>
            </p>
            <div className="row">
              <div className="col">
                <div className="collapse multi-collapse" id="multiCollapseExample1">
                  <div className="card card-body">
                    Some placeholder content for the first collapse component of this multi-collapse example. This
                    panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="collapse multi-collapse" id="multiCollapseExample2">
                  <div className="card card-body">
                    Some placeholder content for the second collapse component of this multi-collapse example. This
                    panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h1 className="card-title text-center text-primary">Horizontal</h1>
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
                aria-expanded="false" aria-controls="collapseWidthExample">
                Toggle width collapse
              </button>
            </p>
            <div style={style1}>
              <div className="collapse collapse-horizontal" id="collapseWidthExample">
                <div className="card card-body" style={style2}>
                  This is some placeholder content for a horizontal collapse. It&lsquo;s hidden by default and shown when
                  triggered.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >

    )
  }

}
export default Blockquotes; 
