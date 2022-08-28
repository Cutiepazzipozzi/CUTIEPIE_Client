import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  currentImageIndex: number;
  isBannerHovered: boolean | undefined;
};

const Style = {
  Button: styled.div`
    cursor: pointer;
    width: 30px;
    height: 4px;
    background-color: lightgrey;
    overflow: hidden;
    position: relative;
  `,
  ButtonShadow: styled.div`
    cursor: pointer;
    width: 30px;
    height: 4px;
    background-color: #555555;
    position: absolute;
    left: -30px;
  `,
};

export default function SelectedImageButton({
  currentImageIndex,
  isBannerHovered,
}: Props) {
  const [buttonInterv, setButtonInterv] = useState<NodeJS.Timer>();
  const [progress, setProgress] = useState<number>(-30);
  useEffect(() => {
    setProgress(-30);
    if (isBannerHovered) {
      clearInterval(buttonInterv);
    } else if (!isBannerHovered) {
      setButtonInterv(
        setInterval(() => {
          setProgress((current) => (current + 1 > 0 ? -30 : current + 1));
        }, 164)
      );
    }
  }, [isBannerHovered]);
  useEffect(() => {
    setProgress(-30);
  }, [currentImageIndex]);

  return (
    <Style.Button>
      <Style.ButtonShadow style={{ left: `${progress}px` }} />
    </Style.Button>
  );
}
