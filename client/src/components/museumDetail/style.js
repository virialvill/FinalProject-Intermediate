import styled from "styled-components";

export const Boxdetail = styled.div `   
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 5px;
    padding: 10px;
    box-shadow: 0 0 20px 8px #d0d0d0;
    border-radius: 5px;
    img{
        width: 100%;
    }
    
`

export const Detailone = styled.div `
 grid-area: 1 / 3 / 6 / 5;
 
`
export const Detailtwo = styled.div `
grid-area: 1 / 1 / 2 / 3;
text-align: center;

`

export const Detailthree = styled.div `
grid-area: 2 / 1 / 3 / 3;
text-align: justify;
padding-right: 20px;
`
export const DetailFour = styled.div `
grid-area: 3 / 1 / 4 / 2; 
`

export const Detailhome = styled.div `
grid-area: 4 / 1 / 5 / 3;
align-self:end;
a {
    color: #D9AD77;
  }
`
export const Delete = styled.div`
    grid-area: 4 / 3 / 4 / 3;
    justify-self: end;
`