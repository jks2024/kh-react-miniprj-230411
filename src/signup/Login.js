import React, {useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import imgLogo from "../images/tier_logo.png"
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;

  .item1 {
    margin-top: 100px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item2 {
    margin: 10px;
    display: flex;
    align-items: center;
  }

  .item3 {
    margin-top: 10px;
    margin-left: 40px;
    margin-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;
    font-size: 14px;
  }

  .hint {
        display: flex;
        margin-top: -5px;
        margin-bottom: 10px;
        margin-right: 40px;
        justify-content:right;
        align-items:center;
        font-size: 12px;
        color: #999;
    }
    .input {
        margin-left: 30px;
        margin-right: 30px;
        width: 100%; /* 원하는 너비 설정 */
        height: auto; /* 높이값 초기화 */
        line-height : normal; /* line-height 초기화 */
        padding: .8em .5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
        font-family: inherit; /* 폰트 상속 */
        border: 1px solid #999;
        border-radius: 18px; /* iSO 둥근모서리 제거 */
        outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
        -webkit-appearance: none; /* 브라우저별 기본 스타일링 제거 */
        -moz-appearance: none; appearance: none;
    }
`;



const Login = () => {
    const navigate = useNavigate();

    // 키보드 입력
    const [inputId, setInputId] = useState("");
    const [inoutPw, setInputPw] = useState("");

    // 오류 메시지
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");

    // 유효성 검사
    const [isId, setIsId] = useState("");
    const [isPw, setIsPw] = useState("");

    // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
    const onChangeId = (e) => {
        const regexId = /^\w{5,20}$/;
        setInputId(e.target.value);
        if(!regexId.test(e.target.value)) {
            setIdMessage("5자리 이상 20자리 미만으로 입력해 주세요.");
            setIsId(false);
        } else {
            setIdMessage("오바른 형식 입니다.");
            setIsId(true);
        }


    }


    return (
       <Container>
            <div className="item1">
              <img src={imgLogo} alt="Logo" />
            </div>

            <div className="item2">
                <input className="input" placeholder="이름" value ={inputId} onChange={onChangeId}/>
            </div>

       </Container>
    );

};
export default Login;    