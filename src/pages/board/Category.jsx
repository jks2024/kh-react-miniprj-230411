import React, { useState, useEffect } from "react";
import CateTemplate from "../../component/category/CateTemplate";
import CateInsert from "../../component/category/CateInsert";
import CateList from "../../component/category/CateList";
import AxiosApi from "../../api/AxiosApi";
import Modal from "../../utils/Modal";
import Common from "../../utils/Common";

const Category = () => {
  const [category, setCategory] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modlaMessage, setModalMessage] = useState("");
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const accessToken = Common.getAccessToken();
    const cateList = async () => {
      try {
        const rsp = await AxiosApi.cateList();
        if (rsp.status === 200) setCategory(rsp.data);
        console.log(rsp.data);
      } catch (e) {
        if (e.response.status === 401) {
          await Common.handleUnauthorized();
          const newToken = Common.getAccessToken();
          if (newToken !== accessToken) {
            const rsp = await AxiosApi.cateList();
            if (rsp.status === 200) setCategory(rsp.data);
            console.log(rsp.data);
          }
        }
      }
    };
    cateList();
  }, []);

  const onInsert = async (text) => {
    const accessToken = Common.getAccessToken();
    try {
      const rsp = await AxiosApi.cateInsert(text);
      if (rsp.data === true) {
        const rsp = await AxiosApi.cateList();
        if (rsp.status === 200) setCategory(rsp.data);
        console.log(rsp.data);
      } else {
        setModalOpen(true);
        setModalMessage("등록 실패");
      }
    } catch (e) {
      if (e.response.status === 401) {
        await Common.handleUnauthorized();
        const newToken = Common.getAccessToken();
        if (newToken !== accessToken) {
          const rsp = await AxiosApi.cateInsert(text);
          if (rsp.data === true) {
            const rsp = await AxiosApi.cateList();
            if (rsp.status === 200) setCategory(rsp.data);
            console.log(rsp.data);
          } else {
            setModalOpen(true);
            setModalMessage("등록 실패");
          }
        }
      }
    }
  };

  const onRemove = async (id) => {
    const accessToken = Common.getAccessToken();
    try {
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
    } catch (e) {
      if (e.response.status === 401) {
        await Common.handleUnauthorized();
        const newToken = Common.getAccessToken();
        if (newToken !== accessToken) {
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
        }
      }
    }
  };

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
