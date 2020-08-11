import React from "react";
import {
  WholeWrapper,
  Wrapper,
  Column,
  TitleWrapper,
  Title,
  SearchInput,
  C_Btn,
} from "../commonComponents";

class DocsBoard extends React.Component {
  render() {
    return (
      <WholeWrapper>
        <TitleWrapper>
          <Title>Docs</Title>
        </TitleWrapper>

        <TitleWrapper>
          <SearchInput />
        </TitleWrapper>

        <TitleWrapper width={"960px"} align={"flex-end"}>
          <C_Btn>글쓰기</C_Btn>
        </TitleWrapper>

        <Wrapper width="960px" height="25px" direction="row">
          <Column width={"5%"} isHead={true}>
            번호
          </Column>
          <Column width={"40%"} isHead={true}>
            제목
          </Column>
          <Column width={"15%"} isHead={true}>
            작성자
          </Column>
          <Column width={"20%"} isHead={true}>
            작성일
          </Column>
          <Column width={"20%"} isHead={true}>
            조회수
          </Column>
        </Wrapper>
        {/* -- DATA AREA START */}
        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            1
          </Column>
          <Column width={"40%"} isHead={false}>
            Why?
          </Column>
          <Column width={"15%"} isHead={false}>
            han
          </Column>
          <Column width={"20%"} isHead={false}>
            20200810
          </Column>
          <Column width={"20%"} isHead={false}>
            650
          </Column>
        </Wrapper>

        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            2
          </Column>
          <Column width={"40%"} isHead={false}>
            Help Me!
          </Column>
          <Column width={"15%"} isHead={false}>
            yun
          </Column>
          <Column width={"20%"} isHead={false}>
            20200810
          </Column>
          <Column width={"20%"} isHead={false}>
            750
          </Column>
        </Wrapper>

        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            3
          </Column>
          <Column width={"40%"} isHead={false}>
            Hey !
          </Column>
          <Column width={"15%"} isHead={false}>
            kang
          </Column>
          <Column width={"20%"} isHead={false}>
            20200810
          </Column>
          <Column width={"20%"} isHead={false}>
            440
          </Column>
        </Wrapper>
        {/* -- DATA AREA END */}
      </WholeWrapper>
    );
  }
}
export default DocsBoard;
