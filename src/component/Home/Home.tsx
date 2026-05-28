import "./Home.css";
import NavigationBar from "../BottomNav/NavigationBar";
import CodeIcon from "../img/code.png";
import PointIcon from "../img/dollar-circle.png";
import Notification from "../img/notification.png";
import Hamburger from "../img/Hamburger_MD.png";
import MainAD1 from "../img/main_ad1.png";
import { useNavigate } from "react-router-dom";

// 아이콘 섹션 아이템 데이터
const iconMenuItems = [
  { icon: "📅", label: "하이라이트", badge: "N" },
  { icon: "🎫", label: "쿠폰" },
  { icon: "Ⓟ", label: "풀포" },
  { icon: "💵", label: "전자영수증" },
  { icon: "H.G", label: "H.G" },
];

// 배너 카드 데이터 (슬라이더 예시)
const bannerCards = [
  {
    id: 1,
    title: "3분만에 안입는 옷 신청하고\n포인트 받기 💸",
    subtitle: "브랜드, 수량만 입력하면 신청 완료!",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const handleGoLogin = () => {
    navigate("/login");
  };

  return (
    <div className="home_container">
      {/* 헤더 + 광고 배경 섹션 */}
      <div
        className="ad_background_section"
        style={{ "--ad-bg-image": `url(${MainAD1})` } as React.CSSProperties}
      >
        {/* 헤더 */}
        <div className="home_header_container">
          <div className="left_section" onClick={handleGoLogin}>
            <img alt="code_img" src={CodeIcon} className="header_icon" />
            <p className="header_login_text">로그인을 해주세요</p>
          </div>
          <div className="right_section">
            <img
              alt="point_img"
              src={PointIcon}
              className="header_icon point_icon"
            />
            <img
              alt="notification_img"
              src={Notification}
              className="header_icon"
            />
            <img alt="hamburger" src={Hamburger} className="header_icon" />
          </div>
        </div>

        {/* 메인 광고 배너 */}
        <div className="ad_section">
          <img
            alt="main_ad_1"
            src={MainAD1}
            className="ad_image ad_image_shadow"
          />
        </div>
      </div>

      {/* 배너 텍스트 카드 */}
      <div className="banner_text_section">
        {bannerCards.map((card) => (
          <div key={card.id} className="banner_text_card">
            <p className="banner_title">{card.title}</p>
            <p className="banner_subtitle">{card.subtitle}</p>
            {/* 슬라이더 인디케이터 */}
            <div className="slider_indicator">
              <div className="slider_dots">
                <span className="dot active" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <span className="slider_count">7 / 15</span>
              <button className="slider_pause">⏸</button>
            </div>
          </div>
        ))}
      </div>

      {/* 아이콘 메뉴 섹션 */}
      <div className="icon_section">
        {iconMenuItems.map((item, index) => (
          <div key={index} className="icon_item">
            <div className="icon_circle">
              {item.badge && <span className="icon_badge">{item.badge}</span>}
              <span className="icon_emoji">{item.icon}</span>
            </div>
            <p className="icon_label">{item.label}</p>
          </div>
        ))}
      </div>

      {/* 추가 콘텐츠 - 하단 상품 섹션 */}
      <div className="product_section">
        <div className="section_header">
          <h3 className="section_title">회원님을 위한 이벤트</h3>
        </div>
        <div className="product_grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="product_card">
              <div className="product_img_placeholder" />
              <p className="product_name">상품명 {i}</p>
              <p className="product_price">₩{(i * 15000).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 여백 (네비게이션바 높이만큼) */}
      <div className="bottom_spacer" />

      {/* 하단 네비게이션바 - 항상 고정 */}
      <NavigationBar />
    </div>
  );
};

export default Home;
