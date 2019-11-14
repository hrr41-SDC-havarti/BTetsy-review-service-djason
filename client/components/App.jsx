import React from 'react';
import ContainerReview from './ContainerReview.jsx';
import styled from 'styled-components';
import { GlobalStyle } from './styled.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      ratings: 0,
      reviews: 0,
      seller: '',
      months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
      ]
    };
  }

  componentDidMount() {
    let searchParams = new URLSearchParams(window.location.search);
    let productId = Number(searchParams.get('productId'));

    fetch(`/api/comment/${productId != 0 ? productId : 5}`)
      .then(res => res.json())
      .then( (res) => {
        let count = res.length;
        let countReview = 0;

        res.forEach((item)=>{
          countReview += item.reviewer_rating;
        })
        var rate = countReview/count;
        const obj = {
          ratings: rate,
          reviews: countReview,
          comments: res.slice(0,10),
          commentsAll: res,
          seller: 'seller name'
        };

        this.setState(state=>(obj))
      });
  }

  getAllComments() {
    var all = this.state.commentsAll
    this.setState(state=>({
      comments: all
    }));

    let moreBtn = document.querySelector('#more-btn');
    moreBtn.style.display = 'none';
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <ContainerReview
          getComments={this.getAllComments.bind(this)}
          comments={this.state.comments}
          ratings={this.state.ratings}
          reviews={this.state.reviews}
          months={this.state.months} />
      </>
    );
  }
}

export default App;