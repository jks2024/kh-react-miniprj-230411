import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 900px;
  min-height: 100vh;
  margin: auto;
  background-color: ${(props) => props.color || "#f9aa06"};
  .mainhead {
    display: flex;
    height: 44px;
    justify-content: space-between;

    .logo2 {
      margin-top: 20px;
      margin-left: 34px;
    }
    .bell {
      margin-top: 20px;
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
