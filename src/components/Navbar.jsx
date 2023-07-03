import React from "react";
import { styled } from "styled-components";
const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1400px;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    padding-top: 5px;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px;
  align-items: center;
`;
const Logo = styled.img`
  height: 80px;
  width: 130px;
  cursor: pointer;
`;
const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Icon = styled.img`
  height: 20px;
  width: 20px;
`;
const Icons = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: row;
  align-items: center;
`;
const Button = styled.button`
  cursor: pointer;
  background: #fa5a75;
  color: white;
  font-weight: 500;
  border-radius: 2px;
  font-size: 16px;
  padding: 10px;
  border: none;
`;

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem
              onClick={() => {
                const anchor = document.querySelector("#About");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              About Me
            </ListItem>
            <ListItem
              onClick={() => {
                const anchor = document.querySelector("#Work");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Works
            </ListItem>
            <ListItem
              onClick={() => {
                const anchor = document.querySelector("#Contact");
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Contact
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button
            onClick={() => {
              const anchor = document.querySelector("#Contact");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Let's Talk!
          </Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
