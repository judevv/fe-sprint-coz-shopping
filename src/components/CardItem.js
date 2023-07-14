import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

const CardItemWrapper = styled.section`
    border: 1px solid black;
    width: 264px;
    height: 264px;
`
const CardItemImgWrapper = styled.div`
    border: 1px solid red;
    border-radius: 12px;
    width: 264px;
    height: 210px;

    & > img {
        overflow: hidden;
    }
`

const CardItemContentWrapper = styled.div`
`

function CardItem () {
    const [ itemData, setItemData ] = useState([]);

    useEffect(() => {
        axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
            .then(res => setItemData(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <CardItemWrapper>
            <CardItemImgWrapper>
                <img src={itemData.type === "Brand" ? itemData.brand_image_url : itemData.image_url} />
            </CardItemImgWrapper>
            <CardItemContentWrapper>
                <div>{itemData.type === "Category" ? `#${itemData.title}` : itemData.type === "Brand" ? `${itemData.brand_name}` : `${itemData.title}`}</div>
                <div>{itemData.type === "Product" ? `${itemData.discountPercentage}` : itemData.type === "Brand" ? `관심고객수` : null}</div>
                <div>{itemData.type === "Exhibition" ? `${itemData.sub_title}` : null}</div>
                <div>{itemData.type === "Product" ? `${itemData.price}원` : itemData.type === "Brand" ? `${itemData.follower}` : null}</div>
            </CardItemContentWrapper>
        </CardItemWrapper>
    )
}

export default CardItem;
/*
{itemData && itemData.map((item) => {
                return (
                    <div>
                        {item.title}
                        <img src={item.image_url} alt="" />
                    </div>
                )
            })}
*/