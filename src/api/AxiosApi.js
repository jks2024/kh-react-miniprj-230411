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
    return await axios.get(KH_DOMAIN + `/users/member/?id=${id}`);
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
  // 게시글 조회
  boardList: async () => {
    return await axios.get(KH_DOMAIN + "/api/board");
  },
  // 게시글 상세 조회
  boardDetail: async (boardId) => {
    return await axios.get(KH_DOMAIN + `/api/board/detail/${boardId}`);
  },
  // 게시글 쓰기
  boardWrite: async (title, content, userId, img) => {
    const board = {
      title: title,
      content: content,
      userId: userId,
      img: img,
    };
    return await axios.post(KH_DOMAIN + "/api/board/new", board);
  },
  // 게시글에 달린 댓글 조회
  commentList: async (boardId) => {
    return await axios.get(KH_DOMAIN + `/api/comment/list/${boardId}`);
  },
  // 댓글 쓰기
  commentWrite: async (userId, boardId, content) => {
    const comment = {
      boardId: boardId,
      userId: userId,
      content: content,
    };
    return await axios.post(KH_DOMAIN + `/api/comment/new`, comment);
  },
  // Todo 조회
  todoList: async (userId) => {
    return await axios.get(KH_DOMAIN + `/api/todo/list?userId=${userId}`);
  },
  // Todo 쓰기
  todoInsert: async (userId, content) => {
    const todo = {
      userId: userId,
      text: content,
      checked: false,
    };
    return await axios.post(KH_DOMAIN + "/api/todo/new", todo);
  },
  // Todo 삭제
  todoDelete: async (todoId) => {
    return await axios.delete(KH_DOMAIN + `/api/todo/${todoId}`);
  },
  // Todo 수정
  todoUpdate: async (todoId) => {
    return await axios.put(KH_DOMAIN + `/api/todo/${todoId}`);
  },
  // 영화 목록 조회
  movieList: async () => {
    return await axios.get(KH_DOMAIN + "/api/movie/list");
  },
};
export default AxiosApi;
