import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";
import { storage } from "../../api/firebase";

const FormContainer = styled.div`
  padding: 20px;
  margin: auto;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center; // 수직 방향 중앙 정렬
  margin-bottom: 20px; // 하단 여백 추가
`;

const StyledLabel = styled.label`
  flex: 0 0 100px; // 라벨의 너비 고정
  margin-right: 10px; // 라벨과 입력 필드 사이 여백
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 90%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px; // 입력창 아래에 여백 추가
`;

const StyledTextarea = styled.textarea`
  width: 90%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // 버튼을 중앙에 위치시킴
  margin-top: 20px; // 버튼 상단에 여백 추가
  gap: 10px; // 버튼 사이에 여백 추가
`;

const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  margin-top: 20px;
`;

const UploadButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const WriteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const userId = window.localStorage.getItem("userId");
  console.log("userId : " + userId);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(title, content, userId, url);
    try {
      const rsp = await AxiosApi.boardWrite(title, content, userId, url);
      if (rsp.data === true) {
        alert("글쓰기 성공");
        navigate("/Boards");
      } else {
        alert("글쓰기 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = () => {
    setTitle("");
    setContent("");
    navigate("/Boards");
  };

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = async () => {
    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);

      // 파일을 업로드하고 기다립니다.
      await fileRef.put(file);
      console.log("File uploaded successfully!");

      // 다운로드 URL을 가져오고 기다립니다.
      const url = await fileRef.getDownloadURL();
      console.log("저장경로 확인 : " + url);

      // 상태를 업데이트합니다.
      setUrl(url);
    } catch (error) {
      // 에러를 처리합니다.
      console.error("Upload failed", error);
    }
  };

  return (
    <FormContainer>
      <Title>글쓰기</Title>
      <FieldContainer>
        <StyledLabel htmlFor="title">제목</StyledLabel>
        <StyledInput
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
      </FieldContainer>
      <FieldContainer>
        <StyledLabel htmlFor="content">내용</StyledLabel>
        <StyledTextarea
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
        />
      </FieldContainer>
      <FileUploadContainer>
        <StyledInput type="file" onChange={handleFileInputChange} />
        <UploadButton onClick={handleUploadClick}>Upload</UploadButton>
      </FileUploadContainer>
      {url && <UserImage src={url} alt="uploaded" />}
      <ButtonContainer>
        <SubmitButton onClick={handleSubmit}>글쓰기</SubmitButton>
        <SubmitButton onClick={handleReset}>취소</SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default WriteForm;
