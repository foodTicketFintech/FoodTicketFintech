import React from "react";
import CustomerInfo from "../Components/info/CustomerInfo.js";

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
      <div className="mainmenu">
        <h3>
        hello
        </h3>
        <CustomerInfo
          data={"hwi"}
          onChangePage={function(){
            this.setState({name:"gg"});
          }.bind(this)}
        ></CustomerInfo>
      </div>
    );
  
  }
 }

export default Customer;
