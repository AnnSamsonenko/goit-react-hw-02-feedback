import { Divide, Container, Title } from "./SectionStyled";

export const Section = ({ title, children }) => {
  return (
    <Divide>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Divide>
  );
};
