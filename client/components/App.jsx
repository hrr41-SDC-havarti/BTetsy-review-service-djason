import React from 'react';
import ReviewList from './ReviewList.jsx';
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

    };
  }

  componentDidMount() {
    let searchParams = new URLSearchParams(window.location.search);
    let productId = Number(searchParams.get('productId'));

    fetch(`/api/seller/${productId || 5}`)
      .then(res => res.json())
      .then(res => {
        const { ratings, reviews, comments, seller, } = res;

        //only get 4 comments
        this.setState({ ratings, reviews, comments: comments.slice(0, 4), seller });
      });
  }


  getAllComments() {
    fetch('/api/seller/5')
      .then(res => res.json())
      .then(res => {
        const { comments } = res;

        //get all the rest of the comments once the more button is clicked
        this.setState({ comments });
      });

    let moreBtn = document.querySelector('#more-btn');
    moreBtn.style.display = 'none';
  }


  render() {
    return (
      <>
        <GlobalStyle />
        <ReviewList getComments={this.getAllComments.bind(this)} comments={this.state.comments} ratings={this.state.ratings} reviews={this.state.reviews} />

      </>


    );
  }
}

export default App;