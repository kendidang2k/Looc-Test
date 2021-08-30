import React from 'react';
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import ServiceItem from './service-item/serviceItem';
import './services.css'

const Services = () => {
    return (
        <div className='services'>
            <div className="cover-services">
                <p className="title">가 중요하다고</p>
                <p className="detail">질적으로 변경되지 않은 채 ?</p>
                <p className="detail"> 란 무엇입니까인쇄 란 변경되지 않은 변경되지 않은 </p>
                <div className="cover-service-items">
                    <ServiceItem imageURL={img1} title="이터 보호가" detail="책을 만들 그것은 5세기 동안 살아"></ServiceItem>
                    <ServiceItem imageURL={img2} title="이터 보호가" detail="책을 만들 그것호가은 5세기 동안 살아"></ServiceItem>
                    <ServiceItem imageURL={img3} title="이터 보호가" detail="책을 만들 그것은을 만들 5세호가기 동안 살아"></ServiceItem>
                    <ServiceItem imageURL={img4} title="이터 보호가" detail="책을 만들 그것을 만들은 5세기 동안 살아"></ServiceItem>
                </div>
            </div>
        </div>
    );
};

export default Services;