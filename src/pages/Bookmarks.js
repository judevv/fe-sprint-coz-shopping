import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import CardItem from "../components/CardItem";
import Filter from "../components/Filter";

const BookmarkPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-top: 24px;
`

const BookmarkListContainer = styled.section`

    & > div:first-child {
        height: 100vh;
    }

    & > div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
    }
`;

function Bookmarks ({ bookmarkedItems, filteredType, setFilteredType, activeFilter, setActiveFilter }) {

    const filteredItems = filteredType
        ? bookmarkedItems.filter((item) => item.type === filteredType)
        : bookmarkedItems;

    return (
        <BookmarkPageContainer>
            <Filter
                filteredItems={filteredItems}
                setFilteredType={setFilteredType}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter} />
            <BookmarkListContainer>
                {bookmarkedItems.length === 0 ? (
                    <div>
                        북마크한 아이템이 없습니다.
                    </div>
                ) : (
                    <div>
                    {filteredItems.map((item) => (
                        <CardItem key={item.id} itemData={item} bookmarkedItems={bookmarkedItems} />
                    ))}
                    </div>
                )}
            </BookmarkListContainer>
        </BookmarkPageContainer>
    )
}

export default Bookmarks;