import React, { useEffect, useState } from "react";
import "./App.css";
import SplashScreen from "./component/SplashScreen";
import Home from "./component/Home";

function App() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{isSplash ? <SplashScreen /> : <Home />}</div>;
}

export default App;
