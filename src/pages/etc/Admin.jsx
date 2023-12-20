import { useState, useEffect } from "react";
import Common from "../../utils/Common";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  direction: column;
  flex-wrap: wrap;
  margin: 20px auto;
`;

const MemberInfoWrapper = styled.div`
  display: flex;
  margin: 10px 26px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Button = styled.button`
  padding: 8px;
  background-color: #4caf50;
  width: 80px;
  margin-left: 4px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 10px;
`;

const MemberName = styled.span`
  font-style: italic;
  font-size: 1.2rem;
  color: #333;
  margin: 10px;
`;

const MemberEmail = styled.span`
  color: #555;
  margin-right: px;
  margin-bottom: 10px;
`;

const MemberJoinDate = styled.span`
  font-size: 0.8rem;
  color: #777;
  margin-right: 10px;
`;

const Admin = () => {
  const [memberInfo, setMemberInfo] = useState("");

  useEffect(() => {
    const accessToken = Common.getAccessToken();
    const memberInfo = async () => {
      try {
        const rsp = await AxiosApi.memberGet(); // 전체 조회
        if (rsp.status === 200) setMemberInfo(rsp.data);
      } catch (e) {
        if (e.response.status === 401) {
          await Common.handleUnauthorized();
          const newToken = Common.getAccessToken();
          if (newToken !== accessToken) {
            const rsp = await AxiosApi.memberGet(); // 전체 조회
            if (rsp.status === 200) setMemberInfo(rsp.data);
          }
        }
      }
    };
    memberInfo();
  }, []);

  const onClickMemberDel = (email) => {
    const memberDel = async () => {
      try {
        const rsp = await AxiosApi.memberDel(email);
        if (rsp.status === 200) {
          alert("회원 삭제가 완료되었습니다.");
          const rsp = await AxiosApi.memberGet(); // 전체 조회
          if (rsp.status === 200) setMemberInfo(rsp.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    memberDel();
  };

  return (
    <Container>
      {memberInfo &&
        memberInfo.map((member) => (
          <MemberInfoWrapper key={member.email}>
            <UserImage src={member.image} />
            <UserInfo>
              <MemberName>이름: {member.name}</MemberName>
              <MemberEmail>이메일: {member.email}</MemberEmail>
              <MemberJoinDate>
                가입일: {Common.formatDate(member.regDate)}
              </MemberJoinDate>
            </UserInfo>
            <Button onClick={() => onClickMemberDel(member.email)}>
              회원삭제
            </Button>
          </MemberInfoWrapper>
        ))}
    </Container>
  );
};

export default Admin;
