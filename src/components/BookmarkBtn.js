import React, { useState, useEffect } from "react";
import { ReactComponent as BookmarkOff } from '../assets/images/BookmarkOff.svg';
import { ReactComponent as BookmarkOn } from '../assets/images/BookmarkOn.svg';
import Toast from "./Toast";


function BookmarkBtn ({ itemData }) {
    const [ isBookmarked, setIsBookmarked ] = useState(itemData.isBookmarked);
    const [ toasts, setToasts ] = useState([]);

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
            addToasts(
                <div className="toastText">
                    <BookmarkOff />상품이 북마크에서 제거되었습니다.
                </div>
              );
        } else {
            const updatedItems = [...bookmarkedItems, itemData.id];
            localStorage.setItem("bookmarkState", JSON.stringify(updatedItems));
            addToasts(
                <div className="toastText">
                    <BookmarkOn />상품이 북마크에 추가되었습니다.
                </div>
              );
        }

        setIsBookmarked(!isBookmarked);
    }

    function addToasts(message) {
        const newToast = {
            id: Date.now(),
            message: message
        };

        setToasts((prevToasts) => [...prevToasts, newToast]);
    }

    useEffect(() => {
        if (toasts.length > 0) {
          const timer = setTimeout(() => {
            removeToast(toasts[0].id);
          }, 1000);

          return () => clearTimeout(timer);
        }
      }, [toasts]);

      function removeToast(id) {
        setToasts((prevToasts) => {
          const index = prevToasts.findIndex((toast) => toast.id === id);
          if (index !== -1) {
            const newToasts = [...prevToasts];
            newToasts.splice(index, 1);
            return newToasts;
          }
          return prevToasts;
        });
      }

        return (
        <div>
            {isBookmarked ? (
                <BookmarkOn onClick={bookmarkHandler} />
            ) : (
                <BookmarkOff onClick={bookmarkHandler} />
            )}
            {toasts.map((toast, index) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    visible={true}
                    index={index}
                    removeToast={removeToast} />
            ))}
        </div>
    )
}

export default BookmarkBtn;