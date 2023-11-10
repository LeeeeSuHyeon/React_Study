// src/component/Purchase.jsx
import React from 'react';
import styled from 'styled-components';

const PurchaseContainer = styled.div`
    margin-top: 20px;
    border: 1px solid #ddd; /* 테두리 스타일 및 색상 설정 */
    padding: 10px; /* 내부 여백 설정 */
    height : 400px;
    overflow-y: auto; /* 세로 스크롤이 필요할 때만 스크롤이 나타나도록 설정합니다. */
`;
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

function Purchase(props) {
  return (
    <PurchaseContainer>
      <h2>구매 내역</h2>
      {props.purchasedItems.length > 0 ? (
               <Table>
               <thead>
                 <tr>
                   <Th>상품명</Th>
                   <Th>브랜드</Th>
                   <Th>수량</Th>
                   <Th>가격</Th>
                 </tr>
               </thead>
               <tbody>
                 {props.purchasedItems.map((item, index) => (
                   <tr key={index}>
                     <Td>{item.name}</Td>
                     <Td>{item.brand}</Td>
                     <Td>{item.purchasedQuantity}개</Td>
                     <Td>{formatPrice(item.price * item.purchasedQuantity)}</Td>
                   </tr>
                 ))}
               </tbody>
               <tfoot>
                 <tr style={{fontWeight:'bold;'}}>
                   <Td colSpan="3">총 구매 금액:</Td>
                   <Td>{formatPrice(props.totalPrice)}</Td>
                 </tr>
               </tfoot>
             </Table>
      ) : (
        <p>구매한 상품이 없습니다.</p>
      )}
    </PurchaseContainer>
  );
}

function formatPrice(price) {
  return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price);
}

export default Purchase;
