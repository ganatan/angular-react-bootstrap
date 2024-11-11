import React from 'react';

import './items.css';

class Blockquotes extends React.Component {

  render() {
    return (

      <div className="container py-5">


        <div >
          <div >
            <h2 className="card-title text-primary">Modal</h2>

            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" tabIndex="-1" role="dialog" id="modalSheet">
              <div className="modal-dialog" role="document">
                <div className="modal-content rounded-6 shadow">
                  <div className="modal-header border-bottom-0">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body py-0">
                    <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the
                      newer share sheets in iOS.</p>
                  </div>
                  <div className="modal-footer flex-column border-top-0">
                    <button type="button" className="btn btn-lg btn-primary w-100 mx-0 mb-2">Save changes</button>
                    <button type="button" className="btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal" data-bs-target="#modalChoice">
              Modal Choice
            </button>


            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal" data-bs-target="#modalChoice">
              Modal Choice
            </button>

            <div className="modal fade" tabIndex="-1" role="dialog" id="modalChoice">
              <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                  <div className="modal-body p-4 text-center">
                    <h5 className="mb-0">Enable this setting?</h5>
                    <p className="mb-0">You can always change your mind in your account settings.</p>
                  </div>
                  <div className="modal-footer flex-nowrap p-0">
                    <button type="button"
                      className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right"><strong>Yes,
                        enable</strong></button>
                    <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0"
                      data-bs-dismiss="modal">No thanks</button>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal" data-bs-target="#modalTour">
              Modal Tour
            </button>

            <div className="modal fade" tabIndex="-1" role="dialog" id="modalTour">
              <div className="modal-dialog" role="document">
                <div className="modal-content rounded-6 shadow">
                  <div className="modal-body p-5">
                    <h2 className="fw-bold mb-0">What&lsquo;s new</h2>

                    <ul className="d-grid gap-4 my-5 list-unstyled">
                      <li className="d-flex gap-4">
                        <svg className="bi text-muted flex-shrink-0" width="48" height="48">
                          <use xlinkHref="#grid-fill" />
                        </svg>
                        <div>
                          <h5 className="mb-0">Grid view</h5>
                          Not into lists? Try the new grid view.
                        </div>
                      </li>
                      <li className="d-flex gap-4">
                        <svg className="bi text-warning flex-shrink-0" width="48" height="48">
                          <use xlinkHref="#bookmark-star" />
                        </svg>
                        <div>
                          <h5 className="mb-0">Bookmarks</h5>
                          Save items you love for easy access later.
                        </div>
                      </li>
                      <li className="d-flex gap-4">
                        <svg className="bi text-primary flex-shrink-0" width="48" height="48">
                          <use xlinkHref="#film" />
                        </svg>
                        <div>
                          <h5 className="mb-0">Video embeds</h5>
                          Share videos wherever you go.
                        </div>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">Great,
                      thanks!</button>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal" data-bs-target="#modalSignin">
              Modal Signin
            </button>

            <div className="modal fade" tabIndex="-1" role="dialog" id="modalSignin">
              <div className="modal-dialog" role="document">
                <div className="modal-content rounded-5 shadow">
                  <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h2 className="fw-bold mb-0">Sign up for free</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div className="modal-body p-5 pt-0">
                    <form className="">
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Sign up</button>
                      <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                      <hr className="my-4" />
                      <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                      <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
                        <svg className="bi me-1" width="16" height="16">
                          <use xlinkHref="#twitter" />
                        </svg>
                        Sign up with Twitter
                      </button>
                      <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                        <svg className="bi me-1" width="16" height="16">
                          <use xlinkHref="#facebook" />
                        </svg>
                        Sign up with Facebook
                      </button>
                      <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
                        <svg className="bi me-1" width="16" height="16">
                          <use xlinkHref="#github" />
                        </svg>
                        Sign up with GitHub
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div >
          <div >
            <h2 className="card-title text-primary">Modal</h2>

            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal"
              data-bs-whatever="@mdo">Open modal for @mdo</button>
            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal"
              data-bs-whatever="@fat">Open modal for @fat</button>
            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal"
              data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                        <input type="text" className="form-control" id="recipient-name" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message-text" className="col-form-label">Message:</label>
                        <textarea className="form-control" id="message-text"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Send message</button>
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


