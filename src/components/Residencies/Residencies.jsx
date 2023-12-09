import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import propertiesData from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const SliderButtons = () => {
  const swiper = useSwiper();
  
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}

function Residencies() {
  return (
    <section className="r-wrapper" /*style={   //trying to change arrows when carrousel ends or starts
      Swiper.activeIndex === propertiesData[0].detail ? {backgroundColor:red} : {} }*/>
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className='orangeText'>Best Choices</span>
            <span className='primaryText'>Popular Residences</span>
          </div>
          <Swiper {...sliderSettings}>
            <SliderButtons/>
            {
              propertiesData.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="flexColStart r-card">
                    <img src={card.image} alt="house" />
                    <span className="secondaryText r-price">
                      <span>$</span><span>{card.price}</span>
                    </span>
                    <span className='primaryText'>{card.name}</span>
                    <span className='secondaryText'>{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </section>
  )
}

export default Residencies