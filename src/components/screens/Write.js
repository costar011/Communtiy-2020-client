import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Title = styled.div`
  font-size: 28px;
`;

const TextInput = styled.input`
  width: 440px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5s;
  padding: 0px 10px;

  &:focus {
    box-shadow: 2px 3px 2px #00a8ff;
  }
`;

const TextArea = styled.textarea`
  width: 440px;
  height: 300px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5s;
  padding: 10px;
  resize: none;

  &:focus {
    box-shadow: 2px 3px 2px #00a8ff;
  }
`;

class Write extends React.Component {
  render() {
    console.log(this.props.match.params.boardType);
    return (
      <Wrapper>
        <Title>게시글 작성하기</Title>

        <TextInput type="text" placeholder="Title..." />
        <TextInput type="text" placeholder="Author..." />
        <TextArea placeholder="Description..." />
      </Wrapper>
    );
  }
}

export default Write;
