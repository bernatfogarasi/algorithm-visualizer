import React from "react";
import PageTemplate from "components/PageTemplate";
import Content from "./Content";

const Sorting = () => {
  const title = "Sorting algorithms";
  return (
    <>
      <PageTemplate title={title} subTitle="">
        <Content />
      </PageTemplate>
    </>
  );
};

export default Sorting;
