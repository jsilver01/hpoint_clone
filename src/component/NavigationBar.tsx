import "./NavigationBar.css";
import HomeIcon from "../img/home-page.png";
import CultureIcon from "../img/teamwork.png";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoLogin = () => {
    navigate("/login");
  };

  return (
    <div className="bottom_nav_container">
      <div className="bottom_nav">
        <div className="nav_section">
          <div className="nav_item" onClick={handleGoHome}>
            <div className="icon">
              <img className="icon_img" src={HomeIcon} />
            </div>
            <p>Home</p>
          </div>
        </div>

        <div className="nav_section"></div>

        <div className="nav_section">
          <div className="nav_item">
            <div className="icon">
              <img className="icon_img" src={CultureIcon} />
            </div>
            <p>H.Culture</p>
          </div>
        </div>
      </div>

      <div className="floating_button" onClick={handleGoLogin}>
        <p>MY.H</p>
      </div>
    </div>
  );
};

export default NavigationBar;
