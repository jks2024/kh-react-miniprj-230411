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
    height: 120px;
    justify-content: space-between;

    .logo2 {
      margin-top: 24px;
      margin-left: 30px;
    }
    .bell {
      margin-top: 30px;
      margin-right: 30px;
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
