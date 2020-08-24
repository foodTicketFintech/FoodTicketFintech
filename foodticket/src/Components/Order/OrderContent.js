import React, { Component } from "react";
import axios from "axios";
import Reveal from "react-reveal/Reveal/";
import QRCode from "qrcode.react";

class OrderContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantSelect: "",
      restaurantName: [],
      foodSelect: "",
      foodNum: "",
      restaurantNum: "",
      selectFoodName: [],
      foodName: [],
      price: 0,
      qrcode: false,
    };
  }

  foodBox = (foodName, restaurantSelect) => {
    //<React.Fragment>
    let i;
    console.log(foodName, restaurantSelect);
    let selectData = new Array();
    for (i = 0; i < foodName.length; i++) {
      if (foodName[i].rname === restaurantSelect) {
        selectData.push(foodName[i].fname);
      }
    }
    console.log(selectData);
    this.setState({ selectFoodName: selectData });
  };

  onDataLoad = async () => {
    let axiosResult = async () => {
      let userEmail = "tkdgur8377@gmail.com";
      let b = await axios({
        method: "post",
        url: "http://localhost:4000/order",
        data: {
          id: userEmail,
        },
      });
      // console.log(b.data);
      return b.data;
    };
    let axiosRes = await axiosResult();
    return axiosRes;
  };

  onClickRestaurant = async (e, name) => {
    // this.setState({ foodSelect: });
    e.preventDefault();
    let a = await this.setState({ restaurantSelect: name });
    let selectFoodList = await this.foodBox(this.state.foodName, this.state.restaurantSelect);
  };

  onClickFood = async (e, name) => {
    e.preventDefault();
    let i;
    this.setState({ foodSelect: name });
    for (i = 0; i < this.state.foodName.length; i++) {
      if (name == this.state.foodName[i].fname) {
        this.setState({ price: this.state.foodName[i].price });
      }
    }
  };

  makeQrcode = (e) => {
    e.preventDefault();
    this.setState({ qrcode: true });
  };

  componentDidMount() {
    let axiosRes = this.onDataLoad().then((value) => {
      console.log(value);
      let i, j;
      let temp1, temp2, temp3;

      let foodname = new Array();
      let restaurantname = new Array();
      // window.sessionStorage.setItem("restaurantName", JSON.stringify({ name: "a" }));

      for (i = 0; i < value.length; i++) {
        let arrayValue = new Object();

        arrayValue.rname = value[i].rname;
        arrayValue.fname = value[i].fname;
        arrayValue.price = value[i].price;

        console.log(arrayValue);
        if (i != 0) {
          if (value[i - 1].rname != value[i].rname) {
            restaurantname.push(value[i].rname);
          }
        } else {
          restaurantname.push(value[i].rname);
        }
        foodname.push(arrayValue);
      }
      this.setState({
        foodName: foodname,
        restaurantName: restaurantname,
        foodNum: value.length,
        restaurantNum: restaurantname.length,
      });
    });
  }

  render() {
    const restaurantList = this.state.restaurantName.map((name) => (
      <Reveal key={name} effect="fadeInLeft" duration={1200}>
        <button
          onClick={(e) => this.onClickRestaurant(e, name)}
          className="seo_btn seo_btn_one btn_hover"
        >
          {name}
        </button>
      </Reveal>
    ));

    const foodList = this.state.selectFoodName.map((name) => (
      <Reveal key={name} effect="fadeInLeft" duration={1200}>
        <button
          onClick={(e) => this.onClickFood(e, name)}
          className="seo_btn seo_btn_one btn_hover"
        >
          {name}
        </button>
      </Reveal>
    ));

    return (
      <section className="service_details_area sec_pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pr_70">
              <div className="job_info">
                <div className="info_head">
                  <i className="ti-receipt"></i>
                  <h6 className="f_p f_600 f_size_18 t_color3">선택사항</h6>
                </div>
                <div className="info_item">
                  <h6>음식점</h6>
                  {restaurantList}
                </div>
                <div className="info_item">
                  <h6>음식종류</h6>
                  {foodList}
                </div>
                <div className="info_item">
                  <h6>가격</h6>
                  <p>{this.state.price}</p>
                  <button
                    onClick={(e) => this.makeQrcode(e)}
                    className="seo_btn seo_btn_two btn_hover wow fadeInRight"
                  >
                    QRcode 만들기
                  </button>
                </div>
              </div>
            </div>
            {this.state.qrcode ? (
              <div className="col-lg-7">
                <QRCode size={400} value={this.state.foodSelect} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default OrderContent;
