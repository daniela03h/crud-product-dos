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

export const CardContainerInput = styled.div`
display: flex;
flex-direction: column;
gap: 2px
`;

export const StyleInput = styled.input`
border-radius: 4px;
border: solid 1px gray;
height: 30px ;
padding: 3px;
background:#ffffffbc;
`;
export const StyleText = styled.textarea`
border-radius: 4px;
border: solid 1px gray;
height: 30px ;
padding: 3px;
background:#ffffffbc;

`;

export const ContenButon = styled.div`
display: flex;
justify-content: end;
gap: 10px;

`;

export const StyleButon = styled.button`
background-color: ${props =>props.color || "gray"};
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

}
`