import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import CardItem from "./CardItem";

const BookmarkListContainer = styled.div`
`


function BookmarkList ({ itemData }) {

    return (
        <BookmarkListContainer>
            {!itemData.isBookmarked && itemData.map((item) => (
                <CardItem key={item.id} itemData={item}/>
            ))}
        </BookmarkListContainer>

    )
}

export default BookmarkList;