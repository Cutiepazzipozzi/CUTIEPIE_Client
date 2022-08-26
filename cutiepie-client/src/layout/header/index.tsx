import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import UserMenu from "./UserMenu";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
  `,
};

export default function Header() {
  return (
    <Style.Wrapper>
      <UserMenu />
      <Logo />
      <Nav />
    </Style.Wrapper>
  );
}
