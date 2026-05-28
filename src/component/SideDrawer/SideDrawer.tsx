import "./SideDrawer.css";
import { useNavigate } from "react-router-dom";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuSections = [
  {
    title: "혜택",
    items: [
      { label: "쿠폰", badge: false },
      { label: "플러스포인트", badge: false },
      { label: "이벤트", badge: false },
      { label: "클럽", badge: true },
      { label: "하이라이트", badge: true },
      { label: "포인트모으기", badge: true },
      { label: "미션", badge: false },
      { label: "혜택등록", badge: false },
    ],
  },
  {
    title: "결제·포인트",
    items: [
      { label: "전자영수증", badge: false },
      { label: "영수증/쿠폰", badge: false },
      { label: "사용처안내", badge: false },
      { label: "카드/Pay", badge: false },
      { label: "포인트 충전", badge: false },
      { label: "포인트 전환", badge: false },
      { label: "선물하기", badge: false },
    ],
  },
  {
    title: "서비스",
    items: [
      { label: "사운드갤러리", badge: false },
      { label: "문화할인", badge: false },
      { label: "오디오트립", badge: true },
      { label: "영화할인", badge: false },
      { label: "주차", badge: false },
      { label: "렌터카", badge: true },
    ],
  },
];

const bottomLinks = ["이용안내", "고객센터", "공지사항"];

const SideDrawer = ({ isOpen, onClose }: SideDrawerProps) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className={`drawer_overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      {/* 드로어 패널 */}
      <div className={`drawer_panel ${isOpen ? "open" : ""}`}>
        {/* 헤더 */}
        <div className="drawer_header">
          <span className="drawer_logo">H.Point</span>
          <div className="drawer_header_actions">
            <button className="icon_btn" aria-label="언어 설정">
              語
            </button>
            <button className="icon_btn" aria-label="설정">
              ⚙
            </button>
            <button
              className="icon_btn close_btn"
              onClick={onClose}
              aria-label="닫기"
            >
              ✕
            </button>
          </div>
        </div>

        {/* 로그인 안내 */}
        <div className="drawer_login_banner">
          {/* 로그인 화면으로 넘어가면서는 드로어 닫혀야함 (수정필요!!!!) */}
          <span className="login_link" onClick={handleLogin}>
            로그인
          </span>
          <span className="login_text"> 하고 다양한 혜택 받아보세요 :)</span>
        </div>

        {/* 스크롤 콘텐츠 */}
        <div className="drawer_scroll_content">
          {menuSections.map((section) => (
            <div key={section.title} className="menu_section">
              <div className="section_title">
                <span className="section_dot">•</span>
                {section.title}
              </div>
              <div className="menu_grid">
                {section.items.map((item) => (
                  <button key={item.label} className="menu_item">
                    <div className="menu_icon_area">
                      <span className="menu_icon_text">
                        {item.label.charAt(0)}
                      </span>
                      {item.badge && <span className="item_badge">N</span>}
                    </div>
                    <span className="menu_label">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 바 */}
        <div className="drawer_footer">
          {bottomLinks.map((link) => (
            <button key={link} className="footer_link">
              {link}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
