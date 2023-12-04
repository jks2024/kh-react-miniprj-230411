import React, { useState, useEffect } from "react";
import CateTemplate from "../../component/category/CateTemplate";
import CateInsert from "../../component/category/CateInsert";
import CateList from "../../component/category/CateList";
import AxiosApi from "../../api/AxiosApi";
import Modal from "../../utils/Modal";

const Category = () => {
  const [category, setCategory] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modlaMessage, setModalMessage] = useState("");
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const cateList = async () => {
      const rsp = await AxiosApi.cateList();
      if (rsp.status === 200) setCategory(rsp.data);
      console.log(rsp.data);
    };
    cateList();
  }, []);

  const onInsert = async (text) => {
    const rsp = await AxiosApi.cateInsert(text);
    if (rsp.data === true) {
      const rsp = await AxiosApi.cateList();
      if (rsp.status === 200) setCategory(rsp.data);
      console.log(rsp.data);
    } else {
      setModalOpen(true);
      setModalMessage("등록 실패");
    }
  };

  const onRemove = async (id) => {
    const rsp = await AxiosApi.cateDelete(id);
    console.log(rsp.data);
    if (rsp.data === true) {
      const rsp = await AxiosApi.cateList();
      if (rsp.status === 200) setCategory(rsp.data);
      console.log(rsp.data);
    } else {
      setModalOpen(true);
      setModalMessage("삭제 실패");
    }
  };

  // const onToggle = async (id) => {
  //   const rsp = await AxiosApi.todoUpdate(id);
  //   if (rsp.data === true) {
  //     const rsp = await AxiosApi.todoList(userId);
  //     if (rsp.status === 200) setTodos(rsp.data);
  //     console.log(rsp.data);
  //   } else {
  //     setModalOpen(true);
  //     setModalMessage("수정 실패");
  //   }
  // };

  return (
    <CateTemplate>
      <CateInsert onInsert={onInsert} />
      <CateList cates={category} onRemove={onRemove} />
      <Modal open={modalOpen} close={closeModal} header="오류">
        {modlaMessage}
      </Modal>
    </CateTemplate>
  );
};
export default Category;
