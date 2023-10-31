import { Outlet } from "react-router-dom";
import Container from "./Container";
import logoWhite from "../images/tier_logo_white.png";
import alarmGo from "../images/bell.png";

const Layout = () => {
  return (
    <Container>
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
