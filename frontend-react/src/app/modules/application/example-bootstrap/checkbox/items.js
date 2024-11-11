import React from 'react';

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
                  <h5 className="card-title">Simple Bootstrap Checkbox</h5>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>

                  <hr />

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                      Indeterminate checkbox
                    </label>
                  </div>

                  <hr />

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled />
                    <label className="form-check-label" htmlFor="flexCheckDisabled">
                      Disabled checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" defaultChecked disabled />
                    <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                      Disabled checked checkbox
                    </label>
                  </div>

                  <hr />

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>

                  <hr />

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
                    <label className="form-check-label" htmlFor="flexRadioDisabled">
                      Disabled radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled"
                      defaultChecked disabled />
                    <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                      Disabled checked radio
                    </label>
                  </div>

                  <hr />

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      Disabled checkbox
                    </label>
                  </div>

                  <hr />

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                      defaultChecked />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                      Default radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                      Second default radio
                    </label>
                  </div>

                  <hr />

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"
                      disabled />
                    <label className="form-check-label" htmlFor="exampleRadios3">
                      Disabled radio
                    </label>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Inline Bootstrap Checkbox</h5>

                  <div className="row">
                    <div className="col">

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col">

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                          value="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                          value="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                          value="option3" disabled />
                        <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                      </div>
                    </div>
                  </div>
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
