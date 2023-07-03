import React from "react";
import { styled } from "styled-components";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 15px;
`;
const Title = styled.h1`
  font-size: 25px;
  color: #ffc4ce;
`;
const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  max-width: 500px;
  border: none;
  border-radius: 20px;
  background-color: #333376;
  padding: 20px;
  &:hover {
    padding: 25px;
    transition: 0.9s;
  }
`;
const Desc = styled.p`
  color: #d18f8f;
  font-size: 19px;
  font-weight: 400;
`;
const Works = () => {
  return (
    <Section id="Work">
      <Container>
        <h1 style={{ color: "beige" }}>Projects:</h1>
        <Projects>
          <Project>
            <Title>Chat App</Title>
            <Desc>A simple Chat App using Firebase</Desc>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                width: "100%",
                gap: "1rem",
                padding: "2px",
              }}
            >
              <a
                href="https://go-chat-2.vercel.app/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "500",
                  padding: "4px",
                }}
              >
                Demo
              </a>
              <a
                href="https://github.com/4ddx/chat-app-netlify"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "500",
                  padding: "4px",
                }}
              >
                Code
              </a>
            </div>
          </Project>
          <Project>
            <Title>Todo List</Title>
            <Desc>A list to keep track of all Todos (TypeScript)</Desc>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                width: "100%",
                gap: "1rem",
                padding: "2px",
              }}
            >
              <a
                href="https://todo-list-4ddx.vercel.app"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "500",
                  padding: "4px",
                }}
              >
                Demo
              </a>
              <a
                href="https://github.com/4ddx/todoList"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "500",
                  padding: "4px",
                }}
              >
                Code
              </a>
            </div>
          </Project>
          <Project>
            <Title>Weather App</Title>
            <Desc>A simple Weather App (OpenWeatherAPI)</Desc>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                width: "100%",
                gap: "1rem",
                padding: "2px",
              }}
            >
              <a
                href="https://weather-app-4ddx.vercel.app"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "500",
                  padding: "4px",
                }}
              >
                Demo
              </a>
              <a
                href="https://github.com/4ddx/weather-app"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "500",
                  padding: "4px",
                }}
              >
                Code
              </a>
            </div>
          </Project>
        </Projects>
      </Container>
    </Section>
  );
};

export default Works;
