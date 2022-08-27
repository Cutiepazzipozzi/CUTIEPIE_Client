import axios from "axios";
import type { NextPage } from "next";
import styled from "styled-components";
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
      <span style={{ fontSize: "1em" }}>메인 페이지</span>
    </Layout>
  );
};

export default Home;
