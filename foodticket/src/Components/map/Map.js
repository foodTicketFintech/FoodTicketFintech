/*global kakao */
import React, { useEffect, Component } from "react";
import axios from "axios";

class MapRestaurant extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      positionX: '',
      positionY: '',
      address: '',
    };
  }
  
  
  
componentDidMount() {
    this.dbTest();
    console.log("asdf")
 
  // data.forEach((data, ind) =>{ //맵으로 구현
  //   console.log(data.id, data.email);
  // })
};
  
dbTest = async() =>{
  const data = await axios.get({
    method: "GET",
    url: `localhost:4000/restaurant`,
    headers: {
    },
    data: [{
      id: this.state.id,
      name: this.state.name,
      positionX: this.state.positionX,
      positionY: this.state.positionY,
      address: this.state.address,
    }],
});
}

}

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.5425412307486, 127.073725157633),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(37.5425412307486, 127.073725157633);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return <div id="map" style={{ width: "500px", height: "500px" }}></div>;
}
