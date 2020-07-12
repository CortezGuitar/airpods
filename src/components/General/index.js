import styled from 'styled-components/macro';

export const ContainerWrap = styled.div`
    max-width: 1366px;
    margin: 0 auto;
`;

export const Container = styled.div`
    max-width: 1160px;
    margin: 0 auto;
`;

export const ImgWrap = styled.div`
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

export const Button = styled.button`
    background-color: rgb(232, 53, 135);
    transition: background-color, color, box-shadow;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    color: white;
    box-shadow: inset 0 0 0 2px rgb(232, 53, 135);
    border: none;
    border-radius: 6px;
    padding: 1rem 2rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    :hover {
        background-color: white;
        color: rgb(232, 53, 135);
    }
`;
