import React from 'react';
import './Portfolio.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import Nptel from '../../img/nptel.png';
import Cnce from '../../img/cnce.png';
import Cnce2 from '../../img/cnce2.png';
import Cnce3 from '../../img/cnce3.jpg';
import AliceCarousel from 'react-alice-carousel';

const items = [
    <img src={Cnce} alt="" style={{ height: '500px', width:'100%'}} />,
    <img src={Cnce2} alt="" style={{ height: '500px', width: '100%' }} />,
    <img src={Cnce3} alt="" style={{ height: '500px', width: '100%' }} />,
    <img src={Nptel} alt="" style={{ height: '500px', width: '100%' }} />,
];

const Portfolio = () => {

    return (
        <div className="portfolio" id='Porfolio'>
            {/* heading */}
            <span>Some of The:</span>
            <span>Certificates</span>

            {/* slider */}
            <AliceCarousel
                mouseTracking
                items={items}
                autoPlay
                autoPlayInterval={1000} // Set the autoplay interval to 500ms
               
                infinite // Enable infinite loop
                
           
            />
        </div>
    );
};

export default Portfolio;
