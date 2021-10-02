import styled from "styled-components";

const Wrapper = styled.div``;

const WrapperImage = styled.img`
  width: 600px;
`;

const Illustration = ({ url }) => {
  return (
    <Wrapper>
      <WrapperImage src={url} alt="" />
    </Wrapper>
  );
};

export default Illustration;
