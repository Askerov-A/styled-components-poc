import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  animation: ${fadeIn} 500ms;
`;

interface PopupContentWrapperProps {
  readonly width?: number;
}

export const PopupContentWrapper = styled.div<PopupContentWrapperProps>`
  position: relative;
  width: 80%;
  margin: 15% auto;
  padding: 20px;
  background-color: #fefefe;
  border-radius: 4px;
  ${({ width }) => {
    if (width) {
      return css`
        width: ${width}px;
      `;
    }

    return css`
      width: 100%;
    `;
  }}
`;
export const PopupContent = styled.div``;

export const PopupHeader = styled.div``;
export const PopupTitle = styled.div``;
export const PopupButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  color: #000;
  background: none;
  border: none;
  cursor: pointer;
`;
