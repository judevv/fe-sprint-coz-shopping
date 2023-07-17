import React from "react";
import { styled } from "styled-components";
import { ReactComponent as ModalClose } from "../assets/images/ModalClose.svg";
import BookmarkBtn from "./BookmarkBtn";

const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.40);
    z-index: 999;
`

const ModalImgWrapper = styled.div`
    position: relative;
`

const ModalImg = styled.div`

    & > img {
            display: block;
            border-radius: 12px;
            width: 744px;
            height: 480px;
            object-fit: cover;
            box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.50);
    }
`

const ModalCloseWrapper = styled.div`
        position: absolute;
        top: 24px;
        right: 24px;
        bottom: 432px;
        left: 696px;
`

const BookmarkBtnTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 744px;
    position: absolute;
    top: 429px;
    right: 696px;
    bottom: 27px;
    left: 24px;
`

const ModalBookmarkBtn = styled.div`
`

const ModalTextContent = styled.div`
    width: 664px;
    color: #FFF;
    text-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`



function Modal ({ itemData, closeModal }) {

    function modalClickHandler (e) {
        if (e.target === e.currentTarget && BookmarkBtn) {
            closeModal();
        }
    }

    return (
        <ModalWrapper onClick={modalClickHandler}>
            <ModalImgWrapper>
                <ModalImg>
                    <img src={itemData.type === "Brand" ? itemData.brand_image_url : itemData.image_url} />
                </ModalImg>
                <ModalCloseWrapper>
                    <ModalClose onClick={closeModal} />
                </ModalCloseWrapper>
                <BookmarkBtnTitleWrapper>
                    <BookmarkBtn itemData={itemData} />
                    <ModalTextContent>
                        {itemData.type === "Category" ? `#${itemData.title}` : itemData.type === "Brand" ? `${itemData.brand_name}` : `${itemData.title}`}
                    </ModalTextContent>
                </BookmarkBtnTitleWrapper>
            </ModalImgWrapper>
        </ModalWrapper>
    )

}

export default Modal;