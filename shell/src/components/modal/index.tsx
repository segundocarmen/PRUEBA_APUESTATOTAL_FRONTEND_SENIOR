/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import './index.scss';
interface Props {
    onClose: () => void;
    open: boolean;
    fullScreen?: boolean;
    children?: ReactNode;
    title?: string;
    scrollController?: (target: any) => void;
}

const Modal = ({
    onClose,
    open,
    fullScreen,
    children,
    title,
    scrollController
}: Props) => {
    const OnScroll = (event: any) => {
        const target = event.target;
        if (scrollController) {
            scrollController(target);
        }
    };

    return (
        <div
            onClick={onClose}
            className={`backdrop ${open ? 'visible' : 'invisible'}`}
        >
            <div
                className={`modal-container ${fullScreen ? 'size-fullscreen' : 'size-regular'}`}
                onClick={(e: any) => {
                    e.stopPropagation();
                }}
            >
                <div className='modal-header'>
                    <span> {title} </span>
                    <button onClick={onClose} className='at_button_clear'>
                        X
                    </button>
                </div>
                <div className='modal-body' onScroll={OnScroll}>
                    {children}
                </div>
                <div className='modal-footer'>
                    <button
                        className='at_button bg-red cl-white'
                        onClick={onClose}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
