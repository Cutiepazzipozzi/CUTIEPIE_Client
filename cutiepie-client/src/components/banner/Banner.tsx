import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

type Props = {
  imageUrls: string[];
};

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 580px;
    display: flex;
    justify-content: center;
  `,
  ImageWrapper: styled.div`
    width: 1200px;
    height: 580px;
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
  BannerImage: styled.img`
    width: 1200px;
    height: 580px;
    opacity: ${(props) => props.about};
    transition-property: opacity;
    transition-duration: ${(props) => (props.about === "1.0" ? `0.6s` : `0s`)};
  `,
  SelectImageArea: styled.div`
    width: max-content;
    height: 4px;
    position: absolute;
    left: 50%;
    bottom: 20px;
    display: flex;
    gap: 3px;
  `,
  SelectImageButton: styled.div`
    cursor: pointer;
    width: 14px;
    height: 4px;
    background-color: lightgrey;
  `,
  SelectedImageButton: styled.div`
    cursor: pointer;
    width: 30px;
    height: 4px;
    background-color: lightgrey;
    overflow: hidden;
    position: relative;
  `,
  SelectedImageButtonShadow: styled.div`
    cursor: pointer;
    width: 30px;
    height: 4px;
    background-color: #555555;
    position: absolute;
    left: -30px;
  `,
};

export default function Banner({ imageUrls }: Props) {
  const [isBannerHovered, setIsBannerHovered] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>(
    imageUrls ? imageUrls[0] : ""
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [opacity, setOpacity] = useState<"0.6" | "1.0">("1.0");
  const [imageInterv, setImageInterv] = useState<NodeJS.Timer>();
  const [buttonInterv, setButtonInterv] = useState<NodeJS.Timer>();
  const [progress, setProgress] = useState<number>(-30);

  const handleOpacity = () => {
    setOpacity("0.6");
    setTimeout(() => {
      setOpacity("1.0");
    }, 50);
  };
  const handleClickPrev = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(imageUrls.length - 1);
      handleOpacity();
      return;
    }
    setCurrentImageIndex((current) => current - 1);
    handleOpacity();
  };
  const handleClickNext = () => {
    if (currentImageIndex === imageUrls.length - 1) {
      setCurrentImageIndex(0);
      handleOpacity();
      return;
    }
    setCurrentImageIndex((current) => current + 1);
    handleOpacity();
  };
  useEffect(() => {
    setCurrentImage(imageUrls[currentImageIndex]);
    setProgress(-30);
    clearInterval(buttonInterv);
    setButtonInterv(
      setInterval(() => {
        setProgress((current) => (current + 0.25 > 0 ? -30 : current + 0.25));
      }, 41)
    );
  }, [currentImageIndex]);
  useEffect(() => {
    setImageInterv(
      setInterval(() => {
        setCurrentImageIndex((current) =>
          current + 1 === imageUrls.length ? 0 : current + 1
        );
        handleOpacity();
      }, 5000)
    );
  }, []);

  return (
    <Style.Wrapper>
      <Style.ImageWrapper
        onMouseEnter={() => {
          setIsBannerHovered(true);
          setProgress(-30);
          clearInterval(imageInterv);
          clearInterval(buttonInterv);
        }}
        onMouseLeave={() => {
          setIsBannerHovered(false);
          setImageInterv(
            setInterval(() => {
              setCurrentImageIndex((current) =>
                current + 1 === imageUrls.length ? 0 : current + 1
              );
              handleOpacity();
            }, 5000)
          );
          setButtonInterv(
            setInterval(() => {
              setProgress((current) =>
                current + 0.25 > 0 ? -30 : current + 0.25
              );
            }, 41)
          );
        }}
      >
        {currentImage && (
          <Style.BannerImage
            src={currentImage}
            alt="BannerImage"
            about={opacity}
          />
        )}

        {isBannerHovered && imageUrls !== undefined && imageUrls.length >= 2 ? (
          <>
            <Style.BannerButton
              style={{ left: "-19px" }}
              onClick={handleClickPrev}
            >
              <Image width={34} height={34} src="/left-arrow.svg" alt="prev" />
            </Style.BannerButton>
            <Style.BannerButton
              style={{ right: "-19px" }}
              onClick={handleClickNext}
            >
              <Image width={34} height={34} src="/right-arrow.svg" alt="next" />
            </Style.BannerButton>
          </>
        ) : (
          <></>
        )}
        {imageUrls !== undefined && imageUrls.length >= 2 ? (
          <Style.SelectImageArea>
            {imageUrls.map((url, index) => {
              if (index === currentImageIndex) {
                return (
                  <Style.SelectedImageButton
                    key={v4()}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      handleOpacity();
                    }}
                  >
                    <Style.SelectedImageButtonShadow
                      style={{ left: `${progress}px` }}
                    />
                  </Style.SelectedImageButton>
                );
              }
              return (
                <Style.SelectImageButton
                  key={v4()}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    handleOpacity();
                  }}
                />
              );
            })}
          </Style.SelectImageArea>
        ) : (
          <></>
        )}
      </Style.ImageWrapper>
    </Style.Wrapper>
  );
}
