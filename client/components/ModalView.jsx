import React from 'react';
import styles from './../styles.js';
import StarRatingComponent from 'react-star-rating-component';
import { ModalOverlay, Modal, ModalWrapper, ModalImgContainer, ModalImg, ModalReviewContainer, UserModalContainer, Avatar, ModalUserName, ModalDate, ModalReviewStars, ModalCommentContainer, ModalComment, ModalItemContainer, ModalImageContainer, ModalItemImage, ModalItemLink, ModalExitButton } from './styled.js';

const ModalView = (props) => (
  <ModalOverlay id="modalOverlay" >
    <Modal id="modalContainer" >
      <ModalWrapper>
        <ModalImgContainer>
          <ModalImg src={props.modalHTML.photoInComment}></ModalImg>
        </ModalImgContainer>
        <ModalReviewContainer>
          <UserModalContainer >
            <Avatar src={props.modalHTML.avatar}></Avatar>
            <ModalUserName href='#'>{props.modalHTML.username}</ModalUserName>
            <ModalDate>
              {props.modalHTML.date}
            </ModalDate>

          </UserModalContainer>

          <ModalReviewStars>
            <StarRatingComponent editing={false} value={props.modalHTML.rating} starCount={5} starColor='black' emptyStarColor='#E1E3DF' />
          </ModalReviewStars>
          <ModalCommentContainer>
            <ModalComment> {props.modalHTML.comment}</ModalComment>
          </ModalCommentContainer>

          <ModalItemContainer>
            <ModalImageContainer>
              <ModalItemImage src={props.modalHTML.itemPhoto}></ModalItemImage>
            </ModalImageContainer>
            <ModalItemLink >{props.modalHTML.item}</ModalItemLink>
          </ModalItemContainer>

          <ModalExitButton onClick={props.handleExitModalView}>X</ModalExitButton>


        </ModalReviewContainer>
      </ModalWrapper>

    </Modal>
  </ModalOverlay >
);


export default ModalView;