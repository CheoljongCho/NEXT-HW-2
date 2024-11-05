"use client";
import { useParams } from "next/navigation"; // Correct dynamic route handling
import { Button } from "../../../components/Button";
import { GNB } from "../../../components/GNB";
import { GNB_TYPE, PRODUCTS } from "../../../constants/common";
import styled from "@emotion/styled";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


function ProductPage() {
  const { id } = useParams();  // Correctly get the dynamic route parameter
  const product = PRODUCTS.find((item) => item.id === parseInt(id));
  const { cart, setCart } = useContext(CartContext);

  const handleCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("이미 장바구니에 추가된 상품입니다.");
      return;
    }
    setCart((prev) => [...prev, product]);
    alert("장바구니에 추가되었습니다.");
  };

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <Base>
      <GNB type={GNB_TYPE.BACK} pageName="상품 상세" />
      <Inner>
        <Title>상품 이름: <Highlight>{product.name}</Highlight></Title>
        <Desc><Highlight>{product.description}</Highlight></Desc>
        <Price>상품 가격: <Highlight>{product.price}원</Highlight></Price>
        <Button onClick={() => handleCart(product)}>장바구니 담기</Button>
      </Inner>
    </Base>
  );
}

export default ProductPage;

const Base = styled.div`width: 100%;`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 72px 20px 69px;
`;
const Title = styled.div`font-size: 28px; font-weight: 500;`;
const Desc = styled.div`font-size: 20px; font-weight: 500;`;
const Price = styled.div`font-size: 24px; font-weight: 500;`;
const Highlight = styled.span`
  background: linear-gradient(to bottom, pink 70%, transparent 60%);
  background-size: 100% 40%;
  background-repeat: no-repeat;
  background-position: 0 100%;
`;
