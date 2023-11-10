// src/component/ProductList.jsx

import React from "react"
import styled from "styled-components"
import data from "../data.json"



const Wrapper = styled.div`
    display: flex;
    width : 600px;
    align-items: center;
    padding: 16px;
    border: 1px solid grey;
    border-radius: 8px;
    background: white;

`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 16px; /* 이미지와 텍스트 사이의 간격 조정 */
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column; /* 사진과 텍스트를 수직으로 나열 */
`;

const CartDiv = styled.div`
    margin-left: auto; // 컨테이너 오른쪽에 붙이기
    flex-direction: column; 
    display: flex;
`

const ProductName = styled.span`
    font-weight:bold;
    font-size : 24px;
    margin-bottom : 20px;
`


function formatPrice(price) {
    // 숫자를 받아서 "₩20,000" 형태로 변환
    return price ? new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price): null
}


function ProductListItem(props) {
    const product = props.product;

    return (
        <Wrapper>
            <Image src={product.img} alt={product.name} />
            <ProductContainer >
                <ProductName>{product.name} ({product.brand})</ProductName>
                <p>{product.explane}</p>
            </ProductContainer>
            <CartDiv>
                <ProductName>{formatPrice(product.price)}</ProductName>
            </CartDiv>
            
        </Wrapper>
    );
}

function GuestProductList(props) {
    const products = data;

    return (
        <div>
            {products.map((product, index) => {
                return (
                    <ProductListItem
                        key={product.id}
                        product={product}
                    />
                );
            })}
        </div>
    );
}

export default GuestProductList;