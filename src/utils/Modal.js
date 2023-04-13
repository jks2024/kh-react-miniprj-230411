import React from "react";
import styled from 'styled-components';

const ModalStyle = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);

    .openModal {
        display: flex;
        align-items: center;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-bg-show 0.8s;
    }
    button {
        outline: none;
        cursor: pointer;
        margin-right: 10px;
        border: 0;
    }

    section {
        width: 90%;
        max-width: 450px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    section > header button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
    }

    section > main {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
    }

    section > footer {
        padding: 12px 16px;
        text-align: right;
    }





`;

const Modal = (props) => {
    const { open, confirm, close, type, header, children } = props;

    return (
        <ModalStyle className={open ? 'openModal modal' : 'modal'}>
            {open &&
                <section>
                    <header>
                        {header}
                        <button onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{children}</main>
                    <footer>
                        {type && <button onClick={confirm}>확인</button>}
                        <button onClick={close}>취소</button>
                    </footer>
                </section>
            }
        </ModalStyle>
    );
};
export default Modal;