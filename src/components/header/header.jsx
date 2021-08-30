import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import HeaderButton from './headerButton/button';



Header.propTypes = {

};

function Header(props) {
    return (
        <header>
            <div className="header">
                <div className="navbar">
                    <a href="/" className="logo">videonly</a>
                    <div className="button-gr">
                        <HeaderButton className="login-btn" title="Login"></HeaderButton>
                        <HeaderButton className="join-btn" title="Join"></HeaderButton>
                    </div>
                </div>
                <div className="content">
                    <div className="cover-content">
                        <p>고통 그 자체는</p>
                        <p>똑똑해줘서 고마워, 사랑해</p>
                        <p>홈은 단순히 더미 </p>
                        <p className="content-details">고통 그 자체가 고통, 주 아디피싱 엘리트의 사랑</p>
                    </div>
                </div>
                <div className="cover-submit-btn">
                    <HeaderButton className="header-submit-btn" title="제출하다"></HeaderButton>
                </div>
            </div>
        </header>
    );
}

export default Header;