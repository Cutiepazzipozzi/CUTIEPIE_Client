import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CartNumber, FlexBox, Margin, Text } from "../../share/ui";
import Search from "./Search";

const Style = {
  Wrapper: styled.div`
    position: fixed;
    top: 0px;
    min-width: 100vw;
    height: 43px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1260px) {
      width: 1260px;
    }
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 1;
  `,
  InnerWrapper: styled.div`
    width: 1260px;
    height: 43px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: relative;
  `,
  Nav: styled.div`
    width: fit-content;
    height: 43px;
    display: flex;
    align-items: center;
  `,
  HomeButton: styled.div`
    cursor: pointer;
    width: 52px;
    height: 43px;
    background-color: #252525;
    color: white;
    font-weight: 600;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -43px;
    transform: ${(props) =>
      props.about === "view" ? "translateY(43px)" : "translateY(0)"};
    transition-property: all;
    transition-duration: 0.5s;
    transition-delay: ${(props) => (props.about === "view" ? "0.3s" : "0")};
  `,
};

export default function UserMenu() {
  const router = useRouter();
  const [isHombuttonView, setISHomebuttonView] = useState<"view" | "hide">(
    "hide"
  );
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setISHomebuttonView("view");
      } else {
        setISHomebuttonView("hide");
      }
    });
  }, []);
  return (
    <Style.Wrapper>
      <Style.InnerWrapper>
        <Style.Nav>
          <Style.HomeButton
            about={isHombuttonView}
            onClick={() => {
              router.push("/");
            }}
          >
            홈
          </Style.HomeButton>
          <FlexBox
            width={"fit-content"}
            height={43}
            alignItems={"center"}
            style={{
              transitionProperty: "all",
              transitionDuration: "0.3s",
              transform:
                isHombuttonView === "view"
                  ? "translateX(62px)"
                  : "translateX(0)",
              transitionDelay: isHombuttonView === "view" ? "0" : "0.3s",
            }}
          >
            <Text.Caption about="pointer">로그인</Text.Caption>
            <Margin direction="row" size={10} />
            <Link href={"/join"}><Text.Caption about="pointer">회원가입</Text.Caption></Link>
            <Margin direction="row" size={10} />
            <Text.Caption about="pointer">장바구니</Text.Caption>
            <Margin direction="row" size={2} />
            <CartNumber>0</CartNumber>
            <Margin direction="row" size={10} />
            <Text.Caption about="pointer">마이페이지</Text.Caption>
          </FlexBox>
        </Style.Nav>
        <Search />
      </Style.InnerWrapper>
    </Style.Wrapper>
  );
}
