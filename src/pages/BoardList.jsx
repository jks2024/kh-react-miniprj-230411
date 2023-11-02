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

const BoardLi = styled.li`
  background-color: #f2f2f2;
  margin: 10px 0;
  padding: 10px 14px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    console.log("onClickWrite");
    navigate("/boardWrite");
  };

  return (
    <BoardContainer>
      <Title>게시판 목록</Title>
      <BoardUl>
        {boardList &&
          boardList.map((board) => (
            <BoardLi key={board.id}>
              <BoardHeader>
                <BoardTitle>{board.title}</BoardTitle>
                <UserId>{board.userId}</UserId>
              </BoardHeader>
              <BoardContent>{board.content}</BoardContent>
            </BoardLi>
          ))}
      </BoardUl>
      <WriteButton onClick={handleWriteClick}>글쓰기</WriteButton>
    </BoardContainer>
  );
}

export default BoardList;
