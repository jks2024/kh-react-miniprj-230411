import { Outlet } from "react-router-dom";
import Container from "./Container";
import logoWhite from "../images/tier_logo_white.png";
import alarmGo from "../images/bell.png";
import { UserContext } from "../context/UserStore";
import { useContext } from "react";

const Layout = () => {
  const context = useContext(UserContext);
  const { color } = context;
  return (
    <Container color={color}>
      <header className="mainhead">
        <div className="logo2">
          <img src={logoWhite} alt="White" />
        </div>
        <div className="bell">
          <img src={alarmGo} alt="alarm" />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
