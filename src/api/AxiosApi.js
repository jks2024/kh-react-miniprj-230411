import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인
  memberLogin: async (id, pw) => {
    const login = {
      id: id,
      pwd: pw,
    };
    return await axios.post(KH_DOMAIN + "/users/login", login);
  },
  //회원 조회
  memberGet: async (id) => {
    return await axios.get(KH_DOMAIN + `/users/member/?name=${id}`);
  },

  // 회원 가입
  memberReg: async (id, pwd, name, mail) => {
    const member = {
      id: id,
      pwd: pwd,
      name: name,
      mail: mail,
    };
    return await axios.post(KH_DOMAIN + "/users/new", member);
  },
  // 회원 가입 여부 확인
  memberRegCheck: async (id) => {
    return await axios.get(KH_DOMAIN + `/users/check/?id=${id}`);
  },

  // 회원 탈퇴
  memberDel: async (id) => {
    const del = {
      id: id,
    };
    return await axios.post(KH_DOMAIN + "/user/delete", del);
  },
};
export default AxiosApi;
