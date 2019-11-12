import React from 'react';
import styles from '../styles.js';
import StarRatingComponent from 'react-star-rating-component';
import { Card, UsernameContainer, Avatar, AvatarContainer, UserNameDateDiv, UserNameATag, ReviewDate, ReviewStars, ReviewComment, PhotoInComment, ItemContainer, ItemPhoto, ItemLink } from './styled.js';

const ReviewItem = ({comment, handleModalView}) => {
  return (
    <h1>ok review</h1>
  )
};

export default ReviewItem;


/*
{
      (props.photoInComment !== 'none'
        ? <ReviewComment> {props.comment}
          <br />
          <PhotoInComment
            onClick={() => props.handleModalView(props)}
            src={props.photoInComment} />
        </ReviewComment>

        : <ReviewComment> {props.comment} </ReviewComment>)
    }
    */




