import React from 'react';
import './serviceItem.css'

const ServiceItem = (props) => {
    return (
        <div className='serviceItem'>
            <div className="cover-item-detail">
                <img src={props.imageURL} alt="fail" />
                <p className="title">{props.title}</p>
                <p className="detail">{props.detail}</p>
            </div>
        </div>
    );
};

export default ServiceItem;