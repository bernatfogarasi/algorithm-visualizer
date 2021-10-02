import React from "react";
import PageTemplate from "components/PageTemplate";
import Content from "./Content";

const Pathfinding = () => {
  const title = "Pathfinding algorithms";
  return (
    <>
      <PageTemplate title={title} subTitle="">
        <Content />
      </PageTemplate>
    </>
  );
};

export default Pathfinding;
