import type { NextPage } from "next";
import styled from "styled-components";
import Banner from "../src/components/feature/banner/Banner";
import Layout from "../src/components/layout";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 200vh;
  `,
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner
        imageUrls={[
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220819/0de0903f2dc7d1279d1141eac66b559f.jpg",
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220803/7f20b6fded648cf3d9b2c9436c41812a.jpg",
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220826/f19fd9dd54100e3ff548f0f3cf166985.png",
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220802/d528c3eaf8adbc72a0434cdd5d338261.jpg",
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220818/59f0b0f0a7876b875dd6713f4b257ef6.jpg",
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220825/e760b6893a554197d9bda670fd00ff12.jpg",
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220825/45da022be96c727d0d398a6d1d10b7e7.jpg",
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220826/cd05e2d63bd08cd5d5888b3b12fe9f0e.jpg",
        ]}
      />
      <span style={{ fontSize: "1em" }}>메인 페이지</span>
    </Layout>
  );
};

export default Home;
