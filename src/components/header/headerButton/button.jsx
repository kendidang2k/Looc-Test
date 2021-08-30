import React from 'react';
import PropTypes from 'prop-types';
import './button.css'

HeaderButton.propTypes = {
    
};

function HeaderButton(props) {
    return (
        <button className={props.className}>{props.title}</button>
    );
}

export default HeaderButton;