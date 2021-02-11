import { render, screen, fireEvent } from "@testing-library/react";

import Popup from "./popup";

const PROPS = {
  isShowed: true,
  onClose: jest.fn(),
  headerText: "Test header text",
};

describe("Popup Component", () => {
  it("should render correctly", () => {
    const wrapper = render(<Popup {...PROPS}>Test</Popup>);

    expect(wrapper.getByRole("presentation")).toMatchSnapshot();
  });

  it("should find header text", () => {
    const { getByText } = render(<Popup {...PROPS} />);
    expect(getByText(PROPS.headerText)).toBeTruthy();
  });

  it("should call event on click", () => {
    render(<Popup {...PROPS}>Test</Popup>);
    fireEvent.click(screen.getByRole("button"));
    expect(PROPS.onClose).toHaveBeenCalledTimes(1);
  });

  it("should call event on key Press", () => {
    render(<Popup {...PROPS} />);
    fireEvent.keyDown(screen.getByRole("button"), { key: "Enter", code: 13 });
    expect(PROPS.onClose).toHaveBeenCalledTimes(1);
  });
});
