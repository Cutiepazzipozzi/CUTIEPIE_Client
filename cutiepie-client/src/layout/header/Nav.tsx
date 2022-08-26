import Image from "next/image";
import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 52px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    @media (max-width: 1260px) {
      width: 1260px;
    }
  `,
  InnerWrapper: styled.div`
    width: 1260px;
    height: 52px;
    display: flex;
    align-items: center;
    gap: 50px;
  `,
  Menu: styled.div`
    width: 52px;
    height: 52px;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  NavItem: styled.span`
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
  `,
};

export default function Nav() {
  return (
    <Style.Wrapper>
      <Style.InnerWrapper>
        <Style.Menu>
          <Image
            width={25}
            height={25}
            src="/hamburger-menu.svg"
            alt="hamburgerMenu"
          />
        </Style.Menu>
        <Style.NavItem>Best</Style.NavItem>
        <Style.NavItem>New10%</Style.NavItem>
        <Style.NavItem>Made</Style.NavItem>
        <Style.NavItem>플리마켓~80%</Style.NavItem>
        <Style.NavItem>|</Style.NavItem>
        <Style.NavItem style={{ fontWeight: "normal" }}>상의</Style.NavItem>
        <Style.NavItem style={{ fontWeight: "normal" }}>하의</Style.NavItem>
        <Style.NavItem style={{ fontWeight: "normal" }}>악세서리</Style.NavItem>
      </Style.InnerWrapper>
    </Style.Wrapper>
  );
}

// Best New10% Made 플리마켓~80% 상의 하의 악세서리
