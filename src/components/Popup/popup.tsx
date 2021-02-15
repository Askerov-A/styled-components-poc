import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  SPopupWrapper,
  SPopupContentWrapper,
  SPopupHeader,
  SPopupTitle,
  SPopupButton,
  SPopupContent,
} from "./popup.styled";

interface IPopupProps {
  isShowed: boolean;
  onClose: () => void;
  width?: number;
  headerText?: string;
}

const useOutsideClickHandlerHook = (
  wrapperRef: React.RefObject<HTMLDivElement>,
  onClose: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: React.MouseEvent) {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", (((e: React.MouseEvent) => {
      handleClickOutside(e);
    }) as unknown) as EventListener);
    return () => {
      document.removeEventListener("mousedown", (((e: React.MouseEvent) => {
        handleClickOutside(e);
      }) as unknown) as EventListener);
    };
  }, [onClose, wrapperRef]);
};

const Popup = ({
  isShowed,
  onClose,
  headerText,
  children,
  width,
}: React.PropsWithChildren<IPopupProps>): JSX.Element | null => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const domNode: HTMLElement = document.createElement("div");
  domNode.setAttribute("id", "Popup-root");

  const onCloseHandler = () => {
    domNode && document.body.removeChild(domNode);
    onClose();
  };
  useOutsideClickHandlerHook(wrapperRef, onCloseHandler);
  useEffect(() => {
    domNode && isShowed && document.body.appendChild(domNode);
  }, [domNode, isShowed]);
  return (
    <>
      {ReactDOM.createPortal(
        <SPopupWrapper role="presentation">
          <SPopupContentWrapper ref={wrapperRef} width={width}>
            {headerText && (
              <SPopupHeader>
                <SPopupTitle>{headerText}</SPopupTitle>
                <SPopupButton
                  aria-label="Close popup"
                  type="button"
                  tabIndex={0}
                  onClick={onCloseHandler}
                  onKeyDown={onCloseHandler}
                  onKeyPress={onCloseHandler}
                >
                  X
                </SPopupButton>
              </SPopupHeader>
            )}
            <SPopupContent>{children}</SPopupContent>
          </SPopupContentWrapper>
        </SPopupWrapper>,
        domNode
      )}
    </>
  );
};

export default Popup;
