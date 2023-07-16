import React from "react";
import { styled } from "styled-components";
import CardItem from "./CardItem";

const ProductListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`

function ProductList ({ itemData }) {
    const fourItems = itemData.slice(0, 4);

    return (
        <ProductListContainer>
            {fourItems.map((item) => (
                <CardItem key={item.id} itemData={item} />
            ))}
        </ProductListContainer>
    )
}

export default ProductList;