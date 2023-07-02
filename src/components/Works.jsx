import React from "react";
import { styled } from "styled-components";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 30%;
`;
const ListItem = styled.li`
  font-size: 100px;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px whitesmoke;
  position: relative;
  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;
const data = ["Web Dev", "Blockchain Dev", "Wordpress Dev", "Social Media"];
const Works = () => {
  return (
    <Section id="Work">
      <Container>
        <Left>
          <List>
            {data.map((item) => {
              return (
                <ListItem key={item} text={item}>
                  {item}
                </ListItem>
              );
            })}
          </List>
        </Left>
      </Container>
    </Section>
  );
};

export default Works;
