import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/index.js";
import ProfilePage from "./pages/ProfilePage/index.js";
// import Background from "../src/components/Background";
function App() {
  // const [windowSize, setWindowSize] = useState(window.innerWidth);

  // const onResize = () => {
  //   setWindowSize(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", onResize);
  //   return () => {
  //     window.removeEventListener("resize", onResize);
  //   };
  // }, [windowSize]);
  return (
    <>
      {/* {windowSize > 890 && <Background />} */}

      <Routes>
        <Route path='/resume-2021' element={<MainPage />} />
        <Route path='/profile-page' element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
