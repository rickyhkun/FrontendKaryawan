import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      karyawan: []
    }
  }

  getKaryawan = () => {
    fetch(`http://localhost:8080/api/karyawan/`)
      .then(results => results.json())
      .then(json => {
        this.setState({
          karyawan: json
        })
        console.log("karyawan :", this.state.karyawan)
      })
      .catch(error => console.error("Eror : ", error))
  }

  componentDidMount() {
    this.getKaryawan();
  }

  render() {
    return (
      <>
        {/* Begin page */}
        <div id="wrapper">
          {/* Top Bar Start */}
          <div className="topbar">
            {/* LOGO */}
            <div className="topbar-left">

            </div>
            <nav className="navbar-custom">

            </nav>
          </div>
          {/* Top Bar End */}
          {/* ========== Left Sidebar Start ========== */}
          <div className="left side-menu">
            <div className="slimscroll-menu" id="remove-scroll">
              {/*- Sidemenu */}
              <div id="sidebar-menu">
                {/* Left Menu Start */}
                <ul className="metismenu" id="side-menu">
                  <li className="menu-title">Main</li>
                  <li>
                    <a href="index.html" className="waves-effect">
                      <i className="mdi mdi-home" /><span className="badge badge-primary float-right">{this.state.karyawan.length}</span> <span> Data Karyawan </span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Sidebar */}
              <div className="clearfix" />
            </div>
            {/* Sidebar -left */}
          </div>
          {/* Left Sidebar End */}
          {/* ============================================================== */}
          {/* Start right Content here */}
          {/* ============================================================== */}
          <div className="content-page">
            {/* Start content */}
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-title-box">
                      <h4 className="page-title">Menu Karyawan</h4>
                      {/* <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="javascript:void(0);">Agroxa</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0);">Tables</a></li>
                        <li className="breadcrumb-item active">Data Table</li>
                      </ol> */}

                    </div>
                  </div>
                </div>
                {/* end row */}
                <div className="page-content-wrapper">
                  <div className="row">
                    <div className="col-12">
                      <div className="card m-b-20">
                        <div className="card-body">
                          <h4 className="mt-0 header-title">Data Karyawan</h4>
                          {/* <p className="text-muted m-b-30">DataTables has most features enabled by
                            default, so all you need to do to use it with your own tables is to call
                            the construction function: <code>$().DataTable();</code>.
                          </p> */}
                          <table id="datatable" className="table table-bordered dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Kode</th>
                                <th>Nama</th>
                                <th>Tanggal Masuk</th>
                                <th>No HP</th>
                                <th>Limit Reimbursement</th>
                                <th>CreatedAt</th>
                                <th>UpdatedAt</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                this.state.karyawan.map((b, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{b.kode}</td>
                                      <td>{b.nama}</td>
                                      <td>{b.tglMasuk}</td>
                                      <td>{b.hp}</td>
                                      <td>{b.limitRembers}</td>
                                      <td>{b.createdAt}</td>
                                      <td>{b.updatedAt}</td>
                                      <td><a href="">Edit</a> | <a href="">Hapus</a></td>
                                    </tr>

                                  )
                                })
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> {/* end col */}
                  </div> {/* end row */}
                </div>
                {/* end page content*/}
              </div> {/* container-fluid */}
            </div> {/* content */}
            <footer className="footer">
              © 2021 Agroxa <span className="d-none d-sm-inline-block">- Crafted with <i className="mdi mdi-heart text-danger" /> by Ricky Hadi Kuncoro.</span>
            </footer>
          </div>
          {/* ============================================================== */}
          {/* End Right content here */}
          {/* ============================================================== */}
        </div>
        {/* END wrapper */}

      </>
    );
  }
}

export default App;