// src/component/ShoppingPage.jsx (새로운 부모 컴포넌트)
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    justify-content: space-between; // 컴포넌트를 컨테이너 양 끝에 배치
    padding: 20px; // 좌우 여백
`;

function ShoppingPage(props) {
    const [cartItems, setCartItems] = useState([]);

    // 장바구니에 제품 추가하는 함수
    const addToCart = (product) => {

        // 이미 장바구니에 있는지 여부 확인
        const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

        if (!isAlreadyInCart) {
            // 장바구니에 없으면 추가
            setCartItems([...cartItems, product]);
            alert(`회원님의 장바구니에 ${product.name} 추가되었습니다.`)
        } else {
            // 이미 장바구니에 있으면 경고 메시지 표시
            alert('이미 장바구니에 있는 상품입니다.');
        }
    };

    // 장바구니에서 제품 삭제하는 함수
    const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== productToRemove);
        setCartItems(updatedCart);
    };

    return (
        <Container>
        <ProductList addToCart={addToCart} />
        <Cart cartItems={cartItems} onDelete={removeFromCart} />
        </Container>
    );
}

export default ShoppingPage;
