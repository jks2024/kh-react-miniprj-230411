import "./App.css";
import GlobalStyle from "./style/GlobalStyle";
import Login from "./signup/Login";
import Home from "./pages/Home";
import Signup from "./signup/Signup";
import News from "./pages/News";
import Members from "./pages/Members";
import MemberInfo from "./pages/MemberInfo";
import ThemeSetting from "./pages/ThemeSetting";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import BoardList from "./pages/BoardList";
import BoardWriteForm from "./component/board/BoardWriteForm";
import Category from "./pages/Category";
import Movies from "./pages/Movies";
import MyCalendar from "./pages/Calendar";
import BoardDetail from "./pages/BoardDetail";
import FruitRadioBtn from "./pages/RadiBtn";
import ParentComponent from "./pages/PositionMove";
import Wheather from "./pages/Wheather";
import Setting from "./pages/Setting";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserStore from "./context/UserStore";
import ChatList from "./pages/ChatList";
import ChatRoomCreate from "./pages/ChatRoomCreate";
import Chatting from "./pages/Chatting";

function App() {
  return (
    <>
      <GlobalStyle />
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
              <Route path="/MemberInfo/:email" element={<MemberInfo />} />x
              <Route path="/ThemeSetting" element={<ThemeSetting />} />
              <Route path="/Boards" element={<BoardList />} />
              <Route path="/BoardDetail/:id" element={<BoardDetail />} />
              <Route path="/boardWrite" element={<BoardWriteForm />} />
              <Route path="/Category" element={<Category />} />
              <Route path="/Movies" element={<Movies />} />
              <Route path="/Calendar" element={<MyCalendar />} />
              <Route path="/FruitRadioBtn" element={<FruitRadioBtn />} />
              <Route path="/PositionMove" element={<ParentComponent />} />
              <Route path="/Wheather" element={<Wheather />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/Chat" element={<ChatList />} />
              <Route path="/Chat-create" element={<ChatRoomCreate />} />
              <Route path="/Chatting/:roomId" element={<Chatting />} />
            </Route>
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
