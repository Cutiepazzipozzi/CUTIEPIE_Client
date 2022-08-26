import styled from "styled-components";
import { CartNumber, Margin, Text } from "../../share/ui";
import Search from "./Search";

const Style = {
  Wrapper: styled.div`
    min-width: 100vw;
    height: 43px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1260px) {
      width: 1260px;
    }
    position: sticky;
    top: 0px;
    align-self: flex-start;
  `,
  InnerWrapper: styled.div`
    width: 1260px;
    height: 43px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Nav: styled.div`
    width: fit-content;
    height: 43px;
    display: flex;
    align-items: center;
  `,
};

export default function UserMenu() {
  return (
    <Style.Wrapper>
      <Style.InnerWrapper>
        <Style.Nav>
          <Text.Caption about="pointer">로그인</Text.Caption>
          <Margin direction="row" size={10} />
          <Text.Caption about="pointer">회원가입</Text.Caption>
          <Margin direction="row" size={10} />
          <Text.Caption about="pointer">장바구니</Text.Caption>
          <Margin direction="row" size={2} />
          <CartNumber>0</CartNumber>
          <Margin direction="row" size={10} />
          <Text.Caption about="pointer">마이페이지</Text.Caption>
        </Style.Nav>
        <Search />
      </Style.InnerWrapper>
    </Style.Wrapper>
  );
}
