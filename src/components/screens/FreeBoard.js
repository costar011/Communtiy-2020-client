import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  WholeWrapper,
  Wrapper,
  Column,
  TitleWrapper,
  Title,
  SearchInput,
  C_Btn,
} from "../commonComponents";
import { Link } from "react-router-dom";

class FreeBoard extends React.Component {
  render() {
    return (
      <WholeWrapper>
        <TitleWrapper>
          <Title>Free</Title>
        </TitleWrapper>

        <TitleWrapper direction={`row`}>
          <SearchInput />
          <SearchIcon />
        </TitleWrapper>

        <TitleWrapper width={"960px"} align={"flex-end"}>
          <Link to={`/write/free`}>
            <C_Btn>글쓰기</C_Btn>
          </Link>
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
        <Wrapper
          width="960px"
          height="25px"
          direction="row"
          isData={true}
          onClick={() => this.props.history.push("/detail/anyID")}
        >
          <Column width={"5%"} isHead={false}>
            1
          </Column>
          <Column width={"40%"} isHead={false}>
            This is coding ...
          </Column>
          <Column width={"15%"} isHead={false}>
            yerim
          </Column>
          <Column width={"20%"} isHead={false}>
            20200810
          </Column>
          <Column width={"20%"} isHead={false}>
            500
          </Column>
        </Wrapper>

        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            2
          </Column>
          <Column width={"40%"} isHead={false}>
            Help coding!
          </Column>
          <Column width={"15%"} isHead={false}>
            won
          </Column>
          <Column width={"20%"} isHead={false}>
            20200810
          </Column>
          <Column width={"20%"} isHead={false}>
            150
          </Column>
        </Wrapper>

        <Wrapper width="960px" height="25px" direction="row" isData={true}>
          <Column width={"5%"} isHead={false}>
            3
          </Column>
          <Column width={"40%"} isHead={false}>
            Screen React
          </Column>
          <Column width={"15%"} isHead={false}>
            yul
          </Column>
          <Column width={"20%"} isHead={false}>
            20200810
          </Column>
          <Column width={"20%"} isHead={false}>
            250
          </Column>
        </Wrapper>
        {/* -- DATA AREA END */}
      </WholeWrapper>
    );
  }
}
export default FreeBoard;
