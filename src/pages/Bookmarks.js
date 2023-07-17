import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import CardItem from "../components/CardItem";

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

function Bookmarks ({ bookmarkedItems }) {

    return (
        <BookmarkListContainer>
            {bookmarkedItems.length === 0 ? (
                <div>
                    북마크한 아이템이 없습니다.
                </div>
            ) : (
                <div>
                {bookmarkedItems.map((item) => (
                    <CardItem key={item.id} itemData={item} bookmarkedItems={bookmarkedItems} />
                ))}
                </div>
            )}
        </BookmarkListContainer>
    )
}

export default Bookmarks;