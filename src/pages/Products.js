import React from "react";
import { styled } from "styled-components";
import CardItem from "../components/CardItem";

const ProductsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
`

function Products ({ itemData }) {
    return (
        <ProductsContainer>
            {itemData.map((item) => (
                <CardItem key={item.id} itemData={item} />
            ))}
        </ProductsContainer>
    )
}

export default Products;