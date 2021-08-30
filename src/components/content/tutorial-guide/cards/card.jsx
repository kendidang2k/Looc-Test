import React from 'react';
import './card.css'
// import { HiOutlineArrowNarrowRight } from "react-icons/bs";
// import { CgArrowLongRight } from "react-icons/hi";
import { CgArrowLongRight } from "react-icons/cg";




const CardItem = (props) => {
    return (
        <div className="card-item">
            <div className="cover-card">
                {/* <img src={props.imgURL} alt="fail to load img" /> */}
                <p className="card-title">{props.title}</p>
                <button className="see"><CgArrowLongRight></CgArrowLongRight></button>
                <p className="card-content">{props.content}</p>
            </div>
        </div>
    );
};

export default CardItem;