import Image from "next/image";
import styled from "styled-components";
import Layout from "../src/components/layout";
import { FlexBox, Margin } from "../src/components/share/ui";

const Style = {
  Container: styled.div`
    width: 100vw;
    height: fit-content;
    min-height: calc(100vh - 245px);
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Form: styled.form`
    width: 1100px;
    height: fit-content;
  `,
};

export default function Join() {
  return (
    <Layout>
      <Style.Container>
        <Margin direction="column" size={20} />
        <Margin direction="column" size={15} />
        <Style.Form>
          <FlexBox
            justifyContents="space-between"
            width={1100}
            style={{ borderBottom: "1px solid lightgrey", padding: "5px" }}
            alignItems={"center"}
          >
            <h3 style={{ padding: "0", margin: "0" }}>기본정보</h3>
            <span style={{ fontSize: "13px", fontWeight: "bold" }}>
              💡필수 입력사항
            </span>
          </FlexBox>
        </Style.Form>
      </Style.Container>
    </Layout>
  );
}
