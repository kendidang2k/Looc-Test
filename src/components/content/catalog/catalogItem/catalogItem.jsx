import React from 'react';
import './catalogItem.css'

const CatalogItem = (props) => {
    return (
        <div className='catalog-item' style={{ backgroundImage: `url("${props.imgURL}")` }}>
            <div className="cover-inside-item">
                <p className="title">{props.title}</p>
                <p className="detail">{props.detail}</p>
            </div>
        </div>
    );
};

export default CatalogItem;