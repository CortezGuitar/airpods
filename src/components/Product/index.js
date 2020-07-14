import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button, Container, ImgWrap } from '../General';
import Check from '../../images/Check.jpg';
import Bullet from '../../images/bullet.svg';

const ProductWrap = styled(Container)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
`;

const PhotosWrap = styled.div`
    max-width: 340px;
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    padding: 0.5rem;
`;

const DescWrap = styled.div`
    max-width: 780px;
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ProductBigPhoto = styled(ImgWrap)`
    width: 100%;
    height: 340px;
    margin-bottom: 2rem;
`;
const ProductSmallPhoto = styled(ImgWrap)`
    box-shadow: ${({ current }) =>
        current ? '0px 0px 3px rgb(232, 53, 135)' : '0px 0px 3px white'};
    width: 72px;
    height: 72px;
    cursor: pointer;
`;
const SmallPhotosList = styled.div`
    display: flex;
    justify-content: space-around;
`;

const BackBtn = styled(Button)`
    padding: 0 1rem;
    height: 2.5rem;
`;

const ProductTitleWrap = styled.div`
    display: flex;
    margin-bottom: 2rem;
`;

const ProductTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    max-width: 460px;
`;

const ProductInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`;

const ProductPrice = styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`;

const ProductCheckWrap = styled(ImgWrap)`
    width: 36px;
    height: 33px;
    margin-right: 1rem;
`;

const ProductCheck = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1rem;
`;

const ProductCheckText = styled.div`
    font-size: 1.2rem;
    color: darkgreen;
`;

const ProductInfoList = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const ProductInfoItem = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
`;

const ProductInfoIcon = styled(ImgWrap)`
    width: 20px;
    height: 20px;
    margin-right: 1rem;
`;

const ProductInfoLabel = styled.div``;

const ProductOrderBtn = styled(Button)`
    width: 318px;
    align-self: flex-end;
    margin-top: 2rem;
`;

const infoList = [
    'Новой Почтой по всей Украине, отправка в день заказа',
    'Гарантия 12 месяцев, обмен/возврат в течении 14 дней',
    'Наличными при получении',
];

function Product({ product, backBtn, orderBtn }) {
    const { price, title, photos } = product;

    const [currentPhoto, setCurrentPhoto] = useState(0);

    const handleCurrentPhoto = (index) => {
        return () => setCurrentPhoto(index);
    };

    const handleBackBtn = () => {
        backBtn(null);
    };

    const handleOrderBtn = (e) => {
        orderBtn(e);
    };

    return (
        <ProductWrap>
            <DescWrap>
                <ProductTitleWrap>
                    <BackBtn onClick={handleBackBtn}>назад</BackBtn>
                    <ProductTitle>{title}</ProductTitle>
                </ProductTitleWrap>
                <ProductInfo>
                    <ProductPrice>
                        {price}
                        <ProductCheck>
                            <ProductCheckWrap>
                                <img src={Check} alt="" />
                            </ProductCheckWrap>
                            <ProductCheckText>Есть в наличии</ProductCheckText>
                        </ProductCheck>
                    </ProductPrice>
                    <ProductInfoList>
                        {infoList.map((item, index) => (
                            <ProductInfoItem key={index}>
                                <ProductInfoIcon>
                                    <img src={Bullet} alt="" />
                                </ProductInfoIcon>
                                <ProductInfoLabel>{item}</ProductInfoLabel>
                            </ProductInfoItem>
                        ))}
                        <ProductOrderBtn onClick={handleOrderBtn}>
                            Заказать
                        </ProductOrderBtn>
                    </ProductInfoList>
                </ProductInfo>
            </DescWrap>
            {photos && (
                <PhotosWrap>
                    <ProductBigPhoto>
                        <img src={photos[currentPhoto]} alt="" />
                    </ProductBigPhoto>

                    <SmallPhotosList>
                        {photos.map((item, index) => (
                            <ProductSmallPhoto
                                key={index}
                                current={index === currentPhoto}
                                onClick={handleCurrentPhoto(index)}
                            >
                                <img src={item} alt="" />
                            </ProductSmallPhoto>
                        ))}
                    </SmallPhotosList>
                </PhotosWrap>
            )}
        </ProductWrap>
    );
}

export default Product;
