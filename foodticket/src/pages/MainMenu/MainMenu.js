import React from "react";
//import "./MainMenu.css";
import Map from "../../Components/map/Map.js";
import CustomerHello from "../../Components/Customer/CustomerHello.js";
import CustomerInfo from "../../Components/info/CustomerInfo.js";

function MainMenu() {
  return (
    <div>
      <Map />
      <div className="main-div">
        <div className="wrapper">
          <div className="wrapper-inline">
            <header>
              <a className="go-back-link" href="javascript:history.back();">
                <i className="fa fa-arrow-left"></i>
              </a>
              <h1 className="page-title">Food Ticket</h1>
            </header>
            <main className="fix-top-menu">
              <div className="tab-item fixed-bottom">
                <div className="tab-menu fix-width only-icons">
                  <a
                    className="menu-item active"
                    href="javascript:void(0);"
                    data-content="content1"
                  >
                    <i className="fa fa-home"></i>
                  </a>
                  <a className="menu-item" href="javascript:void(0);" data-content="content2">
                    <i className="fa fa-comment"></i>
                  </a>
                  <a className="menu-item" href="javascript:void(0);" data-content="content3">
                    <i className="fa fa-bell"></i>
                  </a>
                  <a className="menu-item" href="javascript:void(0);" data-content="content4">
                    <i className="fa fa-user"></i>
                  </a>
                </div>
                <div className="tab-content">
                  <div className="content-item active" id="content1">
                    <h3>
                      <CustomerHello />
                    </h3>
                    <CustomerInfo />

                  </div>
                  <div className="content-item" id="content2">
                    <h3>Tab Content 2</h3>
                    It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </div>
                  <div className="content-item" id="content3">
                    <div>
                      <h3>Tab Content 3</h3>
                      Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s, when an unknown printer
                      took a galley of ontaining Lorem Ipsum passages, and more recently with
                      desktop publishing software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                  <div className="content-item" id="content4">
                    <h3>마이페이지</h3>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="sweet-loader">
          <div className="box">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
