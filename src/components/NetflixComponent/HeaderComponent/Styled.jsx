import styled from "styled-components";
import HeaderBG from "../../../assets/NetflixClonePics/headerbg.jpg";

export const HeaderCon = styled.section`
  height: 900px;
  text-align: center;
  background: url(${HeaderBG});
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
  font-family: Arial, Helvetica, sans-serif;
  border: 8px solid #222;
  background-position: center;
  background-size: cover;
`;
export const NavCon = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;

  svg {
    width: 150px;
    fill: red;
  }
`;
export const Menu = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 0rem 0.5rem;
  }

  a {
    text-decoration: none;
  }
`;

export const LangBtn = styled.a`
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  color: red;
`;

export const SinginBtn = styled.a`
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px;
  background-color: #e40514;
  color: white;
`;

export const BoxContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 700px;
`;
