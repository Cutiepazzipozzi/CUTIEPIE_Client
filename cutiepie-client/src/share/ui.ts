import styled from "styled-components";

export const Text = {
  Caption: styled.span`
    font-size: 12px;
    font-weight: 400;
    cursor: ${(props) => props.about};
  `,
};
export const CartNumber = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 15px;
  background-color: lightgrey;
  color: white;
  font-size: 12px;
  padding: 1px 5px;
  font-weight: bolder;
`;

type StyleMargin = {
  size: number;
  direction: "row" | "column";
};
export const Margin = styled.div<StyleMargin>`
  height: ${({ direction, size }) => (direction === "column" ? size : 0)}px;
  width: ${({ direction, size }) => (direction === "column" ? 0 : size)}px;
`;

type FlexBoxProperty = {
  justifyContents?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  gap?: number;
  column?: boolean;
  wrap?: boolean;
  width?: number | string;
  height?: number | string;
  minHeight?: string;
  maxHeight?: string;
};

export const FlexBox = styled.div<FlexBoxProperty>`
  width: ${({ width }) =>
    width ? (typeof width === "string" ? width : `${width}px`) : `100%`};
  height: ${({ height }) =>
    height ? (typeof height === "string" ? height : `${height}px`) : `auto`};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 0)};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "none")};
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  gap: ${({ gap }) => (gap ? gap : 0)}px;
  justify-content: ${({ justifyContents }) =>
    justifyContents ? justifyContents : "flex-start"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "stretch")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
`;
