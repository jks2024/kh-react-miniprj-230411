import { useNavigate } from "react-router-dom";
import imgBottom from "../images/nedbank_s.png";
import { ButtonContainer, TransBtn } from "../component/menu/ButtonContainer";

const Home = () => {
  const navigate = useNavigate();

  const onClickBtn = (num) => {
    switch (num) {
      case 1:
        navigate("/members");
        break;
      case 2:
        navigate("/news");
        break;
      case 3:
        navigate("/profile/frontend");
        break;
      case 4:
        navigate("/setting");
        break;
      case 5:
        navigate("/boards");
        break;
      case 6:
        navigate("/todos");
        break;
      case 7:
        navigate("/movies");
        break;
      case 8:
        navigate("/Calendar");
        break;
      case 9:
        navigate("/FruitRadioBtn");
        break;
      default:
    }
  };

  return (
    <>
      <div>
        <ButtonContainer>
          <TransBtn onClick={() => onClickBtn(1)}>회원리스트</TransBtn>
          <TransBtn onClick={() => onClickBtn(2)}>뉴스 보기</TransBtn>
          <TransBtn onClick={() => onClickBtn(3)}>사진 업로드</TransBtn>
          <TransBtn onClick={() => onClickBtn(4)}>테마 변경</TransBtn>
          <TransBtn onClick={() => onClickBtn(5)}>게시판</TransBtn>
          <TransBtn onClick={() => onClickBtn(6)}>일정 관리</TransBtn>
          <TransBtn onClick={() => onClickBtn(7)}>영화 목록</TransBtn>
          <TransBtn onClick={() => onClickBtn(8)}>캘린더</TransBtn>
          <TransBtn onClick={() => onClickBtn(9)}>라디오 버튼</TransBtn>
        </ButtonContainer>
        <div className="bdlogo">
          <img src={imgBottom} alt="NedBank" />
        </div>
      </div>
    </>
  );
};
export default Home;
