import React from "react";
import CustomerInfo from "../Components/info/CustomerInfo.js";
import CustomNavbar from '../Components/CustomNavbar';

import FooterErp from '../Components/Footer/FooterErp';
import FooterData from '../Components/Footer/FooterData';

class Customer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : "hwi",
      age : "28",
    }
  }
  componentDidMount(){
    //this.dbTest();
}
  render() {
    const {text} = this.props;

    console.log(text);
    return (
      <div className="customer">
 
        <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu" slogo="sticky_logo"/>
        <CustomerInfo
          data={"hwi"}
          onChangePage={function(){
            this.setState({name:"gg"});
          }.bind(this)}
        ></CustomerInfo>
        <FooterErp FooterData={FooterData}/>
      </div>
    );
  
  }
 }

export default Customer;
