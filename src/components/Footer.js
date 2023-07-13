import React from "react";
import { styled } from "styled-components";

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    min-width: 100%;
    min-height: 58px;
    border-top: 1px solid rgba(0, 0, 0, 0.10);
    background-color: #fff;
`

const FooterTextFirst = styled.div`
    font-size: 12px;
    color: #888;
`

const FooterTextLast = styled.div`
    font-size: 12px;
    color: #888;
`

function Footer () {
    return (
        <FooterWrapper>
            <FooterTextFirst>개인정보 처리방침 | 이용 약관</FooterTextFirst>
            <FooterTextLast>All rights reserved @ Codestates</FooterTextLast>
        </FooterWrapper>
    )
}

export default Footer;