import React from 'react';
import styles from './../styles.js';
import StarRatingComponent from 'react-star-rating-component';
import { Card, UsernameContainer, Avatar, AvatarContainer, UserNameDateDiv, UserNameATag, ReviewDate, ReviewStars, ItemContainer, ItemPhoto, ItemLink } from './styled.js';
import ReviewItem from './ReviewItem.jsx';

const ReviewList = ({comments, months, handleModalView}) => {

  var ItemList = comments.map((item, index) => {
    var date = new Date(item.created_date);
    var day = date.getDate() < 10 ? `0${date.getDate()}`: `${date.getDate()}`;
    var month = months[date.getMonth()]
    var year = date.getFullYear();
    var dateRender = `${month} ${day}, ${year}`;

    return (
      <Card>
        <UsernameContainer >
          <Avatar src={item.reviewer_avatar} />
          <AvatarContainer>
            <UserNameDateDiv >
              <UserNameATag> {item.reviewer_name} </UserNameATag>
              <ReviewDate >
                {dateRender}
              </ReviewDate>
            </UserNameDateDiv>
            <ReviewStars >
              <StarRatingComponent editing={false} value={item.reviewer_rating} starCount={5} starColor={'black'} emptyStarColor={'#E1E3DF'} />
            </ReviewStars>

            <ReviewItem
            comment={item}
            months={months}
            handleModalView={handleModalView}
            />

          </AvatarContainer>
        </UsernameContainer>

        <ItemContainer >
          <ItemPhoto src={item.reviewer_itemphoto} />
          <ItemLink href='#'>{item.reviewer_item}</ItemLink>
        </ItemContainer>
      </Card>
    )
  })

  return (
    <div>{ItemList}</div>
  )
};

export default ReviewList;