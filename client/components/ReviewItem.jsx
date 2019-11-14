import React from 'react';
import styles from './../styles.js';
import StarRatingComponent from 'react-star-rating-component';
import { Card, UsernameContainer, Avatar, AvatarContainer, UserNameDateDiv, UserNameATag, ReviewDate, ReviewStars, ReviewComment, PhotoInComment, ItemContainer, ItemPhoto, ItemLink } from './styled.js';

var displayerFunc = (comment, handleModalView) =>{
  if(comment.reviewer_photocomment !== 'none'){
    return (<ReviewComment>
      {comment.reviewer_comment}
      <PhotoInComment onClick={()=> handleModalView(comment)}/>
    </ReviewComment>)
  }else{
    return (<ReviewComment>{comment.reviewer_comment}</ReviewComment>)
  }
}

const ReviewItem = ({comment, handleModalView}) => {
  var getDisplayer = displayerFunc(comment , handleModalView)

  return (
    <div>{getDisplayer}</div>
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




