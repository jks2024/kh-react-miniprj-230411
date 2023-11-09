import { Outlet } from "react-router-dom";
import Container from "./Container";
import { UserContext } from "../../context/UserStore";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { LuListTodo } from "react-icons/lu";
import { FaHome, FaClipboardList, FaRegNewspaper } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StyledSideMenu = styled.div`
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #eee;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border-top-right-radius: 10px;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease;
`;

const StyledMenuList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledMenuItem = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex; // 메뉴 항목을 플렉스 아이템으로 만듭니다.
  align-items: center; // 아이콘과 텍스트를 세로 중앙에 배치합니다.
`;
const MenuIcon = styled.span`
  margin-right: 10px; // 아이콘과 텍스트 사이에 여백을 추가합니다.
  margin-top: 2px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Link의 기본 색상을 상속받도록 설정합니다.

  &:hover {
    color: #3498db; // 호버 상태일 때 색상 변경
  }
`;
const Dummy = styled.div`
  height: 54px;
`;

const Layout = () => {
  const context = useContext(UserContext);
  const { color } = context;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onClickLeft = () => {
    setIsMenuOpen(true);
  };
  const onClickRight = () => {
    navigate("/setting");
  };

  return (
    <Container color={color}>
      <header className="mainhead">
        <div className="logo2">
          <GiHamburgerMenu size={32} color="white" onClick={onClickLeft} />
        </div>
        <div className="bell">
          <FiSettings size={32} color="white" onClick={onClickRight} />
        </div>
        <StyledSideMenu
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(false)}
        >
          <StyledMenuList>
            <StyledMenuItem>
              <MenuIcon>
                <FaHome />
              </MenuIcon>
              <StyledLink to="/home">Home</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <MenuIcon>
                <FaClipboardList />
              </MenuIcon>
              <StyledLink to="/Boards">Boards</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <MenuIcon>
                <FaRegNewspaper />
              </MenuIcon>
              <StyledLink to="/News">News</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <MenuIcon>
                <CgProfile />
              </MenuIcon>
              <StyledLink to="/Members">Members</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <MenuIcon>
                <BiCameraMovie />
              </MenuIcon>
              <StyledLink to="/Movies">Movies</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <MenuIcon>
                <LuListTodo />
              </MenuIcon>
              <StyledLink to="/ToDos">ToDos</StyledLink>
            </StyledMenuItem>
          </StyledMenuList>
        </StyledSideMenu>
      </header>
      <main>
        <Dummy />
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
