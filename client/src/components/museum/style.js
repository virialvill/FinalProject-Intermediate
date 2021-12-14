import styled from "styled-components";

export const Box = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 5px;
    padding: 10px;
    box-shadow: 0 0 20px 8px #d0d0d0;
    border-radius: 5px;
    justify-items: center;

    img{
        width: 100%;
    }

`

export const Oneitem = styled.div `
    grid-area: 1 / 3 / 6 / 4;
    
`
export const Twoitem = styled.div `
   grid-area: 1 / 1 / 2 / 3;
   a {
    color: #D9AD77;
  }
`
export const Threeitem = styled.div`
    grid-area: 2 / 1 / 3 / 3;
    text-align: justify;
   
`
export const Fouritem = styled.div`
    grid-area: 3 / 1 / 4 / 2; 

    
   
`

export const Fiveitem = styled.div`
    grid-area: 3 / 2 / 4 / 3; 
    h3{
        
    }
`

export const Sixitem = styled.div`
    grid-area: 4 / 1 / 5 / 3;
   
`

