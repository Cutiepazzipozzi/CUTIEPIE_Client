import React from "react";
import styled from "styled-components";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    min-height: 200vh;
  `,
};

export default function Layout({ children }: Props) {
  return (
    <Style.Wrapper>
      <Header />
      {children}
    </Style.Wrapper>
  );
}
