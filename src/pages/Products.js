import React from "react";
import { styled } from "styled-components";
import CardItem from "../components/CardItem";

const ProductsContiner = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
`

function Products ({ itemData }) {
    console.log(itemData)

    return (
        <ProductsContiner>
            {itemData.map((item) => (
                <CardItem key={item.id} itemData={item} />
            ))}
        </ProductsContiner>
    )
}

export default Products;