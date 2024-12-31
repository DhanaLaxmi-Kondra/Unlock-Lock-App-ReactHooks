// Style your elements here
import style from 'styled-components'

export const MainContainer = style.div`
min-height:100vh;
background-color:black;
display:flex;
flex-direction:column;
justify-content:center
align-items:center;
`
export const Image = style.img`
margin-top:50px;
height:400px;
width:330px;
align-self:center;`

export const Para = style.p`
font-family:"Roboto";
color:white;
align-self:center;`

export const Button = style.button`
background-color:#06b6d4;
height:40px;
width:60px;
color:white;
align-self:center;`
