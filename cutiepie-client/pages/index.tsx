import axios from "axios";
import type { NextPage } from "next";
import Layout from "../src/layout";
import Header from "../src/layout/header";

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
