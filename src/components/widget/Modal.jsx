import { memo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ButtonIcon from '../ui/buttonIcon/ButtonIcon';
import { ReactComponent as CloseIcon } from "../../assets/icons/delete_icon.svg";
import FormBtn from '../ui/form-buttons/FormBtn';
import './Modal.scss'


function Modal({ children, onClose, modalTitle }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Данные формы:...');
        onClose();
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };

    }, [onClose]);

    const modalRoot = document.getElementById('modals');

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay" onClick={onClose} />
            <div className='modal-box'>
                <div className="modal__header">
                    <h2 className="modal__title">{modalTitle}</h2>
                    <FormBtn
                        onClick={handleSubmit}
                        className="pc-modal"
                    />
                    <ButtonIcon
                        onClick={onClose}
                        className="modal__title__button--close"
                    >
                        <CloseIcon />
                    </ButtonIcon>
                </div>
                <div
                    className="modal__content"
                >
                    {children}
                </div>
                <FormBtn
                    onClick={handleSubmit}
                    className="mobile-modal"
                />
            </div>
        </>, modalRoot
    );

}

export default memo(Modal);