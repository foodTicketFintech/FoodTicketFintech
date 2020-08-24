import React, { Component } from "react";
import axios from "axios";

class ResInfo extends React.Component {
    render() {
        return (
            <div>
                <span>메뉴 : {this.props.menu_name}</span><br />
                <hr />
            </div>
        );
    }
}

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getFood = async () => {
        let len;
        const rest = await axios({
            method: 'GET',
            url: 'http://localhost:4000/restaurant/food',
            data: {}

        });
        const name = window.localStorage.getItem("MarkerName");
        console.log(name);
        // console.log(rest.data);
        this.setState(rest.data);
        len = rest.data.length;
        // console.log(this.state);
        // console.log(this.state[window.sessionStorage.getItem("MarkerPick")]);
        // console.log(this.state);
        // console.log(rest.data.length)
        console.log(len);
        for (let i = 0; i < len; i++) {
            if (this.state[i].res_id == window.localStorage.getItem("MarkerPick")) {
                console.log(this.state[i]);
            }

        }


    }

    componentWillMount(){
        this.getFood();
        console.log("willMount");
    }
    componentDidMount() {
    }
    render() {
        const markerPick = window.localStorage.getItem("MarkerPick");
        const res_name = window.localStorage.getItem("MarkerName");
        // const res_list = [];
        // res_list = this.state;
        // const resList = res_list.map(
        //     (i) => (
        //       <ResInfo res_id={i}/>
        //     )
        //   );
        const len = this.state.length;

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
                                    <p>{res_name}</p>
                                </div>
                                <div className="info_item">
                                    <h6>음식종류</h6>
                                    <p></p>
                                    
                                </div>
                                <div className="info_item">
                                    <h6>가격</h6>
                                    <p>100,000원</p>
                                </div>
                                <div className="submit_button">
                                    <button>식권구매</button>
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

export default Restaurant;