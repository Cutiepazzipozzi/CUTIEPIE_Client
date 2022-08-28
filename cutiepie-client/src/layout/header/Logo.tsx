import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 150px;
    display: flex;
    justify-content: center;
    @media (max-width: 1260px) {
      width: 1260px;
    }
    border-bottom: 1px solid;
    margin-top: 43px;
  `,
  InnerWrapper: styled.div`
    width: 1260px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 50px;
    font-weight: 600;
  `,
  LinkBox: styled.div`
    width: fit-content;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    gap: 5px;
    padding-bottom: 5px;
  `,
};

export default function Logo() {
  const router = useRouter();
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Style.Wrapper>
      <Style.InnerWrapper>
        <Image
          width={486}
          height={84}
          src="/logo.png"
          alt="logo"
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          onClick={() => {
            router.push("/");
          }}
          style={{ opacity: isHover ? "0.5" : "1.0", cursor: "pointer" }}
        />
        <Style.LinkBox>
          <Image
            width={28}
            height={28}
            src="/facebook.svg"
            alt="facebook"
            style={{ cursor: "pointer" }}
          />
          <Image
            width={28}
            height={28}
            src="/instagram.svg"
            alt="instagram"
            style={{ borderRadius: "28px", cursor: "pointer" }}
            onClick={() => {
              window.location.href = "https://youngstagram-demo.vercel.app";
            }}
          />
        </Style.LinkBox>
      </Style.InnerWrapper>
    </Style.Wrapper>
  );
}
