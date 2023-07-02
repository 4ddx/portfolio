import React from "react";
import { styled } from "styled-components";
import {
  Section,
  Container,
  Left,
  Dot,
  HistoryContainer,
  ListItems,
  List,
  DescTitle,
  Degree,
  Date,
  Ed,
  Right,
  Title,
  About,
  Line,
  P,
} from "./styles";

function Who() {
  return (
    <Section id="About">
      <Container>
        <Left>
          <Dot>&nbsp;</Dot>
          <HistoryContainer>
            <Line></Line>
            <ListItems>
              <List>
                <DescTitle>• Education:</DescTitle>
                <Degree>
                  B.Tech (C.S.E)
                  <Date>• 2023 - 2027</Date>
                </Degree>
                <Ed>• R.V.C.E Bengaluru, India</Ed>
              </List>
              <List>
                <DescTitle>• Work History:</DescTitle>
                <Degree>
                  Front-End Blockchain Developer
                  <Date>• Feb 2023 - Present</Date>
                </Degree>
                <Ed>• Wega(Misfits.Inc)</Ed>
              </List>
            </ListItems>
          </HistoryContainer>
        </Left>
        <Right>
          <Title>About Me</Title>
          <About>
            Passionate Front End Developer.
            <br />
            I like to craft solid and
            <br />
            scalable products with solid user experiences.
          </About>
          <P></P>
        </Right>
      </Container>
    </Section>
  );
}

export default Who;
