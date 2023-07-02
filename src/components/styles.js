import { styled } from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 1600px;
  scroll-snap-align: center;
  border-bottom: 1px solid black;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 40%;
  padding-left: 40px;
  border-right: 1px solid slategrey;
  height: 100vh;
  gap: 1rem;
  flex-direction: column;
  margin-right: -40px;
`;
export const Right = styled.div`
  display: flex;
  padding-left: 100px;
  flex-direction: column;
  opacity: 0.8;
  padding: 10px;
  position: relative;
`;
export const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
`;
export const What = styled.div`
  font-size: 20px;
  color: #f55c75;
  font-weight: 500;
`;
export const P = styled.p`
  display: flex;
  color: #8597a9;
  font-size: 18px;
  font-weight: 500;
`;
export const Img = styled.img`
  width: 600px;
  height: 500px;
  object-fit: contain;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 20;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
export const About = styled.div`
  text-align: start;
  font-size: 24px;
  color: slategray;
  font-weight: 600;
`;
export const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: white;
  background-color: white;
`;
export const Line = styled.div`
  height: 500px;
  margin-left: 6px;
  width: 2px;
  color: white;
  background-color: white;
`;
export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
export const ListItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style-type: none;
`;
export const List = styled.li``;
export const DescTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #4f5964;
  padding: 4px;
`;
export const Degree = styled.div`
  display: flex;
  flex-direction: column;
  color: #de6075;
  font-size: 15px;
  padding: 15px;
  padding-bottom: 0px;
`;
export const Date = styled.div`
  display: flex;
  color: white;
  font-size: 14px;
  padding-left: 1px;
`;
export const Ed = styled.div`
  color: gray;
  font-size: 14px;
  padding: 15px;
`;