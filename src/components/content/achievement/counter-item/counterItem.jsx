import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor'
import './counterItem.css'


const CounterItem = (props) => {


    return (
        <div className="counter-item">
            <p className='icon'>{props.icon}</p>
            <p className='item-title'>{props.title}</p>
            <VisibilitySensor>
                {({ isVisible }) =>
                <>
                    <div>{
                        isVisible ?
                            <CountUp start={0} end={props.endNumber} delay={0} duration={1.5}>
                                {({ countUpRef }) => (
                                    <span className="counter" ref={countUpRef} />
                                )}
                            </CountUp>
                            :
                            <p>fail</p>
                    }</div>
                    </>
                }
            </VisibilitySensor>
        </div>
    );
};

export default CounterItem;