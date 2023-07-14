import React, { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "./CardItem";
import { styled } from "styled-components";

const ProductListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`

function ProductList () {
    const [ itemData, setItemData ] = useState([]);

    useEffect(() => {
        axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
            .then(res => {
                const newData = res.data.map((data) => ({...data, isBookmarked: false}))
                return setItemData(newData)})
            .catch(err => console.log(err))
    }, []);

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