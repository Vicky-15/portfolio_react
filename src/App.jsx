import "./styles/style.scss";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { About } from "./pages/About/About.jsx";
import { Work } from "./pages/Work/Work.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route exact path="about" element={<About />}></Route>
            <Route exact path="work" element={<Work />}></Route>
            <Route exact path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
