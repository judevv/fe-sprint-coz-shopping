import React, { useEffect } from "react";
import { styled } from "styled-components";
import CardItem from "../components/CardItem";
import Filter from "../components/Filter";

const ProductPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-top: 24px;
`


const ProductsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
`

function Products ({ itemData, filteredType, setFilteredType }) {

    useEffect(() => {
        setFilteredType('');
    }, [])

    const filteredItems = filteredType
        ? itemData.filter((item) => item.type === filteredType)
        : itemData;

    // {const filteredTypes = itemData.filter(type => filteredType === '' || type.type === filteredType);}

    return (
        <ProductPageContainer>
            <Filter setFilteredType={setFilteredType}/>
            <ProductsContainer>
            {filteredItems.map((item) => (
                <CardItem key={item.id} itemData={item} />
            ))}
            </ProductsContainer>
        </ProductPageContainer>
    )
}

export default Products;