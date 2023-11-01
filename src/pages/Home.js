import { useNavigate } from "react-router-dom";
import imgBottom from "../images/nedbank_s.png";
import { ButtonContainer, TransBtn } from "../component/ButtonContainer";

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
        </ButtonContainer>
        <div className="bdlogo">
          <img src={imgBottom} alt="NedBank" />
        </div>
      </div>
    </>
  );
};
export default Home;
