import styled from "styled-components";

const BORDER = `1px solid rgb(140, 140, 140)`;
const BORDER_RADIUS = `4px`;

export const WholeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

// Wrapper 는 무언가를 감싸고 기본적으로 css를 갖고있다.
export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${BORDER};
  border-radius: ${BORDER_RADIUS};

  display: flex;
  flex-direction: ${(props) => props.direction};

  ${(props) =>
    props.isData &&
    `
  transition: 0.5s;
  cursor: pointer;
    
    &:hover {
        background : rgb(180, 180, 180);
        color: #fff;
    }
    `}

  &:not() {
    border-right: 1px soild #fff;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  margin: 100px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 26px;
  color: rgb(50, 50, 50);
`;

export const Column = styled.div`
  width: ${(props) => props.width};
  height: 25px;
  transition: 0.5s;
  cursor: pointer;

  ${(props) =>
    props.isHead
      ? ` background: #0b0b0b;
  color: #fff;
  line-height: 25px;
  text-align: center;`
      : ` line-height: 25px;
  text-align: center;
  border-bottom: ${BORDER};`}
`;
