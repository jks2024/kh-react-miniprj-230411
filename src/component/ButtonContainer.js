import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
`;

export const TransBtn = styled.button`
  margin: 10px;
  flex: 1;
  min-width: 360px;
  height: 70px;
  background: transparent;
  border: 2px solid white; // 기본색상
  font-family: "Noto Sans KR", sans-serif;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #888;
  &:hover {
    background-color: #555;
    color: #eee;
  }
  &:active {
    background-color: #0056b3; // 활성화 상태에서의 색상
    border-color: #aaa;
  }
`;
