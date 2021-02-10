import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  PopupWrapper,
  PopupContentWrapper,
  PopupHeader,
  PopupTitle,
  PopupButton,
  PopupContent,
} from "./popup.styles";

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
  onClose,
  headerText,
  children,
  width,
}: React.PropsWithChildren<IPopupProps>): JSX.Element | null => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClickHandlerHook(wrapperRef, onClose);
  const domNode: HTMLElement = document.createElement("div");
  domNode.setAttribute("id", "Popup-root");
  document.body.appendChild(domNode);

  return (
    <>
      {ReactDOM.createPortal(
        <PopupWrapper role="presentation">
          <PopupContentWrapper ref={wrapperRef} width={width}>
            {headerText && (
              <PopupHeader>
                <PopupTitle>{headerText}</PopupTitle>
                <PopupButton
                  aria-label="Close popup"
                  type="button"
                  tabIndex={0}
                  onClick={onClose}
                  onKeyDown={onClose}
                  onKeyPress={onClose}
                >
                  X
                </PopupButton>
              </PopupHeader>
            )}
            <PopupContent>{children}</PopupContent>
          </PopupContentWrapper>
        </PopupWrapper>,
        domNode
      )}
    </>
  );
};

export default Popup;
