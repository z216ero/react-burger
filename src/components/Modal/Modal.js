import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Style from './Modal.module.css';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
const rootElement = document.querySelector("#react-modals");

export default function Modal(props) {
    const { children, onClose } = props;

    const closeEscapeHandler = (e) => {
        e.key === 'Escape' && onClose();
    }

    useEffect(() => {
        document.addEventListener('keydown', closeEscapeHandler);
        return () => {
            document.removeEventListener('keydown', closeEscapeHandler);
        };
    }, []);

    return createPortal(
        <>
            <div className={Style.container}>
                <div className={Style.modal}>
                    <div className={Style.closeButton}>
                        <CloseIcon type="primary" onClick={onClose} />
                    </div>
                    {children}
                </div>
                <ModalOverlay onClick={onClose} />
            </div>

        </>,
        rootElement
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};
