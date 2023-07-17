import React, { useState } from "react";
import { styled } from "styled-components";
import All from '../assets/images/All.png'
import Product from '../assets/images/Product.png'
import Category from '../assets/images/Category.png'
import Exhibition from '../assets/images/Exhibition.png'
import Brand from '../assets/images/Brand.png'

const FilterContainer = styled.section`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
    width: 554px;
    height: 110px;
`

const FilterIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    & > div {
        color: #000;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`


function Filter ({ setFilteredType }) {

    return (
        <FilterContainer>
            <FilterIconWrapper onClick={() => setFilteredType('')}>
                 <img src={All} />
                 <div>전체</div>
            </FilterIconWrapper>
            <FilterIconWrapper onClick={() => setFilteredType('Product')}>
                 <img src={Product} />
                 <div>상품</div>
            </FilterIconWrapper>
            <FilterIconWrapper onClick={() => setFilteredType('Category')}>
                 <img src={Category} />
                 <div>카테고리</div>
            </FilterIconWrapper>
            <FilterIconWrapper onClick={() => setFilteredType('Exhibition')}>
                 <img src={Exhibition} />
                 <div>기획전</div>
            </FilterIconWrapper>
            <FilterIconWrapper onClick={() => setFilteredType('Brand')}>
                 <img src={Brand} />
                 <div>브랜드</div>
            </FilterIconWrapper>
        </FilterContainer>
    )

}

export default Filter;