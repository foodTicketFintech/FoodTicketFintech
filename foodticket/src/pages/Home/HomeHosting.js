import React from 'react';
import CustomNavbar from '../../Components/CustomNavbar';
import HostingBanner from '../../Components/Banner/HostingBanner';
import DomainSearch from '../../Components/DomainSearch';
import HostingPlan from '../../Components/Features/HostingPlan';
import HostingMap from '../../Components/HostingMap';

import HostingActionTwo from '../../Components/HostingActionTwo';
import FooterErp from '../../Components/Footer/FooterErp';
import FooterData from '../../Components/Footer/FooterData';

const HomeHosting =()=> {
    return(
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four hosting_menu" nClass="w_menu" slogo="sticky_logo"/>
            <HostingBanner/>
            <DomainSearch/>
            <HostingPlan/>
            <HostingMap/>
            
            <HostingActionTwo/>
            <FooterErp FooterData={FooterData}/>
        </div>
    )
}
export default HomeHosting;