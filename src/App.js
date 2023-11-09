import "./App.css";
import Login from "./signup/Login";
import Home from "./pages/Home";
import Signup from "./signup/Signup";
import News from "./pages/News";
import Members from "./pages/Members";
import MemberInfo from "./pages/MemberInfo";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import BoardList from "./pages/BoardList";
import WriteForm from "./component/board/WriteForm";
import ToDos from "./pages/ToDos";
import Movies from "./pages/Movies";
import MyCalendar from "./pages/Calendar";
import BoardDetail from "./pages/BoardDetail";
import FruitRadioBtn from "./pages/RadiBtn";
import ParentComponent from "./pages/PositionMove";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserStore from "./context/UserStore";

function App() {
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/News" element={<News />} />
            <Route path="/Members" element={<Members />} />
            <Route path="/Profile/:username" element={<Profile />} />
            <Route path="/MemberInfo/:id" element={<MemberInfo />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/Boards" element={<BoardList />} />
            <Route path="/BoardDetail/:id" element={<BoardDetail />} />
            <Route path="/boardWrite" element={<WriteForm />} />
            <Route path="/Todos" element={<ToDos />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Calendar" element={<MyCalendar />} />
            <Route path="/FruitRadioBtn" element={<FruitRadioBtn />} />
            <Route path="/PositionMove" element={<ParentComponent />} />
          </Route>
        </Routes>
      </Router>
    </UserStore>
    // <div className="App">
  );
}

export default App;
