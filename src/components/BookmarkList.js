import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import CardItem from "./CardItem";

const BookmarkListContainer = styled.div`

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
    }
    
`


function BookmarkList ({ bookmarkedItems }) {
    const fourBookmarks = bookmarkedItems.slice(0, 4);

    return (
        <BookmarkListContainer>
            <BookmarkListContainer>
                {bookmarkedItems.length === 0 ? (
                    <div>
                        북마크한 아이템이 없습니다.
                    </div>
                ) : (
                    <div>
                        {fourBookmarks.map((item) => (
                        <CardItem key={item.id} itemData={item} />))}
                    </div>
                )}
            </BookmarkListContainer>
        </BookmarkListContainer>

    )
}

export default BookmarkList;