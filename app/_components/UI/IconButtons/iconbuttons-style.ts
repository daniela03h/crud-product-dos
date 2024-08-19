import styled from "styled-components";

export const ContenButon = styled.div`
display: flex;
justify-content: end;
gap: 10px;
`;

export const StyleButon = styled.button`
background-color: ${props => props.color || "gray"};
width: 70px;
height: 30px;
border: none;
border-radius: 5px;
font-weight: 800;
;

&:hover{
cursor: pointer;
opacity: 0.8;
color:black;
}`;