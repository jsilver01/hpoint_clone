import "./SplashScreen.css";
import splashLogo from "../img/splash_logo.png";

const SplashScreen = () => {
  return (
    <div className="splash_screen_container">
      <div className="purple_circle">
        <div className="text_box">
          <p>새로운</p>
          <p>포인트</p>
          <p className="text_box_bold">소/비/습/관</p>
        </div>
      </div>

      <div className="bottom_logo">
        <img className="bottom_logo_splash" alt="백화점로고" src={splashLogo} />
      </div>
    </div>
  );
};

export default SplashScreen;
