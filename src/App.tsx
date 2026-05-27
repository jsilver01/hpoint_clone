import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SplashScreen from "./component/SplashScreen";
import Home from "./component/Home";
import Login from "./component/Login";

function App() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app_wrapper">
      {isSplash ? (
        <div className="container">
          <div className="phone_frame">
            <SplashScreen />
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <div className="container">
            <div className="phone_frame">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
