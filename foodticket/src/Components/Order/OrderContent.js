import React, { Component } from "react";
import axios from "axios";
import Reveal from "react-reveal/Reveal/";
import JoinModal from "../Modal/JoinModal";
class OrderContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantSelect: "",
      restaurantName: [],
      foodSelect: "",
      foodNum: "",
      restaurantNum: "",
      foodName: [],
      price: 0,
    };
  }
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
    this.setState({ restaurantSelect: name });
  };

  componentDidMount() {
    let axiosRes = this.onDataLoad().then((value) => {
      console.log(value);
      let i, j;
      let temp1, temp2;

      let foodname = new Array();
      let restaurantname = new Array();
      // window.sessionStorage.setItem("restaurantName", JSON.stringify({ name: "a" }));
      for (i = 0; i < value.length; i++) {
        let arrayValue = new Object();
        temp1 = value[i].rname;
        temp2 = value[i].fname;
        arrayValue.rname = temp1;
        arrayValue.fname = temp2;
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

    const foodList = this.state.foodName.map((name) => (
      <Reveal key={name} effect="fadeInLeft" duration={1200}>
        <button
          onClick={(e) => this.onClickRestaurant(e, name)}
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
                  {/* {this.state.restaurantSelect == "" ? <p>음식점을 선택하세요!</p> : { foodList }} */}
                </div>
                <div className="info_item">
                  <h6>가격</h6>
                  <p>$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="details_content">
                <div className="sec_title">
                  <p className="f_400 f_size_15">
                    He lost his bottle a load of old tosh cup of tea brolly bog-standard matie boy
                    blow off the little rotter morish, haggle hotpot skive off cuppa don't get
                    shirty with me off his nut the full monty. Starkers morish down the pub such a
                    fibber quaint gosh Harry boot owt to do with me the little rotter, baking cakes
                    Eaton ummm I'm telling pardon me the bee's knees vagabond Oxford chap, A bit of
                    how's your father bog-standard hanky panky daft well lavatory bubble and squeak
                    the full monty. That say nice one grub cup of tea so I said barmy only a quid, I
                    it's your round gutted mate cup of char golly gosh dropped a clanger my good
                    sir, James Bond happy days brilliant blimey I is. Boot Jeffrey cockup the BBC
                    pardon me victoria sponge Why chip shop what a load of rubbish pukka brolly
                    cuppa tickety-boo bog-standard cheesed off posh, bugger Eaton William smashing
                    knackered bog bonnet bobby bender cobblers only a quid baking cakes the full
                    monty pardon you.{" "}
                  </p>
                  <p className="f_400 f_size_15">
                    Twit bonnet Jeffrey hunky-dory gormless chancer bog-standard spiffing good time,
                    young delinquent Charles don't get shirty with me the BBC is brown bread off his
                    nut a load of old tosh, chap grub bog skive off pardon me bleeder. Lavatory on
                    your bike mate happy days the little rotter arse over tit no biggie at public
                    school wind up car boot bamboozled well barmy bleeder the wireless bugger,
                    cockup blatant David it's all gone to pot morish mush sloshed boot A bit of
                    how's your father skive off cheers a load of old tosh. No biggie mush I don't
                    want no agro it's your round cack boot say, the full monty mufty such a fibber
                    up the duff Why, Eaton pardon me spiffing blower brown bread.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OrderContent;
