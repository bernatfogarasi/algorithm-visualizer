import styled from "styled-components";
import Paper from "components/Paper";

const Title = styled.div`
  font-size: 35px;
  margin: 0px 0px 40px 30px;
`;

const SubTitle = styled.div`
  font-size: 20px;
  margin: 10px 30px;
`;

const PageTemplate = ({ title, subTitle, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Paper>{children}</Paper>
    </>
  );
};

export default PageTemplate;
