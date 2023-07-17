import React, { useState, useEffect } from "react";
import { ReactComponent as BookmarkOff } from '../assets/images/BookmarkOff.svg';
import { ReactComponent as BookmarkOn } from '../assets/images/BookmarkOn.svg';

function BookmarkBtn ({ itemData }) {
    const [ isBookmarked, setIsBookmarked ] = useState(itemData.isBookmarked);

    useEffect(() => {
        const bookmarkState = localStorage.getItem("bookmarkState");

        if (bookmarkState !== null) {
            const bookmarkedItems = JSON.parse(bookmarkState);
            setIsBookmarked(bookmarkedItems.includes(itemData.id));
        }
    }, [itemData.id]);

    function bookmarkHandler () {
        const bookmarkedItems = localStorage.getItem("bookmarkState") ?
        JSON.parse(localStorage.getItem("bookmarkState")) :
        [];

        if (isBookmarked) {
            const updatedItems = bookmarkedItems.filter((id) => id !== itemData.id);
            localStorage.setItem("bookmarkState", JSON.stringify(updatedItems));
        } else {
            const updatedItems = [...bookmarkedItems, itemData.id];
            localStorage.setItem("bookmarkState", JSON.stringify(updatedItems));
        }

        setIsBookmarked(!isBookmarked);
    }

        return (
        <div>
            {isBookmarked ? (
                <BookmarkOn onClick={bookmarkHandler} />
            ) : (
                <BookmarkOff onClick={bookmarkHandler} />
            )}
        </div>
    )
}

export default BookmarkBtn;