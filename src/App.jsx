import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tournaments from "./pages/Tournaments/Tournaments";
import Profile from "./pages/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Authentication from "./pages/Authentication/Authentication";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Authentication />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

