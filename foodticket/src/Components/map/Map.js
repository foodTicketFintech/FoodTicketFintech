/*global kakao */
import React, { useEffect } from "react";
import RestaurantInfo from "../info/RestaurantInfo.js"



export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.5425412307486, 127.073725157633), // 지도 중앙, 현재 건국대학교로 표시
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(37.5425412307486, 127.073725157633); // 현재 건국대학교로 마커 표시
    let markerPosition2 = new kakao.maps.LatLng(37.5426910676091, 127.070175096842); //example
    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition, 
    });


    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return <div id="map" style={{ width: "1000px", height: "500px" }}></div>;

  
}

