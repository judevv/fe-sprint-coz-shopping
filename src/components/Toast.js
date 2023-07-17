import React, { useEffect } from "react";
import { styled, keyframes } from "styled-components";

const ToastWrapper = styled.div`
    padding: 0px 24px 0px 24px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 52px;
    z-index: 9999;
    position: fixed;
    bottom: ${({ index }) => index * 64 + 12}px;
    right: 24px;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 88.023%;
    }
`

function Toast ({ message, visible, index, removeToast }) {

    useEffect(() => {
        if (visible) {
          const timer = setTimeout(() => {
            removeToast();
          }, 3000);

          return () => {
            clearTimeout(timer);
          };
        }
      }, [visible, removeToast]);


    return (
        <ToastWrapper visible={!visible ? "exit" : ""} index={index}>{message}</ToastWrapper>
    )
}

export default Toast;