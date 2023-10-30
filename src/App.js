import "./App.css";
import Login from "./signup/Login";
import Home from "./pages/Home";
import Signup from "./signup/Signup";
import News from "./pages/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
