import React from 'react';
import styles from '../styles.js';
import ReviewItem from './ReviewItem.jsx';
import ModalView from './ModalView.jsx';
import StarRatingComponent from 'react-star-rating-component';
import { ReviewContainer, ReviewHeader, ReviewH4, ReviewH4Span, Card, MoreButton, MoreButtonSpan } from './styled.js';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHTML: {
        photoInComment: 'test',
      }
    };
  }

  handleModalView({ avatar, date, item, username, itemPhoto, photoInComment, comment, rating }) {
    let modalView = {
      date, item, username, itemPhoto, photoInComment, comment, avatar, rating
    };

    let modal = document.querySelector('#modalContainer');


    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';

    let body = document.querySelector('body');
    body.style.overflow = 'hidden';

    let modalOverlay = document.querySelector('#modalOverlay');

    setTimeout(() => {
      // modalOverlay.style.removeProperty('opacity');
      modalOverlay.style.opacity = 1;
    }, 0);

    modalOverlay.style.display = 'block';
    modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

    this.setState({
      modalHTML: modalView,
    });
  }

  handleExitModalView() {
    let modal = document.querySelector('#modalContainer');
    modal.style.display = 'none';
    let modalOverlay = document.querySelector('#modalOverlay');

    modalOverlay.style.display = 'none';
    modalOverlay.style.backgroundColor = '';
    modalOverlay.style.opacity = '0';

    let body = document.querySelector('body');
    body.style.overflow = 'scroll';
  }

  render() {
    return (
      <ReviewContainer >
        <ReviewHeader >
          <ReviewH4 >
            Reviews
            <ReviewH4Span>
              <StarRatingComponent editing={false} value={this.props.ratings} starCount={5} starColor={'black'} emptyStarColor={'#E1E3DF'} />
            </ReviewH4Span>
            ({this.props.reviews})
          </ReviewH4>
        </ReviewHeader>

        <Card id='card'>
          <ModalView
            handleExitModalView={this.handleExitModalView.bind(this)}
            modalHTML={this.state.modalHTML}
          />


          {this.props.comments.map((ele) =>
            <ReviewItem
              key={ele.id_comment}
              avatar={ele.reviewer_avatar}
              comment={ele.reviewer_comment}
              date={ele.created_date}
              item={ele.reviewer_item}
              username={ele.reviewer_name}
              itemPhoto={ele.reviewer_itemphoto}
              photoInComment={ele.reviewer_photocomment}
              rating={ele.reviewer_rating}
              months={this.props.months}
              handleModalView={this.handleModalView.bind(this)}
            />
          )}
          <MoreButton id="more-btn" onClick={this.props.getComments}>
            <MoreButtonSpan>+ More</MoreButtonSpan>
          </MoreButton>
        </Card>

      </ReviewContainer>
    );
  }
}



export default ReviewList;