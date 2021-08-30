import React from 'react';
import CounterItem from './counter-item/counterItem';
import './achievement.css'
import { BiMessageDetail } from "react-icons/bi";
import { FaVideo, FaBuilding } from "react-icons/fa";




const Achievement = () => {
    return (
        <div className="achievement">
            <div className="cover-achievement">
                <p className="title">호가 중요하다고</p>
                <div className="cover-counter">
                    <CounterItem endNumber="41" icon={<FaBuilding></FaBuilding>} title="요하다고"></CounterItem>
                    <CounterItem endNumber="164" icon={<BiMessageDetail></BiMessageDetail>} title="요하다고"></CounterItem>
                    <CounterItem endNumber="82" icon={<FaVideo></FaVideo>} title="요하다고"></CounterItem>
                </div>
                <p className="detail">본질적으로 변경되지 않은 채 은 채전자 요하다고하다고</p>
                <button className='submit'>제출하다</button>
            </div>
        </div>
    );
};

export default Achievement;