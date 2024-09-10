import React from 'react';
import Market from './market/market';
import SideBar from '../layouts/dashboard';
import Navbar from '../layouts/navbar';
import MarketInfo from './market/marketInfo';

const MarketInfoo = () => {
    return (
        <div>
           <Navbar />
           <div className="flex">
           <SideBar />
           <MarketInfo />
           </div>
           
           </div>
    );
}

export default MarketInfoo;