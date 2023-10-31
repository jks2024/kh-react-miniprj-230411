import "./App.css";
import Login from "./signup/Login";
import Home from "./pages/Home";
import Signup from "./signup/Signup";
import News from "./pages/News";
import Members from "./pages/Members";
import Setting from "./pages/Setting";
import Layout from "./component/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
