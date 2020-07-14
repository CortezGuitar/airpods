import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { ImgWrap, Container, ContainerWrap, Button } from '../General';
import Airpods1 from '../../images/airpods1_item.jpg';
import Airpods2 from '../../images/airpods2_item.jpg';
import AirpodsPro from '../../images/airpodspro_item.jpg';
import Product from '../Product';
import Airpods11 from '../../images/airpods1/airpods1_1.jpg';
import Airpods12 from '../../images/airpods1/apple-airpods_2.jpg';
import Airpods13 from '../../images/airpods1/apple-airpods_3.jpg';
import Airpods21 from '../../images/airpods2/airpods2_1.jpg';
import Airpods22 from '../../images/airpods2/airpods2_2.jpg';
import Airpods23 from '../../images/airpods2/Airpods2_3.jpeg';
import AirpodsPro1 from '../../images/airpodsPro/pro1.jpeg';
import AirpodsPro2 from '../../images/airpodsPro/pro2.jpeg';
import AirpodsPro3 from '../../images/airpodsPro/pro3.jpeg';

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
    text-align: center;
    min-height: 72px;

    span {
        font-size: 1.3rem;
    }
`;

const CatalogItemPrice = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const CatalogItemButton = styled(Button)``;

const catalogList = [
    {
        label: <CatalogItemLabel>Air Pods 1</CatalogItemLabel>,
        price: '8490 грн',
        image: Airpods1,
        title: 'Наушники Apple AirPods 1',
        photos: [Airpods11, Airpods12, Airpods13],
        id: 1,
    },
    {
        label: (
            <CatalogItemLabel>
                Air Pods 2<br />
                <span>(Wireless case)</span>
            </CatalogItemLabel>
        ),
        price: '9490 грн',
        image: Airpods2,
        title: 'Наушники Apple AirPods 2 с возможностью беспроводной зарядки',
        photos: [Airpods21, Airpods22, Airpods23],
        id: 2,
    },
    {
        label: (
            <CatalogItemLabel>
                Air Pods Pro
                <br />
                <span>(Последняя версия)</span>
            </CatalogItemLabel>
        ),
        price: '11 490 грн',
        image: AirpodsPro,
        title: 'Наушники Apple AirPods Pro (Последняя версия)',
        photos: [AirpodsPro1, AirpodsPro2, AirpodsPro3],
        id: 3,
    },
];

const Catalog = React.forwardRef(({ orderHandler }, ref) => {
    const [currentProduct, setCurrentProduct] = useState(0);
    const [overview, setShowOverview] = useState(true);

    const handleCurrentProduct = (index) => {
        return () => {
            setCurrentProduct(index);
            setShowOverview(false);
        };
    };

    const handleBackBtn = () => {
        return () => setShowOverview(true);
    };

    const handleShowOrderPopup = (e) => {
        e.stopPropagation();
        orderHandler();
    };

    return (
        <CatalogSection ref={ref}>
            <CatalogContainerWrap>
                {overview ? (
                    <CatalogContainer>
                        {catalogList.map(
                            ({ label, image, price, id }, index) => (
                                <CatalogItem
                                    key={index}
                                    onClick={handleCurrentProduct(index)}
                                >
                                    {label}
                                    <CatalogItemImg>
                                        <img src={image} alt="" />
                                    </CatalogItemImg>
                                    <CatalogItemPrice>{price}</CatalogItemPrice>
                                    <CatalogItemButton
                                        onClick={handleShowOrderPopup}
                                    >
                                        оформить заявку
                                    </CatalogItemButton>
                                </CatalogItem>
                            )
                        )}
                    </CatalogContainer>
                ) : (
                    <Product
                        product={catalogList[currentProduct]}
                        backBtn={handleBackBtn()}
                        orderBtn={handleShowOrderPopup}
                    />
                )}
            </CatalogContainerWrap>
        </CatalogSection>
    );
});

export default Catalog;
