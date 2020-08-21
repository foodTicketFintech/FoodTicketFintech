import React , {Component} from 'react';
import Sectitle from './Title/Sectitle';
import Map from './map/Map.js';
import MapMarker from './map/MapMarker.js'

class HostingMap extends Component {
    constructor(){
        super();
        this.state= {
            Map:[
                {
                    id: 1,
                    countryName: 'Singapore',
                },
                {
                    id: 2,
                    countryName: 'Toronto, Canada',
                },
                {
                    id: 3,
                    countryName: 'Bursa, Turcja',
                },
                {
                    id: 4,
                    countryName: 'Bangalore, India',
                },
                {
                    id: 5,
                    countryName: 'Dingxi, Chiny',
                },
                {
                    id: 6,
                    countryName: 'New York, USA',
                },
                {
                    id: 7,
                    countryName: 'Frankfurt, Germany',
                },
                {
                    id: 8,
                    countryName: 'Karaa, Kambodza',
                }
            ]
        }
    }
    render(){
        return(
            <section className="h_map_area">
                <div className="container">
                    <Sectitle Title="근처 15개 지역에서 식권을 사용할 수 있습니다." TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!" sClass="hosting_title text-center"/>
                    <div className="h_map">
                        {/* <Map/> */}
                        <MapMarker/>
                    </div>

                </div>
            </section>
        )
    }
}
export default HostingMap;