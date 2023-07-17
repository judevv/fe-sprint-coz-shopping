import React from "react";
import { styled } from "styled-components";
import '../App.css';
import BookmarkBtn from "./BookmarkBtn";

const CardItemWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 264px;
    height: 264px;
    gap: 6px;
`
const CardItemImgWrapper = styled.div`
    position: relative;
`

const CardItemImg = styled.div`
    & > img {
            display: block;
            border-radius: 12px;
            width: 264px;
            height: 210px;
            object-fit: cover;
        }
`

const CardItemContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const CardItemTextContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        font-family: 'Inter';
        font-size: 16px;

        &.typeText {
            font-weight: 800;
        }

        & > div {
            font-weight: 800;
            text-align: right;

            &.dcText {
                color: #452CDD;
            }

            &.followerText {
                font-weight: 700;
            }

        }

        &.subTitle {
            font-weight: 400;
        }

        &.priceFollower {
            font-weight: 400;
        }
    }
`
const BoomarkBtnWrapper = styled.div`
    position: absolute;
    top: 174px;
    bottom: 12px;
    right: 12px;
    left: 228px;
`


function CardItem ({ itemData }) {
    console.log(itemData)
    return (
        <CardItemWrapper>
            <CardItemImgWrapper>
                <CardItemImg>
                    <img src={itemData.type === "Brand" ? itemData.brand_image_url : itemData.image_url} />
                </CardItemImg>
                <BoomarkBtnWrapper>
                    <BookmarkBtn itemData={itemData} />
                </BoomarkBtnWrapper>
            </CardItemImgWrapper>
            <CardItemContentWrapper>
                <CardItemTextContentWrapper>
                    <div className="typeText">
                        {itemData.type === "Category" ? `#${itemData.title}` : itemData.type === "Brand" ? `${itemData.brand_name}` : `${itemData.title}`}
                    </div>
                    <div className="dcFollowerText">
                        {itemData.type === "Product" ?
                        <div className="dcText">{itemData.discountPercentage}%</div> :
                        itemData.type === "Brand" ?
                        <div className="followerText">관심고객수</div> :
                        null}
                    </div>
                </CardItemTextContentWrapper>
                <CardItemTextContentWrapper>
                    <div className="subTitle">
                        {itemData.type === "Exhibition" ? `${itemData.sub_title}` : null}
                    </div>
                    <div className="priceFollower">
                        {itemData.type === "Product" ? `${Number(itemData.price).toLocaleString()}원` : itemData.type === "Brand" ? `${itemData.follower.toLocaleString()}` : null}
                    </div>
                </CardItemTextContentWrapper>
            </CardItemContentWrapper>
        </CardItemWrapper>
    )
}

export default CardItem;