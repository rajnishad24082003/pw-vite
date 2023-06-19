import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import "./App.css";
import "./assets/scss/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FAQPage from "./pages/Faq";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import All from "./components/Products/All";
import Hrms from "./components/Products/Hrms";
import Pms from "./components/Products/Pms";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/faq" element={<FAQPage></FAQPage>}></Route>
          <Route path="/products/all" element={<All></All>}></Route>
          <Route path="/products/hrms" element={<Hrms></Hrms>}></Route>
          <Route path="/products/pms" element={<Pms></Pms>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
