import axios from "axios";
const KH_DOMAIN = "http://localhost:8100";

const AxiosApi = {
    // 로그인
    memberLogin: async(id, pw) => {
        const login = {
            id : id,
            pwd : pw 
        }
        return await axios.post(KH_DOMAIN + "/login", login);
    },
    // 회원 조회
    memberGet: async(id) => {
        return await axios.get(KH_DOMAIN +`/member?id=${id}`);
    },
};
export default AxiosApi;