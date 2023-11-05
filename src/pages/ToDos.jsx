import React, { useState, useEffect } from "react";
import TodoTemplate from "../component/todos/TodoTemplate";
import TodoInsert from "../component/todos/TodoInsert";
import TodoList from "../component/todos/TodoList";
import AxiosApi from "../api/AxiosApi";
import Modal from "../utils/Modal";

const ToDos = () => {
  const [todos, setTodos] = useState([]);
  const userId = window.localStorage.getItem("userId");

  const [modalOpen, setModalOpen] = useState(false);
  const [modlaMessage, setModalMessage] = useState("");
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const todoList = async () => {
      const rsp = await AxiosApi.todoList(userId);
      if (rsp.status === 200) setTodos(rsp.data);
      console.log(rsp.data);
    };
    todoList();
  }, []);

  const onInsert = async (text) => {
    console.log("onInsert : " + text + " " + userId);
    const rsp = await AxiosApi.todoInsert(userId, text);
    if (rsp.data === true) {
      const rsp = await AxiosApi.todoList(userId);
      if (rsp.status === 200) setTodos(rsp.data);
      console.log(rsp.data);
    } else {
      setModalOpen(true);
      setModalMessage("등록 실패");
    }
  };

  const onRemove = async (id) => {
    const rsp = await AxiosApi.todoDelete(id);
    if (rsp.data === true) {
      const rsp = await AxiosApi.todoList(userId);
      if (rsp.status === 200) setTodos(rsp.data);
      console.log(rsp.data);
    } else {
      setModalOpen(true);
      setModalMessage("삭제 실패");
    }
  };

  const onToggle = async (id) => {
    const rsp = await AxiosApi.todoUpdate(id);
    if (rsp.data === true) {
      const rsp = await AxiosApi.todoList(userId);
      if (rsp.status === 200) setTodos(rsp.data);
      console.log(rsp.data);
    } else {
      setModalOpen(true);
      setModalMessage("수정 실패");
    }
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <Modal open={modalOpen} close={closeModal} header="오류">
        {modlaMessage}
      </Modal>
    </TodoTemplate>
  );
};
export default ToDos;
