// src/component/Cart.jsx
import React, {useState} from 'react';
import styled from "styled-components"


const Table = styled.table`
  width: 800px;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  text-align: center;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  
  text-align : center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Button = styled.button`
  cursor: pointer;
`;
const CountButton = styled.div`
    align-items: center;
    justify-content: center; /* 내부 요소들을 수직 가운데 정렬 */
    margin-top : 5px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CartComponent = styled.div`
    border: 1px solid #ddd; /* 테두리 스타일 및 색상 설정 */
    padding: 10px; /* 내부 여백 설정 */
    height : 400px;
    overflow-y: auto; /* 세로 스크롤이 필요할 때만 스크롤이 나타나도록 설정합니다. */
`;

function formatPrice(price) {
    // 숫자를 받아서 "₩20,000" 형태로 변환
    return price ? new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price): null
  }

function CartItem (props){
    // const [quantity, setQuantity] = useState(1);

    
    // 장바구니 삭제 함수
    const handleDelete = () => {
        props.onDelete(props.product); // 부모 컴포넌트에 삭제 이벤트 전달
    };


    // const handleIncrement = () => {
    //     // 상품 개수 증가 로직을 추가하면 됩니다.
    //     setQuantity((prevQuantity) => prevQuantity + 1);
    // };
    
    //   const handleDecrement = () => {
    //     // 상품 개수 감소 로직을 추가하면 됩니다.
    //     if (quantity > 1) {
    //       setQuantity((prevQuantity) => prevQuantity - 1);
    //     }
    // };

    return (
        <tr>
            <Td>
                <Image src={props.product.img} alt={props.product.name} />
            </Td>
            <Td>{props.product.name} / {props.product.brand}</Td>
            <Td>{formatPrice(props.product.price)}</Td>
            <Td>
                <span>{props.quantity}</span>
                <CountButton>
                    <Button onClick={()=> props.onIncrement(props.product.id)}>+</Button>
                    <Button onClick={()=> props.onDecrement(props.product.id)}>-</Button>
                </CountButton>
            </Td>
            <Td>
                {formatPrice(props.product.price * props.quantity)} 
            </Td>
            <Td>
                <Button onClick={handleDelete}>삭제</Button>
            </Td>   
        </tr>
        );
    
  };


function Cart (props){


    return (
        <CartComponent>
            <h2>장바구니 내역</h2>
            <CartContainer>
            <Table>
                <thead>
                <tr>
                    <Th>이미지</Th>
                    <Th>상품명 / 브랜드</Th>
                    <Th>가격</Th>
                    <Th>수량</Th>
                    <Th>주문 금액</Th>
                    <Th>삭제</Th>
                </tr>
                </thead>
                <tbody>
                {props.cartItems.map((item, index) => (
                    <CartItem 
                        key={index} 
                        product={item} 
                        onDelete = {props.onDelete}
                        quantity = {props.quantity[item.id]}
                        onIncrement = {props.onIncrement}
                        onDecrement = {props.onDecrement}
                    />
                ))}
                </tbody>
            </Table>
            <div>
                <p>
                    <span>총 가격: {formatPrice(props.totalPrice)}</span>
                    <Button onClick={props.onPurchase} style={{marginLeft:"10px"}}>구매</Button>
                </p>
                 
            </div>
            </CartContainer>
        </CartComponent>
      );
  };
  
  export default Cart;