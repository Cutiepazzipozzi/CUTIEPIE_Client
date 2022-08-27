import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 580px;
    border: 1px solid;
    display: flex;
    justify-content: center;
  `,
  ImageWrapper: styled.div`
    width: 1200px;
    height: 580px;
    border: 1px solid;
    position: relative;
  `,
  BannerButton: styled.div`
    cursor: pointer;
    width: 38px;
    height: 50px;
    background-color: #454545;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.3;
    :hover {
      opacity: 0.7;
    }
  `,
};

export default function Banner() {
  const [isBannerHovered, setIsBannerHovered] = useState<boolean>(false);
  return (
    <Style.Wrapper>
      <Style.ImageWrapper
        onMouseEnter={() => {
          setIsBannerHovered(true);
        }}
        onMouseLeave={() => {
          setIsBannerHovered(false);
        }}
      >
        {isBannerHovered && (
          <>
            <Style.BannerButton style={{ left: "-19px" }}>
              <Image width={34} height={34} src="/left-arrow.svg" alt="prev" />
            </Style.BannerButton>
            <Style.BannerButton style={{ right: "-19px" }}>
              <Image width={34} height={34} src="/right-arrow.svg" alt="next" />
            </Style.BannerButton>
          </>
        )}
      </Style.ImageWrapper>
    </Style.Wrapper>
  );
}
