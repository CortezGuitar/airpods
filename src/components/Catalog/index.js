import React from 'react';
import styled from 'styled-components/macro';
import { ImgWrap, Container, ContainerWrap, Button } from '../General';
import Airpods1 from '../../images/airpods1_item.jpg';
import Airpods2 from '../../images/airpods2_item.jpg';
import AirpodsPro from '../../images/airpodspro_item.jpg';

const CatalogSection = styled.section``;

const CatalogContainerWrap = styled(ContainerWrap)`
    background-color: rgb(247, 247, 247);
`;

const CatalogContainer = styled(Container)`
    padding: 2rem 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const CatalogItem = styled.div`
    transition: box-shadow, transform;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    width: 20rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 9px -3px rgb(0, 0, 0, 0.5);
    cursor: pointer;

    :hover {
        box-shadow: 3px 6px 20px 0 rgb(0, 0, 0, 0.5);
        transform: translateY(-1rem);
    }
`;

const CatalogItemImg = styled(ImgWrap)`
    width: 200px;
    height: 366px;
    margin-bottom: 1rem;
`;

const CatalogItemLabel = styled.div`
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const CatalogItemPrice = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const CatalogItemButton = styled(Button)``;

const catalogList = [
    {
        label: 'Air Pods 1',
        price: '8490 грн',
        image: Airpods1,
    },
    {
        label: 'Air Pods 2',
        price: '9490 грн',
        image: Airpods2,
    },
    {
        label: 'Air Pods Pro',
        price: '11 490 грн',
        image: AirpodsPro,
    },
];

function Catalog() {
    return (
        <CatalogSection>
            <CatalogContainerWrap>
                <CatalogContainer>
                    {catalogList.map(({ label, image, price }) => (
                        <CatalogItem key={label}>
                            <CatalogItemLabel>{label}</CatalogItemLabel>
                            <CatalogItemImg>
                                <img src={image} alt="" />
                            </CatalogItemImg>
                            <CatalogItemPrice>{price}</CatalogItemPrice>
                            <CatalogItemButton>
                                оформить заявку
                            </CatalogItemButton>
                        </CatalogItem>
                    ))}
                </CatalogContainer>
            </CatalogContainerWrap>
        </CatalogSection>
    );
}

export default Catalog;
