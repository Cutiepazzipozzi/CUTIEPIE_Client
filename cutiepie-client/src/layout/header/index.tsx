import styled from "styled-components";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 500px;
    display: flex;
    flex-direction: column;
  `,
};

export default function Header() {
  return (
    <Style.Wrapper>
      <UserMenu />
      <Logo />
    </Style.Wrapper>
  );
}
