import React from 'react';
import './makeVideo.css'
import makeVideoIMG from './img/make-video.jpg'

const Makevideo = () => {
    return (
        <div className="make-video">
            <div className="cover-make-video">
                <div className="make-video-content">
                    <p className="question">HOW DO I MAKE A VIDEO</p>
                    <p className="title">비디오 란 무엇입니까인쇄 란  ?</p>
                    <p className="content">은및의 더미 텍스트입니다. 은 년대 이래로 업계의 표준 더미 텍스트였습니다. 그 당시 무명의 프린터가 활자 갤리선을 가져와 활자 표본 책을 만들기 위해 뒤섞였습니다. 그것은 5세기 동안 살아남았을 뿐만 아니라 전자 조판으로의 도약에도 불구하고 본질적으로 변하지 않은 채로 남아 있습니다.</p>
                    <button>제출하다</button>
                </div>
                <div className="make-video-img">
                    <img src={makeVideoIMG} alt="fail" />
                </div>
            </div>
        </div>
    );
};

export default Makevideo;