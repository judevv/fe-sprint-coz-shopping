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
    color: ${({ isActive }) => (isActive ? "#412DD4" : "#000")};
    font-size: 16px;
    font-style: normal;
    font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
    line-height: normal;
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
    text-underline-offset: ${({ isActive }) => (isActive ? '3px' : '0px')};
    text-decoration-thickness: ${({ isActive }) => (isActive ? '3px' : '0px')};

    & > div {
        text-align: center;
    }
`


function Filter ({ setFilteredType, activeFilter, setActiveFilter }) {

    return (
        <FilterContainer>
            <FilterIconWrapper
                isActive={activeFilter === ""}
                onClick={() => {
                    setFilteredType('')
                    setActiveFilter('')}}>
                 <img src={All} />
                 <div>전체</div>
            </FilterIconWrapper>
            <FilterIconWrapper
                isActive={activeFilter === "Product"}
                onClick={() => {
                    setFilteredType('Product')
                    setActiveFilter('Product')}}>
                 <img src={Product} />
                 <div>상품</div>
            </FilterIconWrapper>
            <FilterIconWrapper
                isActive={activeFilter === "Category"}
                onClick={() => {
                    setFilteredType('Category')
                    setActiveFilter('Category')}}>
                 <img src={Category} />
                 <div>카테고리</div>
            </FilterIconWrapper>
            <FilterIconWrapper
                isActive={activeFilter === "Exhibition"}
                onClick={() => {
                    setFilteredType('Exhibition')
                    setActiveFilter('Exhibition')}}>
                 <img src={Exhibition} />
                 <div>기획전</div>
            </FilterIconWrapper>
            <FilterIconWrapper
                isActive={activeFilter === "Brand"}
                onClick={() => {
                    setFilteredType('Brand')
                    setActiveFilter('Brand')}}>
                 <img src={Brand} />
                 <div>브랜드</div>
            </FilterIconWrapper>
        </FilterContainer>
    )

}

export default Filter;