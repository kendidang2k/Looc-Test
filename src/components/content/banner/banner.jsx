import React from 'react';
import './banner.css'


const Banner = () => {
    return (
        <div className="banner">
            <div className="cover-banner-content">
                <div className="banner-title">
                    <p>데이터 보호가 중요하다고, 생각합니다 요하</p>
                </div>
                <div className="banner-content">
                    <p>본질적으로 변경되지 않은 채 은 채전자 요하다고하다고 !</p>
                </div>
                <button className='banner-btn'>제출하다</button>
            </div>
        </div>
    );
};

export default Banner;