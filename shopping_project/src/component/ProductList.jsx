// src/component/ProductList.jsx

import React from "react"
import styled from "styled-components"
import data from "../data.json"



const Wrapper = styled.div`
    display: flex;
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

const AddToCartButton = styled.button`
    background-color: #0A82FF;
    color: #FFF;
    padding: 5px 10px;
    border: 1px;
    border-radius: 8px;
    cursor: pointer;
    height : 50px;
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

const ProductComponent = styled.div`
    border: 1px solid #ddd; /* 테두리 스타일 및 색상 설정 */
    padding: 10px; /* 내부 여백 설정 */
    height : 800px;
    width : 700px;
    overflow-y: auto; /* 세로 스크롤이 필요할 때만 스크롤이 나타나도록 설정합니다. */
`;


function formatPrice(price) {
    // 숫자를 받아서 "₩20,000" 형태로 변환
    return price ? new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price): null
}

function ProductListItem(props) {
    const product = props.product;

    const handleAddToCart = () =>{
        
        // 장바구니에 제품 추가 
        props.addToCart(product);
    }

    return (
        <Wrapper>
            <Image src={product.img} alt={product.name} />
            <ProductContainer >
                <ProductName>{product.name} ({product.brand})</ProductName>
                <p>{product.explain}</p>
            </ProductContainer>
            <CartDiv>
                <ProductName>{formatPrice(product.price)}</ProductName>
                <AddToCartButton onClick ={handleAddToCart}>장바구니에 추가</AddToCartButton>
            </CartDiv>
        </Wrapper>
    );
}

function ProductList(props) {
    const products = data;

    return (
        <ProductComponent>
            <h1>제품 리스트</h1>
            {products.map((product) => {
                return (
                    <ProductListItem
                        key={product.id}
                        product={product}
                        addToCart={props.addToCart}
                    />
                );
            })}
        </ProductComponent>
    );
}

export default ProductList;