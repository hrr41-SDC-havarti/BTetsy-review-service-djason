import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: Graphik Webfont, -apple-system, BlinkMacSystemFont, Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
}
 `;


export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-weight: 500;
  height: 790px;

`;

export const ReviewHeader = styled.div`
  align-items: center;
`;

export const ReviewH4 = styled.h4`
display: flex;
`;

export const ReviewH4Span = styled.span`
margin-left: 5px;
margin-right: 5px;

`;

export const Card = styled.div`
  margin-bottom: 30px;
`;

export const UsernameContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 14px;
`;

export const Avatar = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;


export const AvatarContainer = styled.div`
display: flex;
flex-direction: column;
padding-top: 5px;
padding-left: 8px;
`;

export const UserNameDateDiv = styled.div`
display: flex;
`;


export const UserNameATag = styled.a`
color: rgb(34, 34, 34);
&:hover {
  color: grey;
}
`;


export const ReviewDate = styled.div`
padding-left: 10px;
`;


export const ReviewStars = styled.h2`
margin: 0px;
padding-top: 5px;
`;

export const ReviewComment = styled.p`
color: rgb(34, 34, 34);
margin-top: 0px;
font-size: 14px;
line-height: 24px;
`;

export const PhotoInComment = styled.img`
height: 300px;
width: 300px;
cursor: pointer;
`;


export const ItemContainer = styled.div`
display: flex;
flex-direction: row;
margin-left: 58px;
font-size: 14px;
margin-top: 10px;
`;

export const ItemPhoto = styled.img`
width: 75px;
height: 75px
`;


export const ItemLink = styled.a`
padding-top: 25px;
padding-left: 10px;
text-overflow: ellipsis;
width: 370px;
overflow: hidden;
white-space: nowrap;
font-size: 12px;
font-weight: 300;
line-height: 1.5;
cursor: pointer;
&:hover{
  text-decoration-line: underline;
}
`;


export const ModalOverlay = styled.div`
display: none;
width: 100%;
height: 100%;
position: fixed;
z-index: 10;
top: 0px;
left: 0px;
opacity: 0;
transition: opacity 0.5s linear;
`;

export const Modal = styled.div`
display: none;
position: fixed;
left: 50%;
top: 22%;
transform: translate(-50%, -50%);
max-height: 656.672px;
max-width: 1200px;
height: 40%;
width: 80%;
z-index: 10;
`;

export const ModalWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: stretch;
`;

export const ModalImgContainer = styled.div`
display: flex;
order: 1;
`;

export const ModalImg = styled.img`
min-width: 600px;
height: auto;
width: auto;
max-width: 100%;
max-height: 656.672px;

`;

export const ModalReviewContainer = styled.div`
width: auto;
order: 2;
background-color: white;
flex: 1 0 auto;
`;

export const UserModalContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 14px;
padding-top: 36px;
padding-left: 30px;
padding-right: 12px;
`;

export const ModalUserName = styled.a`
color: rgb(34, 34, 34);
padding-top: 15px;
padding-left: 15px;
`;

export const ModalDate = styled.div`
padding-top: 15px;
padding-left: 15px;
`;

export const ModalReviewStars = styled.h3`
padding-left: 35px;
`;

export const ModalCommentContainer = styled.div`
max-height: 318px;
max-width: 600px;
`;

export const ModalComment = styled.p`
padding-left: 35px;
font-size: 15px;
padding-right: 35px;
line-height: 1.4;
`;

export const ModalItemContainer = styled.div`
display: flex;
position: relative;
top: 40%;
left: 10%;
width: 480px;
`;

export const ModalImageContainer = styled.div`
width: 142px;
height: 142px;
`;

export const ModalItemImage = styled.img`
width: 150px;
height: 142px;
cursor: pointer;
`;

export const ModalItemLink = styled.a`
padding-top: 60px;
padding-left: 10px;
text-overflow: ellipsis;
width: 370px;
overflow: hidden;
white-space: nowrap;
font-size: 14px;
color: #222;
font-weight: 300;
line-height: 1.4;
cursor: pointer;
&:hover{
  text-decoration-line: underline;
}
`;

export const ModalExitButton = styled.button`
right: 0;
top: 0;
position: absolute;
float: right;
color: #222;
z-index: 10;
height: 40px;
width: 40px;
background-color: white;
border: 0px;
font-size: 24px
cursor: pointer;
`;

export const MoreButton = styled.button`
background-color: rgba(0, 0, 0, 0);
box-sizing: border-box;
border: 0px;
cursor: pointer;
border-bottom-color: rgb(34, 34, 34);
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
text-decoration-line: underline;
text-align: center;
align-items: flex-start;
font-weight: 500px;
text-decoration-color: rgb(34, 34, 34);
`;

export const MoreButtonSpan = styled.span`
color: rgb(34, 34, 34);
font-weight: 500;
font-size: 14px;
line-height: 19.6px;
`;