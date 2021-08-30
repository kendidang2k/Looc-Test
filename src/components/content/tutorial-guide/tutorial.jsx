import React from 'react';
import CardItem from './cards/card';
import './tutorial.css'


const Tutorial = () => {
    return (
        <div className="tutorial-guide">
            <div className="cover-tutorial-guide">
                <div className="title">
                    <p>TUTORIAL GUIDE</p>
                    <p>홈은 단순히, 더미 텍스트입니다</p>
                    <p className="small-title">홈은 단순히,</p>
                    <p className="small-title"> 더미 텍스트입니다</p>
                </div>
                <div className="card-group">
                    <CardItem title="인쇄및" content="인터넷은 단순히 인쇄 및 조판 산업의 더미 텍" ></CardItem>
                    <CardItem title="더미텍" content="홈은 단순히 텍스트의 더미 텍스트" ></CardItem>
                    <CardItem title="텍스트" content="홈은 단순히 텍스트의 더미 텍스트입니다" ></CardItem>
                </div>
            </div>
        </div>
    );
};

export default Tutorial;