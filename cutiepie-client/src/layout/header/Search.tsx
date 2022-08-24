import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { FlexBox, Margin } from "../../share/ui";

const Style = {
  Wrapper: styled.div`
    width: 195px;
    height: 32px;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    transition-property: all;
    transition-duration: 0.7s;
    padding-left: 10px;
    padding-right: 10px;
    flex-shrink: 0;
  `,
  Input: styled.input`
    width: 150px;
    height: 28px;
    border: none;
    background-color: lightgrey;
    caret-color: white;
    flex-shrink: 0;
    :focus {
      outline: none;
    }
    transition-property: all;
    transition-duration: 0.7s;
  `,
};

export default function Search() {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <Style.Wrapper
      style={
        isFocus
          ? { backgroundColor: "#353535", width: "240px" }
          : { backgroundColor: "lightgrey" }
      }
    >
      <Style.Input
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        style={
          isFocus
            ? { backgroundColor: "#353535" }
            : { backgroundColor: "lightgrey" }
        }
      />
      <FlexBox width={15} height={15} style={{ flexShrink: 0 }}>
        <Image src={"/search.svg"} width={15} height={15} alt="searchIcon" />
      </FlexBox>
    </Style.Wrapper>
  );
}
