import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Style from './ModalOverlay.module.css';
import PropTypes from 'prop-types';
const rootElement = document.querySelector("#react-modals");

export default function ModalOverlay(props) {
    const { children, onClose } = props;

    const closeEscapeHandler = (e) => {
        e.key === 'Escape' && onClose();
    }

    const closeByClickBackgroundHanlder = (e) => {
        if (e.target.id === "background") {
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closeEscapeHandler);
        document.addEventListener('click', closeByClickBackgroundHanlder);
        return () => {
            document.removeEventListener('keydown', closeEscapeHandler);
            document.removeEventListener('click', closeEscapeHandler);
        };
    }, []);

    return createPortal(
        <>
            <div id='background' className={Style.background}>
                <div className={Style.modal}>
                    <div className={Style.closeButton}>
                        <CloseIcon type="primary" onClick={onClose} />
                    </div>
                    {children}
                </div>
            </div>
        </>,
        rootElement
    );
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func
};
