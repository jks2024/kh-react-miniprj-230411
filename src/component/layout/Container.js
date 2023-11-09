import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: auto;
  background-color: ${(props) => props.color || "#f9aa06"};
  .mainhead {
    display: flex;
    justify-content: space-between;
    position: fixed;
    height: 54px;
    width: 100%;
    background-color: ${(props) => props.color || "#f9aa06"};
    z-index: 100;
    top: 0;
    left: 0;

    .logo2 {
      margin-top: 12px;
      margin-left: 34px;
    }
    .bell {
      margin-top: 12px;
      margin-right: 34px;
    }
  }
  .bdlogo {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
  }
`;

export default Container;
