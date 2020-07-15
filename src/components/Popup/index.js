import React from 'react';
import styled from 'styled-components/macro';
import OrderForm from '../Form';

const PopupWrap = styled.div`
    max-width: 600px;
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 0 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 1rem;
    z-index: 1000;
    background-color: white;
    opacity: 0.9;

    animation: 300ms ease-in popup;

    @media all and (max-width: 767px) {
        width: 96%;
    }

    @keyframes popup {
        from {
            top: 0;
        }
        to {
            top: 50%;
        }
    }
`;

function Popup() {
    return (
        <PopupWrap>
            <OrderForm />
        </PopupWrap>
    );
}

export default Popup;
