import React, { useState, useEffect } from "react";
import AxiosApi from "../api/AxiosApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BoardContainer = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const BoardUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const BoardImage = styled.img`
  width: 120px; // 원하는 이미지 크기로 조정하세요
  height: 120px;
  background-color: darkgray;
  border-radius: 8px;
  margin-right: 15px; // 이미지와 텍스트 사이의 간격을 조정하세요
  float: left; // 왼쪽 정렬을 위해 float 속성을 사용합니다
`;

const BoardLi = styled.li`
  background-color: #f2f2f2;
  margin: 10px 0;
  padding: 10px 14px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex; // 내부 요소들을 flex로 배치합니다.
  align-items: center; // 세로 중앙 정렬
  overflow: hidden; // float 때문에 생길 수 있는 레이아웃 이슈를 방지합니다.
`;

const BoardTitle = styled.h2`
  font-size: 1.4em;
  color: #007bff;
  margin: 0 0 10px;
`;

const BoardContent = styled.p`
  color: #444;
  font-size: 1em;
`;

const BoardDate = styled.p`
  color: #777;
  font-size: 0.8em;
  text-align: right;
`;

const BoardContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-top: 10px;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserId = styled.span`
  color: #555;
  font-style: italic;
  font-size: 13px;
`;

const WriteButton = styled.button`
  width: 160px;
  margin-top: 20px;
  padding: 10px 15px;
  font-weight: bold;
  background-color: #4caf50;
  color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #46a049;
  }
  &:active {
    background-color: #3e8e41;
  }
`;

function BoardList() {
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const boardList = async () => {
      try {
        const rsp = await AxiosApi.boardList();
        console.log(rsp.data);
        setBoardList(rsp.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finally");
      }
    };
    boardList();
  }, []);

  // 글쓰기 버튼 클릭 시
  const handleWriteClick = () => {
    navigate("/boardWrite");
  };

  return (
    <BoardContainer>
      <Title>게시판 목록</Title>
      <BoardUl>
        {boardList &&
          boardList.map((board) => (
            <BoardLi key={board.id}>
              <BoardImage
                src={board.img ? board.img : "http://via.placeholder.com/160"}
                alt="Board image"
              />
              <BoardContentWrapper>
                <BoardHeader>
                  <BoardTitle>{board.title}</BoardTitle>
                  <UserId>{board.userId}</UserId>
                </BoardHeader>
                <BoardContent>{board.content}</BoardContent>
                <BoardDate>{board.regDate}</BoardDate>
              </BoardContentWrapper>
            </BoardLi>
          ))}
      </BoardUl>
      <WriteButton onClick={handleWriteClick}>글쓰기</WriteButton>
    </BoardContainer>
  );
}

export default BoardList;
