import axios from "axios";
import type { NextPage } from "next";
import styled from "styled-components";
import Banner from "../src/components/banner/Banner";
import Layout from "../src/layout";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 200vh;
  `,
};

const Home: NextPage = () => {
  // axios
  //   .get("http://localhost:8080/products/list")
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => console.log(error));
  return (
    <Layout>
      <Banner
        imageUrls={[
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220819/0de0903f2dc7d1279d1141eac66b559f.jpg",
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220803/7f20b6fded648cf3d9b2c9436c41812a.jpg",
          "https://fromheadtotoe.kr/web/upload/NNEditor/20220826/f19fd9dd54100e3ff548f0f3cf166985.png",
        ]}
      />
      <span style={{ fontSize: "1em" }}>메인 페이지</span>
    </Layout>
  );
};

export default Home;
