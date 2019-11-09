import React from 'react';
import styles from '../styles.js';
import StarRatingComponent from 'react-star-rating-component';
import { Card, UsernameContainer, Avatar, AvatarContainer, UserNameDateDiv, UserNameATag, ReviewDate, ReviewStars, ReviewComment, PhotoInComment, ItemContainer, ItemPhoto, ItemLink } from './styled.js';

const ReviewItem = (props) => {
  var date = new Date(props.date);
  var day = date.getDate() < 10 ? `0${date.getDate()}`: `${date.getDate()}`;
  var month = props.months[date.getMonth()]
  var year = date.getFullYear();
  var dateRender = `${month} ${day}, ${year}`;

  return (
    <Card>
    <UsernameContainer >
      <Avatar src={props.avatar} />
      <AvatarContainer>
        <UserNameDateDiv >
          <UserNameATag >{props.username}</UserNameATag>
          <ReviewDate >
            {dateRender}
          </ReviewDate>
        </UserNameDateDiv>
        <ReviewStars >
          <StarRatingComponent editing={false} value={props.rating} starCount={5} starColor={'black'} emptyStarColor={'#E1E3DF'} />
        </ReviewStars>

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

      </AvatarContainer>
    </UsernameContainer>

    <ItemContainer >
      <ItemPhoto src={props.itemPhoto}></ItemPhoto>
      <ItemLink >{props.item}</ItemLink>
    </ItemContainer>


  </Card>

  )
};

export default ReviewItem;






