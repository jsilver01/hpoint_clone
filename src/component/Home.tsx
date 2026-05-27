import "./Home.css";
import NavigationBar from "./NavigationBar";
import CodeIcon from "../img/code.png";

const Home = () => {
  return (
    <div className="home_container">
      <div className="main_wrapper">
        <div className="ad_background_section">
          <div className="header_container">
            <div className="left_section"></div>

            <div className="right_section"></div>
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
