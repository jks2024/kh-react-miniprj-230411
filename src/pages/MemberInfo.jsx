import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../api/AxiosApi";

const Container = styled.div`
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 320px;
  margin: auto;
  background: rgba(0, 0, 0, 0.2);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  margin-right: 10px;
`;

const Field = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

const MemberInfo = () => {
  const { id } = useParams();
  const [member, setMember] = useState("");

  useEffect(() => {
    const memberInfo = async () => {
      const rsp = await AxiosApi.memberGet(id);
      if (rsp.status === 200) setMember(rsp.data[0]);
      console.log(rsp.data[0]);
    };
    memberInfo();
  }, []);

  return (
    <Container>
      <UserInfo>
        <UserImage src={"http://via.placeholder.com/160"} alt="User" />
        <h3>{member.name}</h3>
      </UserInfo>
      <Field>
        <Label>아이디</Label>
        <div>{member.id}</div>
      </Field>
      <Field>
        <Label>이메일</Label>
        <div>{member.email}</div>
      </Field>
      <Field>
        <Label>가입일</Label>
        <div>{member.join}</div>
      </Field>
    </Container>
  );
};

export default MemberInfo;
