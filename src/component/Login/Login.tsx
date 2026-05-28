import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../img/hpoint_logo.png";
import KakaoIcon from "../../img/Chat_Circle.png";
import PhoneIcon from "../../img/phone.png";
import BioIcon from "../../img/biometric.png";
import AppleIcon from "../../img/apple.png";
import PersonIcon from "../../img/idpw.png";
import checkedIcon from "../../img/circle-checked.png";
import unCheckedIcon from "../../img/circle-unchecked.png";
import BackCaret from "../../img/back_caret.png";
import Hamburger from "../../img/Hamburger_MD.png";

import Header from "../Header/Header";

type loginProps = {
  onOpenDrawer: () => void;
};

const Login = ({ onOpenDrawer }: loginProps) => {
  const navigate = useNavigate();
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoMenu = () => {
    navigate("/menu");
  };

  const handleLoginClick = () => {
    alert("로그인버튼 눌렸습니다");
  };

  const handleToggleAutoLogin = () => {
    setIsAutoLogin(!isAutoLogin);
  };

  return (
    <div className="login_container">
      <div className="top_container">
        <Header
          leftChild={BackCaret}
          rightChild={Hamburger}
          handleGoHome={handleGoHome}
          handleOpenDrawer={onOpenDrawer}
        />

        <div className="logo_area">
          <img alt="logo_img" src={LogoImg} />
        </div>

        {/* 로그인 */}
        <div className="body_container">
          <div className="login_card">
            {/* 카카오 */}
            <button className="kakao_login" onClick={handleLoginClick}>
              <div className="icon_area">
                <img alt="kakao_icon" src={KakaoIcon} />
              </div>

              <div className="text_area">
                <p>카카오로 3초 만에 로그인</p>
              </div>
            </button>
          </div>

          <div className="login_card">
            {/* 휴대폰 번호로 */}
            <button className="login_btn" onClick={handleLoginClick}>
              <div className="icon_area">
                <img alt="phone_icon" src={PhoneIcon} />
              </div>

              <div className="text_area">
                <p>휴대폰 번호로 로그인</p>
              </div>
            </button>
          </div>

          <div className="login_card">
            {/* 생체인증 */}
            <button className="login_btn" onClick={handleLoginClick}>
              <div className="icon_area">
                <img alt="bio_icon" src={BioIcon} />
              </div>

              <div className="text_area">
                <p>생체인증 로그인</p>
              </div>
            </button>
          </div>

          <div className="login_card">
            {/* apple */}
            <button className="login_btn" onClick={handleLoginClick}>
              <div className="icon_area">
                <img alt="apple_icon" src={AppleIcon} />
              </div>

              <div className="text_area">
                <p>Apple로 로그인</p>
              </div>
            </button>
          </div>

          <div className="login_card">
            {/* id/pw */}
            <button className="login_btn" onClick={handleLoginClick}>
              <div className="icon_area">
                <img alt="person_icon" src={PersonIcon} />
              </div>

              <div className="text_area">
                <p>ID/PW 로그인</p>
              </div>
            </button>
          </div>
        </div>
        <div className="login_option_row">
          <div className="auto_login_area">
            <button className="check_btn" onClick={handleToggleAutoLogin}>
              <img
                src={isAutoLogin ? checkedIcon : unCheckedIcon}
                alt="check_icon"
              />
            </button>

            <span>자동 로그인</span>
          </div>

          <button className="signup_btn">회원가입</button>
        </div>
      </div>

      <div className="footer_container">
        <p className="text_p_area">바로적립 카드받기</p>
      </div>
    </div>
  );
};

export default Login;
