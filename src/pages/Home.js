import React, { useState, useEffect } from "react";
import AxiosApi from "../api/AxiosApi";
import styled from "styled-components";

const MemberListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    witdh: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;
const MemberList = styled.table`
  border-collapse: collapse;
  width: 768px;
  margin: 0 auto;
  font-size: 1.125em;
  @media screen and (max-width: 768px) {
    witdh: 100%;
  }
  th,
  td {
    border: 1px solid #ccc;
    padding: 2px;
  }
  th {
    background-color: bisque;
  }
`;
const MemberTitle = styled.table`
  font-size: 2em;
  text-align: center;
`;

const Home = () => {
  const [memberInfo, setMemberInfo] = useState("");

  useEffect(() => {
    const memberInfo = async () => {
      const rsp = await AxiosApi.memberGet("ALL"); // 전체회원 조회
      setMemberInfo(rsp.data);
      console.log(rsp.data);
    };
    memberInfo();
  }, []);

  const memberDetail = (id) => {
    console.log(id);
  };

  return (
    <MemberListBlock>
      <MemberList>
        <MemberTitle>회원 정보</MemberTitle>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>이메일</th>
          <th>가입일</th>
        </tr>
        {memberInfo &&
          memberInfo.map((member) => (
            <tr key={member.id} onClick={() => memberDetail(member.id)}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.join}</td>
            </tr>
          ))}
      </MemberList>
    </MemberListBlock>
  );
};
export default Home;
