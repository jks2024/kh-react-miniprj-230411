import { useState, useEffect, useContext } from "react";
import AxiosApi from "../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  direction: column;
  flex-wrap: wrap;
  margin: 20px;
`;

const MemberInfoWrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
  min-width: 240px;
  background-color: antiquewhite;
`;

const MemberId = styled.p`
  font-weight: bold;
`;

const MemberName = styled.p`
  font-style: italic;
`;

const MemberEmail = styled.p`
  color: #555;
`;

const MemberJoinDate = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

const Members = () => {
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useState("");
  const isLogin = window.localStorage.getItem("isLogin");

  console.log(isLogin);
  if (isLogin !== "TRUE") navigate("/");

  useEffect(() => {
    const memberInfo = async () => {
      const rsp = await AxiosApi.memberGet(); // 전체 조회
      if (rsp.status === 200) setMemberInfo(rsp.data);
      console.log(rsp.data);
    };
    memberInfo();
  }, []);

  const onClickMember = (email) => {
    console.log("onCLick member : " + email);
    navigate(`/memberInfo/${email}`);
  };

  return (
    <Container>
      {memberInfo &&
        memberInfo.map((member) => (
          <MemberInfoWrapper
            key={member.id}
            onClick={() => onClickMember(member.email)}
          >
            <MemberName>이름: {member.name}</MemberName>
            <MemberEmail>이메일: {member.email}</MemberEmail>
            <MemberJoinDate>가입일: {member.join}</MemberJoinDate>
          </MemberInfoWrapper>
        ))}
    </Container>
  );
};

export default Members;
