import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CarbonLogo from '../../../assets/carbon.jpg';
import { FaArrowRight } from "react-icons/fa";
import './Swiperr.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Swiperr = () => {
  return (
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation
        modules={[Pagination , Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='swiperr-container'>
            <div className='swiperr-box'>
              <div className='swiperr-img'><img src = {CarbonLogo} alt = 'logo' /></div>
              <div className='swiperr-right-container'>
                <h3>Trading Tracker</h3>
                <p>Website adaptable to all devices, with ui components and animated interactions</p>
                <span>Tech used :- Reactjs , JavaScript , Chartjs</span>
                <button>Demo <span><FaArrowRight className='swiperr-right-arrow'/></span></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperr-container'>
            <div className='swiperr-box'>
              <div className='swiperr-img'><img src = {CarbonLogo} alt = 'logo' /></div>
              <div className='swiperr-right-container'>
                <h3>Trading Tracker</h3>
                <p>Website adaptable to all devices, with ui components and animated interactions</p>
                <span>Tech used :- Reactjs , JavaScript , Chartjs</span>
                <button>Demo <span><FaArrowRight className='swiperr-right-arrow'/></span></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperr-container'>
            <div className='swiperr-box'>
              <div className='swiperr-img'><img src = {CarbonLogo} alt = 'logo' /></div>
              <div className='swiperr-right-container'>
                <h3>Trading Tracker</h3>
                <p>Website adaptable to all devices, with ui components and animated interactions</p>
                <span>Tech used :- Reactjs , JavaScript , Chartjs</span>
                <button>Demo <span><FaArrowRight className='swiperr-right-arrow'/></span></button>
              </div>
            </div>
          </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default Swiperr;