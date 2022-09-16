import Style from './ModalOverlay.module.css';
import PropTypes from 'prop-types';
import React from 'react'

export default function ModalOverlay(props) {
    const { onClick } = props;
    return (
        <div onClick={() => { onClick() }} className={Style.background}></div>
    )
} 

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
}