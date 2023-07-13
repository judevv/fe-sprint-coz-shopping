import React, { useState, useEffect } from "react";

import { styled } from "styled-components";

const CardItemWrapper = styled.section`
    border: 1px solid black;
    width: 264px;
    height: 264px;
`

const CardItemImg = styled.div`
    width: 264px;
    height: 210px;
    border: 1px solid black;
    border-radius: 12px;
`


function CardItem () {
    return (
        <CardItemWrapper>
            <CardItemImg>이미지</CardItemImg>
            <div>
                <span>상품이름</span>
                <span>할인율</span>
                <span>상품가격</span>
            </div>
        </CardItemWrapper>
    )
}

export default CardItem;