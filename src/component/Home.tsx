import "./Home.css";
import NavigationBar from "./NavigationBar";
import CodeIcon from "../img/code.png";
import PointIcon from "../img/dollar-circle.png";
import Notification from "../img/notification.png";
import Hamburger from "../img/Hamburger_MD.png";

const Home = () => {
  return (
    <div className="home_container">
      <div className="main_wrapper">
        <div className="ad_background_section">
          <div className="header_container">
            <div className="left_section">
              <img alt="code_img" src={CodeIcon} />
              <p>로그인을 해주세요</p>
            </div>

            <div className="right_section">
              <img alt="point_img" src={PointIcon} />
              <img alt="notification_img" src={Notification} />
              <img alt="hamburger" src={Hamburger} />
            </div>
          </div>
        </div>

        <div className="ad_section"></div>

        <div className="icon_section"></div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default Home;
