// src/component/ShoppingPage.jsx (새로운 부모 컴포넌트)
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Purchase from './Purchase';  
import styled from 'styled-components'; // JavaScript 파일 내에서 컴포넌트 스타일을 정의하는 데 사용


const Container = styled.div`
    display: flex;
    justify-content: space-between; // 컴포넌트를 컨테이너 양 끝에 배치
    padding: 20px; // 좌우 여백
`;


const StyledPurchaseAndCart = styled.div`
    display: flex;
    flex-direction: column;
`;



function ShoppingPage(props) {
    const [cartItems, setCartItems] = useState([]);
    const [purchasedItems, setPurchasedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    // 각 제품의 수량을 관리하기 위한 state
    const [productQuantities, setProductQuantities] = useState({});

     

    // 총 가격 계산 함수
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * (productQuantities[item.id] || 1), 0);
    };

    // 장바구니에 제품 추가하는 함수
    const addToCart = (product) => {

        // 이미 장바구니에 있는지 여부 확인
        const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

        if (!isAlreadyInCart) {
            // 장바구니에 없으면 추가
            setCartItems([...cartItems, product]);
            alert(`회원님의 장바구니에 ${product.name} 추가되었습니다.`)

            // 기본 수량은 1로 설정
            setProductQuantities({
                ...productQuantities,
                [product.id]: 1,
            });

        } else {
            // 이미 장바구니에 있으면 경고 메시지 표시
            alert('이미 장바구니에 있는 상품입니다.');
        }
    };

    // 장바구니에서 제품 삭제하는 함수
    const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== productToRemove);
        setCartItems(updatedCart);

       // 해당 제품의 수량도 초기화
        const updatedQuantities = { ...productQuantities };
        delete updatedQuantities[productToRemove.id];
        setProductQuantities(updatedQuantities);
    };

    // 각 제품의 수량 증가
    const incrementQuantity = (productId) => {
        setProductQuantities({
            ...productQuantities,
            [productId]: (productQuantities[productId] || 0) + 1,
        });
    };

    // 각 제품의 수량 감소
    const decrementQuantity = (productId) => {
        if (productQuantities[productId] > 1) {
            setProductQuantities({
                ...productQuantities,
                [productId]: productQuantities[productId] - 1,
            });
        }
    };
    
    const handlePurchase = () => {

        // 장바구니에서 제품을 구매 목록으로 이동
        const purchasedItemsWithQuantity = cartItems.map(item => ({
            ...item,
            purchasedQuantity: productQuantities[item.id] || 1,
        }));


        setPurchasedItems([...purchasedItems, ...purchasedItemsWithQuantity]);

        // 기존 총 가격에 구매된 제품들의 총 가격 추가
        setTotalPrice((prevTotalPrice) => prevTotalPrice + calculateTotalPrice());

        setCartItems([]);
        setProductQuantities({});

    };
    return (
        <Container>
        <ProductList addToCart={addToCart} />
        <StyledPurchaseAndCart>
            <Cart 
                cartItems={cartItems} 
                onDelete={removeFromCart} 
                quantity = {productQuantities}
                onIncrement={incrementQuantity}
                onDecrement={decrementQuantity}
                totalPrice = {calculateTotalPrice()} 
                onPurchase={handlePurchase}
            />
            <Purchase purchasedItems={purchasedItems} totalPrice={totalPrice}  />
        </StyledPurchaseAndCart>
        </Container>

    );
}



export default ShoppingPage;
