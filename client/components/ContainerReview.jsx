import React from 'react';
import styles from './../styles.js';
import ReviewList from './ReviewList.jsx';
import ModalView from './ModalView.jsx';
import StarRatingComponent from 'react-star-rating-component';
import { ReviewContainer, ReviewHeader, ReviewH4, ReviewH4Span, Card, MoreButton, MoreButtonSpan } from './styled.js';

class ContainerReview extends React.Component {
  constructor(props) {
    super(props);
    console.log('Props Container -> ', props)
    this.state = {
      modalHTML: {
        photoInComment: 'test',
      }
    };
  }

  handleModalView(comment) {
    // avatar, date, item, username, itemPhoto, photoInComment, comment, rating

    var date = comment.created_date;
    var item = comment.reviewer_item;
    var username = comment.reviewer_name;
    var itemPhoto = comment.reviewer_itemphoto;
    var photoInComment = comment.reviewer_photocomment;
    var comment = comment.reviewer_comment;
    var avatar = comment.reviewer_avatar;
    var rating = comment.reviewer_rating;
    var idComment = comment.id_comment;

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
              <StarRatingComponent name='STAR' editing={false} value={this.props.ratings} starCount={5} starColor={'black'} emptyStarColor={'#E1E3DF'} />
            </ReviewH4Span>
            ({this.props.reviews})
          </ReviewH4>
        </ReviewHeader>

        <Card id='card'>
          <ModalView
            handleExitModalView={this.handleExitModalView.bind(this)}
            modalHTML={this.state.modalHTML}
          />

          <ReviewList
          comments={this.props.comments}
          months={this.props.months}
          handleModalView={this.handleModalView.bind(this)}/>

          <MoreButton id="more-btn" onClick={this.props.getComments}>
            <MoreButtonSpan>+ More</MoreButtonSpan>
          </MoreButton>
        </Card>

      </ReviewContainer>
    );
  }
}



export default ContainerReview;