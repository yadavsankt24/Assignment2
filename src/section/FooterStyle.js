import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;

  color:black;
  position: relative;
  bottom: 0;
  width: 93%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin:  auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
  width:90%;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 30px;
color: #8D8D8D;

text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #231F20;
`;