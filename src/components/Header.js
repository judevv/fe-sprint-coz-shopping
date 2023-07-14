import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FiMenu, FiGift, FiStar } from 'react-icons/fi';
import logo from '../assets/images/logo.png';


const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    min-width: 500px;
    max-height: 80px;
    padding: 25px 76px 25px 76px;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.10);
`

const Logo = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    margin: 0;
    padding: 0;
    flex-shrink: 0;
    gap: 12px;
`

const MenuBtn = styled.button`
    display: flex;
    align-items: center;
    width: 34px;
    height: 24px;
    flex-shrink: 0;
    font-size: 34px;
    padding: 0;
    border-style: none;
    background-color: white;
    `
const DropdownMenu = styled.div`
    position: absolute;
    top: 74px;
    right: 30px;
    border-radius: 12px;
    width: 200px;
    height: 150px;
    background-color: white;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.10));

    &::before {
        content: '';
        border-top: 0px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 18px solid white;
        border-left: 8px solid transparent;
        position: absolute;
        top: -18px;
        right: 54px;
    }

    & > ul {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 150px;
        margin: 0;
        padding: 0;

        > li {
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            padding: 13px 10px 12px 10px;
            border-bottom: 0.5px solid rgba(0, 0, 0, 0.10);
            font-size: 16px;
            height: 50px;
        }

        > li:first-child {
            display: flex;
            justify-content: center;
            flex-grow: 1;
        }

        > li:last-child {
            border-bottom: 0;
            flex-grow: 1;
        }

        > li > a {
            display: flex;
            align-items: center;
            color: #000;
            margin: 0;
            padding: 0;
        }

        > li > a > .icon {
            width: 20px;
            height: 20px;
            margin-top: 2px;
            margin-bottom: 2px;
            margin-left: 14px;
            margin-right: 8px;
        }
    }

`

function Header () {
    const [ isOpen, setIsOpen ] = useState(false); // 초기값 false 설정

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeaderWrapper>
            <Link to="/">
                <Logo>
                    <img className="logoImg" src={logo} />COZ Shopping
                </Logo>
            </Link>
            <MenuBtn onClick={toggleMenu}><FiMenu /></MenuBtn>
            {isOpen && (
                <DropdownMenu>
                    <ul>
                        <li><span>OOO님, 안녕하세요!</span></li>
                        <li>
                            <Link to="/pages/Products">
                                <FiGift className="icon" />상품리스트 페이지
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/Bookmark">
                                <FiStar className="icon" />북마크 페이지
                            </Link>
                        </li>
                    </ul>
                </DropdownMenu>)}
        </HeaderWrapper>
    )
}

export default Header;