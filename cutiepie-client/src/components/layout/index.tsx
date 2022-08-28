import React from "react";
import styled from "styled-components";
import Logo from "./header/Logo";
import Nav from "./header/Nav";
import UserMenu from "./header/UserMenu";

type Props = {
  children: React.ReactNode;
};

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 200vh;
    overflow-y: auto;
    z-index: 1;
  `,
};

export default function Layout({ children }: Props) {
  return (
    <Style.Wrapper>
      <UserMenu />
      <Logo />
      <Nav />
      {children}
    </Style.Wrapper>
  );
}
