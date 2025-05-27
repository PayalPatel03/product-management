import React from 'react'
import Side from '../components/Side'
import Header from '../components/Header'
import '../assets/script'

function Datatable() {
  return (
    <>
     <div className="wrapper">
  {/* Sidebar */}
 <Side/>
  {/* End Sidebar */}
  <div className="main-panel">
    <Header/>
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">DataTables.Net</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <a href="#">
                <i className="icon-home" />
              </a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Tables</a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Datatables</a>
            </li>
          </ul>
        </div>
        <div className="row">
          
          
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <h4 className="card-title">Add Row</h4>
                  <button className="btn btn-primary btn-round ms-auto" data-bs-toggle="modal" data-bs-target="#addRowModal">
                    <i className="fa fa-plus" />
                    Add Row
                  </button>
                </div>
              </div>
              <div className="card-body">
                {/* Modal */}
                <div className="modal fade" id="addRowModal" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header border-0">
                        <h5 className="modal-title">
                          <span className="fw-mediumbold"> New</span>
                          <span className="fw-light"> Row </span>
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p className="small">
                          Create a new row using this form, make sure you
                          fill them all
                        </p>
                        <form>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group form-group-default">
                                <label>Name</label>
                                <input id="addName" type="text" className="form-control" placeholder="fill name" />
                              </div>
                            </div>
                            <div className="col-md-6 pe-0">
                              <div className="form-group form-group-default">
                                <label>Position</label>
                                <input id="addPosition" type="text" className="form-control" placeholder="fill position" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group form-group-default">
                                <label>Office</label>
                                <input id="addOffice" type="text" className="form-control" placeholder="fill office" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer border-0">
                        <button type="button" id="addRowButton" className="btn btn-primary">
                          Add
                        </button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table id="add-row" className="display table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th style={{width: '10%'}}>Action</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>
                          <div className="form-button-action">
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                              <i className="fa fa-edit" />
                            </button>
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>
                          <div className="form-button-action">
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                              <i className="fa fa-edit" />
                            </button>
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>
                          <div className="form-button-action">
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                              <i className="fa fa-edit" />
                            </button>
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>
                          <div className="form-button-action">
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                              <i className="fa fa-edit" />
                            </button>
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Airi Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>
                          <div className="form-button-action">
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                              <i className="fa fa-edit" />
                            </button>
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Brielle Williamson</td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td>
                          <div className="form-button-action">
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                              <i className="fa fa-edit" />
                            </button>
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Herrod Chandler</td>
                        <td>Sales Assistant</td>
                        <td>San Francisco</td>
                        <td>
                          <div className="form-button-action">
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                              <i className="fa fa-edit" />
                            </button>
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Rhona Davidson</td>
                        <td>Integration Specialist</td>
                        <td>Tokyo</td>
                        <td>
                          <div className="form-button-action">
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                              <i className="fa fa-edit" />
                            </button>
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Colleen Hurst</td>
                        <td>Javascript Developer</td>
                        <td>San Francisco</td>
                        <td>
                          <div className="form-button-action">
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                              <i className="fa fa-edit" />
                            </button>
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Sonya Frost</td>
                        <td>Software Engineer</td>
                        <td>Edinburgh</td>
                        <td>
                          <div className="form-button-action">
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                              <i className="fa fa-edit" />
                            </button>
                            <button type="button" data-bs-toggle="tooltip" title className="btn btn-link btn-danger" data-original-title="Remove">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container-fluid d-flex justify-content-between">
        <nav className="pull-left">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="http://www.themekita.com">
                ThemeKita
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Help </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Licenses </a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          2024, made with <i className="fa fa-heart heart text-danger" /> by
          <a href="http://www.themekita.com">ThemeKita</a>
        </div>
        <div>
          Distributed by
          <a target="_blank" href="https://themewagon.com/">ThemeWagon</a>.
        </div>
      </div>
    </footer>
  </div>
  {/* Custom template | don't include it in your project! */}
  <div className="custom-template">
    <div className="title">Settings</div>
    <div className="custom-content">
      <div className="switcher">
        <div className="switch-block">
          <h4>Logo Header</h4>
          <div className="btnSwitch">
            <button type="button" className="selected changeLogoHeaderColor" data-color="dark" />
            <button type="button" className="selected changeLogoHeaderColor" data-color="blue" />
            <button type="button" className="changeLogoHeaderColor" data-color="purple" />
            <button type="button" className="changeLogoHeaderColor" data-color="light-blue" />
            <button type="button" className="changeLogoHeaderColor" data-color="green" />
            <button type="button" className="changeLogoHeaderColor" data-color="orange" />
            <button type="button" className="changeLogoHeaderColor" data-color="red" />
            <button type="button" className="changeLogoHeaderColor" data-color="white" />
            <br />
            <button type="button" className="changeLogoHeaderColor" data-color="dark2" />
            <button type="button" className="changeLogoHeaderColor" data-color="blue2" />
            <button type="button" className="changeLogoHeaderColor" data-color="purple2" />
            <button type="button" className="changeLogoHeaderColor" data-color="light-blue2" />
            <button type="button" className="changeLogoHeaderColor" data-color="green2" />
            <button type="button" className="changeLogoHeaderColor" data-color="orange2" />
            <button type="button" className="changeLogoHeaderColor" data-color="red2" />
          </div>
        </div>
        <div className="switch-block">
          <h4>Navbar Header</h4>
          <div className="btnSwitch">
            <button type="button" className="changeTopBarColor" data-color="dark" />
            <button type="button" className="changeTopBarColor" data-color="blue" />
            <button type="button" className="changeTopBarColor" data-color="purple" />
            <button type="button" className="changeTopBarColor" data-color="light-blue" />
            <button type="button" className="changeTopBarColor" data-color="green" />
            <button type="button" className="changeTopBarColor" data-color="orange" />
            <button type="button" className="changeTopBarColor" data-color="red" />
            <button type="button" className="changeTopBarColor" data-color="white" />
            <br />
            <button type="button" className="changeTopBarColor" data-color="dark2" />
            <button type="button" className="selected changeTopBarColor" data-color="blue2" />
            <button type="button" className="changeTopBarColor" data-color="purple2" />
            <button type="button" className="changeTopBarColor" data-color="light-blue2" />
            <button type="button" className="changeTopBarColor" data-color="green2" />
            <button type="button" className="changeTopBarColor" data-color="orange2" />
            <button type="button" className="changeTopBarColor" data-color="red2" />
          </div>
        </div>
        <div className="switch-block">
          <h4>Sidebar</h4>
          <div className="btnSwitch">
            <button type="button" className="selected changeSideBarColor" data-color="white" />
            <button type="button" className="changeSideBarColor" data-color="dark" />
            <button type="button" className="changeSideBarColor" data-color="dark2" />
          </div>
        </div>
      </div>
    </div>
    <div className="custom-toggle">
      <i className="icon-settings" />
    </div>
  </div>
  {/* End Custom template */}
</div>

      
    </>
  )
}

export default Datatable
