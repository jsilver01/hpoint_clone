import { useState } from "react";

type HeaderProps = {
  leftChild: string;
  middleText?: string;
  rightChild: string;
  handleGoHome: () => void;
};

const Header = ({
  leftChild,
  middleText,
  rightChild,
  handleGoHome,
}: HeaderProps) => {
  return (
    <div className="header_container">
      <div className="back_caret_area" onClick={handleGoHome}>
        <img alt="back_caret" src={leftChild} />
      </div>

      <div className="middle_text_area">{middleText}</div>

      <div className="hamburger_area">
        <img alt="hamburger" src={rightChild} />
      </div>
    </div>
  );
};

export default Header;
