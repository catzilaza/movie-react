import styled from "styled-components";

export const FooterContainer = styled.section`
  height: 600px;
  background-color: #000;
  border: 4px solid #222;
  color: #737373;
  padding: 1rem 8rem;
`;
//list-style: none;
export const FooterList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 1.5rem 0; 

    ul {
        list-style: none;

        li {
            margin: 1rem 0;

            a {
                font-size: 1rem;
                color: #737373;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`

