import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import CatalogItem from './catalogItem/catalogItem';
import img1 from './img/item1.jpg'
import img2 from './img/item2.jpg'
import img3 from './img/item3.jpg'
import img4 from './img/item4.jpg'
import img5 from './img/item5.jpg'
import img6 from './img/item6.jpg'
import './catalog.css'

const Catalog = () => {
    return (
        <div className='catalog'>
            <Swiper slidesPerView={4} spaceBetween={10} autoplay={true} breakpoints={{
                "200": {
                    "slidesPerView": 1,
                  },
                  "500": {
                    "slidesPerView": 2,
                  },
                  "768": {
                    "slidesPerView": 3,
                  },
                  "1024": {
                    "slidesPerView": 4,
                  },
                  "1200": {
                    "slidesPerView": 5,
                  }
            }} className="mySwiper">
                <SwiperSlide><CatalogItem imgURL={img1} title="활자 표본 책을 만들기" detail="5세기 동안 살아"></CatalogItem></SwiperSlide>
                <SwiperSlide><CatalogItem imgURL={img2} title="활자 표본 책을 만들기" detail="5세기 동안 살아"></CatalogItem></SwiperSlide>
                <SwiperSlide><CatalogItem imgURL={img3} title="활자 표본 책을 만들기" detail="5세기 동안 살아"></CatalogItem></SwiperSlide>
                <SwiperSlide><CatalogItem imgURL={img4} title="활자 표본 책을 만들기" detail="5세기 동안 살아"></CatalogItem></SwiperSlide>
                <SwiperSlide><CatalogItem imgURL={img5} title="활자 표본 책을 만들기" detail="5세기 동안 살아"></CatalogItem></SwiperSlide>
                <SwiperSlide><CatalogItem imgURL={img6} title="활자 표본 책을 만들기" detail="5세기 동안 살아"></CatalogItem></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Catalog;