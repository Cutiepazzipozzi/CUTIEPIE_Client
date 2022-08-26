import axios from "axios";
import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../src/layout";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: auto;
    padding-top: 245px;
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
      <Style.Wrapper>
        <span style={{ fontSize: "1em" }}>메인 페이지</span>
      </Style.Wrapper>
    </Layout>
  );
};

export default Home;
