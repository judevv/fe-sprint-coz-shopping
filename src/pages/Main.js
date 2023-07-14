import React, { useState } from "react";
import { styled } from "styled-components";
import CardItem from "../components/CardItem";

/* 상품 리스트
    - 타입 상관 없이 4개 CardItem 컴포넌트를 가져와서 표출해야함
    - 리스트 형식으로 불러옴
    - 그러기 위해서는 상품 리스트를 먼저 만들고
    - 그 데이터를 가지고 와서 보여주어야 함
*/

/* 북마크 리스트도 가지고 오는 건 비슷
    - 그럼 북마크 리스트 먼저 구현
*/

const MainContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ListWrapper = styled.section`
    display: flex;
    flex-direction: column;
`

function Main () {
    return (
        <MainContainer>
            <ListWrapper>
                <div>상품 리스트</div>
                <CardItem />
                <div>북마크 리스트</div>
                <CardItem />
            </ListWrapper>
        </MainContainer>
    )
}

export default Main;