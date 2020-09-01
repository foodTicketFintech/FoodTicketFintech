import React, { Component } from "react";
import axios from "axios";
import ResInfo from "./ResInfo.js";
import Pay from "../../Components/Pay/pay.js";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getFood = async () => {
    let len;
    const rest = await axios({
      method: "GET",
      url: "http://localhost:4000/restaurant/food",
      data: {},
    });
    const name = window.localStorage.getItem("MarkerName");
    const myData = [];
    len = rest.data.length;
    for (let i = 0; i < len; i++) {
      if (rest.data[i].res_id == window.localStorage.getItem("MarkerPick")) {
        myData.push(rest.data[i]);
      }
    }
    this.setState({ data: myData });
  };

  setHref() {
    this.setState({href : "http://localhost:3000/pay?resId=" + this.state.myData[0].res_id});
  }

  onBuy() {
    var amount = document.querySelector('.pay').value;
        window.localStorage.setItem("amount", amount);
        debugger;
        window.location.href = "http://localhost:3000/pay?resId=" + this.state.myData[0].res_id;
  }

  componentWillMount() {
    this.getFood();
  }
  // componentDidMount(){}
  render() {
    const markerPick = window.localStorage.getItem("MarkerPick");
    const res_name = window.localStorage.getItem("MarkerName");
    // const ticketPrice = '';
    const menus = this.state.data;

    return (
      <section className="service_details_area sec_pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pr_70">
              <div className="job_info">
                <div className="info_head">
                  <i className="ti-receipt"></i>
                  <h6 className="f_p f_600 f_size_18 t_color3">식권 구매하기</h6>
                </div>
                <div className="info_item">
                  <h3>음식점</h3>
                  <p>{res_name}</p>
                </div>
                <div className="info_item">
                  <h4>메뉴</h4>
                  <br />
                  <div>
                    {menus.map((menu) => {
                      var a = (
                        <ResInfo
                          menu_id={menu.menu_id}
                          res_id={menu.res_id}
                          menu_name={menu.menu_name}
                          price={menu.price}
                        />
                      );

                      return a;
                    })}
                  </div>
                </div>
                <div className="info_item">
                  <h4>가격</h4>
                  <input className="pay" type="number" placeholder="충전할 금액을 입력하세요." />
                </div>
                <div className="submit_button">
                  <button onClick={
                    function () {
                      var amount = document.querySelector('.pay').value;
                      window.localStorage.setItem("amount", amount);
                      window.location.href = "http://localhost:3000/pay?resId=" + this.state.data[0].res_id;
                    }.bind(this)

                  } className="btn_three">
                    식권구매
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="details_content">
                <div className="sec_title">
                  <p className="f_400 f_size_15">FoodTicket</p>
                  <p className="f_400 f_size_15"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Restaurant;
