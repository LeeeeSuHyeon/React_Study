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

const Cart = styled.div`
    margin-left: auto; // 컨테이너 오른쪽에 붙이기
    flex-direction: column; 
    display: flex;
`

const ProductName = styled.span`
    font-weight:bold;
    font-size : 24px;
    margin-bottom : 20px;
`

function ProductListItem(props) {
    const product = props.product;

    return (
        <Wrapper>
            <Image src={product.img} alt={product.name} />
            <ProductContainer >
                <ProductName>{product.name} ({product.brand})</ProductName>
                <p>{product.explane}</p>
            </ProductContainer>
            <Cart>
                <ProductName>{product.price}</ProductName>
                <AddToCartButton>장바구니에 추가</AddToCartButton>
            </Cart>
            
        </Wrapper>
    );
}

function ProductList(props) {
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

export default ProductList;