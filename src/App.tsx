import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SplashScreen from "./component/Splash/SplashScreen";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import SideDrawer from "./component/SideDrawer/SideDrawer";

function App() {
  const [isSplash, setIsSplash] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
                <Route
                  path="/"
                  element={<Home onOpenDrawer={() => setDrawerOpen(true)} />}
                />
                <Route
                  path="/login"
                  element={<Login onOpenDrawer={() => setDrawerOpen(true)} />}
                />
              </Routes>

              <SideDrawer
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              />
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
