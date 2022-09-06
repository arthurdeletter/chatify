import styled from "styled-components";

type ContainerProps = {
  css?: object;
};

export const Container = styled.div<ContainerProps>(({ css }) => ({
  width: "90%",
  maxWidth: "70rem",
  margin: "0 auto",
  height: "fit-content",
  ...css,
}));
