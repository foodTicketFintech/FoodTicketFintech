/*global kakao */
import React, { useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function MapMarker() {
    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
            mapOption = {
                center: new kakao.maps.LatLng(37.5425412307486, 127.073725157633), // 지도 중앙, 현재 건국대학교 = (37.5425412307486, 127.073725157633)
                level: 5,
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다



        // var resArray = [];

        // for (let i = 0; i <8; i++){
        //     resArray.push(
        //         {
        //             id: window.sessionStorage.getItem(`mapId${i + 1}`),
        //             name: window.sessionStorage.getItem(`mapName${i + 1}`),
        //             position_x: window.sessionStorage.getItem(`mapPosition_x${i + 1}`),
        //             position_y: window.sessionStorage.getItem(`mapPosition_y${i + 1}`),
        //             address_restaurant: window.sessionStorage.getItem(`mapAddress_restaurant${i + 1}`)
        //         }
        //     );
        // }
        // for (let i = 0; i < 8; i++){
        //     console.log(resArray[i]);
        // }

        var positions2 = [];
        positions2.push(
            {
                content: '<div>우리집</div>',//우리집
                latlng: new kakao.maps.LatLng(37.5425412307486, 127.073725157633)//건국대학교
            },
        )
        for (let i = 1; i <= window.localStorage.getItem("resSize"); i++) {
            var myName = window.localStorage.getItem(`mapName${i}`)
            var myPosition_x = window.localStorage.getItem(`mapPosition_x${i}`)
            var myPosition_y = window.localStorage.getItem(`mapPosition_y${i}`)
            positions2.push(
                {
                    content: '<div>' + myName + '</div>',
                    latlng: new kakao.maps.LatLng(myPosition_y, myPosition_x)
                }
            );
        }
        for (let i = 0; i < window.localStorage.getItem("resSize"); i++) {
            console.log(positions2[i]);
        }

        // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
        // var positions = [
        //     {
        //         content: '<div>우리집</div>',//우리집
        //         latlng: new kakao.maps.LatLng(37.5425412307486, 127.073725157633)//건국대학교
        //     },
        //     {
        //         content: '<div>카카오</div>',
        //         latlng: new kakao.maps.LatLng(33.450705, 126.570677)
        //     },
        //     {
        //         content: '<div>생태연못</div>',
        //         latlng: new kakao.maps.LatLng(33.450936, 126.569477)
        //     },
        //     {
        //         content: '<div>텃밭</div>',
        //         latlng: new kakao.maps.LatLng(33.450879, 126.569940)
        //     },
        //     {
        //         content: '<div>근린공원</div>',
        //         latlng: new kakao.maps.LatLng(33.451393, 126.570738)
        //     }
        //     //window.sessionStorage.setItem("xy", "false");
        // ];


        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";


        for (let i = 0; i < positions2.length; i++) {
            if (i == 0) {
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions2[i].latlng, // 마커의 위치
                });
            } else {
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35);

                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions2[i].latlng, // 마커의 위치
                    image: markerImage // 마커 이미지 
                });

            }


            // 마커에 표시할 인포윈도우를 생성합니다 
            var infowindow = new kakao.maps.InfoWindow({
                content: positions2[i].content // 인포윈도우에 표시할 내용
            });
            
            //클릭이벤트 -----------------------------------------

            //마커 클릭시 위에 나타나는 인포위도우 생성
            let iwContent = '<div style="padding:5px;">' + positions2[i].content + '</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

            // click인포윈도우를 생성합니다
            let infowindowClick = new kakao.maps.InfoWindow({
                content: iwContent,
                removable: iwRemoveable
            });

            // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
            // 이벤트 리스너로는 클로저를 만들어 등록합니다 
            // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
            kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
            kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));


            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function () {
                console.log(i);
                window.localStorage.setItem("MarkerPick", i);
                window.localStorage.setItem("MarkerName", window.localStorage.getItem(`mapName${i}`));
                window.location.replace("http://localhost:3000/restaurant");

            });


        }

        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
        function makeOverListener(map, marker, infowindow) {
            return function () {
                infowindow.open(map, marker);
            };
        }

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
        function makeOutListener(infowindow) {
            return function () {
                infowindow.close();
            };
        }





    };

    return <div id="map" style={{ width: "1200px", height: "500px" }}></div>;
}
