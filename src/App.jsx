import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
