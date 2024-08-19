import styled from "styled-components";

export const StyleContent = styled.main`
display: flex;
justify-content: center;
`;

export const Titulo = styled.h1`
text-align: center;
font-weight: 600;
`
export const Descripcion = styled.p`
text-align: center;
`

export const CardForm = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
box-shadow: 0 0 3px  gray;
margin-top: 50px;
width: 600px;
padding: 10px;
box-sizing: border-box;
background-color: #f6f8ee;
`;

export const Formulario = styled.form`
display: flex;
flex-direction: column;
gap: 7px
`;
