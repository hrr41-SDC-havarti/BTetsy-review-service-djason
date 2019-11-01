import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.jsx';
import ReviewList from './ReviewList.jsx';
import ReviewItem from './ReviewItem.jsx';




describe('<App />', () => {
  test('It renders a review list', () => {

    const wrapper = shallow(<App />);

    expect(wrapper.text()).toEqual('<ReviewList />');
    expect(wrapper.state().ratings).toEqual(0);

  });
});



describe('<ReviewList />', () => {
  test('It should render review list and its props ', () => {
    //create a comments prop so it has something to map over and an id so it doesnt throw errors
    let comments = [{
      id: 1,
    }];

    const wrapper = shallow(<ReviewList reviews={200} comments={comments} />);

    expect(wrapper.find('.reviewsNumber').text()).toBe('Reviews ***** (200)');
    expect(wrapper.find('#card').length).toBe(1);

  });

  test('It should render review list and its props ', () => {
    let comments = [{
      'id': 0,
      'reviewerName': 'ReadyShard',
      'reviewerAvatar': 'https://randomuser.me/api/portraits/women/19.jpg',
      'reviewerComment': 'Love, love, love!!!',
      'reviewerPhotoInComment': 'none',
      'reviewerItem': ' Halloween Costume Womens, Skeleton Costume, Cosplay Costume Women, Halloween Costume Women, Halloween Costumes, Adult Halloween Costumes',
      'reviewerItemPhoto': 'https://i.etsystatic.com/9275559/r/il/dd0d6c/1015377788/il_794xN.1015377788_ld71.jpg',
      'rating': 1,
      'reviewerDate': 'Jan 3, 2018'
    },
    {
      'id': 1,
      'reviewerName': 'Kiwildomor',
      'reviewerAvatar': 'https://randomuser.me/api/portraits/men/23.jpg',
      'reviewerComment': 'Looks lovely love the colour',
      'reviewerPhotoInComment': 'none',
      'reviewerItem': 'Personalized Leather Journal Fire-Branded Custom Stamp Full Grain Leather Wrap Stone Journal Handmade in Portland',
      'reviewerItemPhoto': 'https://i.etsystatic.com/16539733/r/il/5ef76f/1954212280/il_794xN.1954212280_kc1z.jpg',
      'rating': 3,
      'reviewerDate': 'Sept 6, 2017'
    },
    {
      'id': 2,
      'reviewerName': 'Guitarist',
      'reviewerAvatar': 'https://randomuser.me/api/portraits/women/25.jpg',
      'reviewerComment': 'Super cute!!!',
      'reviewerPhotoInComment': 'none',
      'reviewerItem': 'Personalized Metal Clock - Family Name Clock - Housewarming gift- Wedding gift - Wall decor - Personalized Gift - Personalized Metal Sign',
      'reviewerItemPhoto': 'https://i.etsystatic.com/9702901/r/il/71f13d/1890436685/il_fullxfull.1890436685_ft44.jpg',
      'rating': 3,
      'reviewerDate': 'Oct 8, 2018'
    },
    {
      'id': 3,
      'reviewerName': 'Hellogyra',
      'reviewerAvatar': 'https://randomuser.me/api/portraits/men/27.jpg',
      'reviewerComment': 'So happy I found this!!! It’s just perfect!!',
      'reviewerPhotoInComment': 'https://i.etsystatic.com/iap/9aa24d/1810186391/iap_640x640.1810186391_f2vuu4wa.jpg?version=0',
      'reviewerItem': 'Dog Collar - Buffalo Plaid Cotton Fabric Dog Collar - Christmas Dog Collar - Black/Red Check - Fashion Dog Collar - Antique Silver Hardware',
      'reviewerItemPhoto': 'https://i.etsystatic.com/10435242/r/il/d0f7d2/1785907057/il_fullxfull.1785907057_8pra.jpg',
      'rating': 4,
      'reviewerDate': 'Feb 6, 2018'
    },
    {
      'id': 4,
      'reviewerName': 'Blayborg',
      'reviewerAvatar': 'https://randomuser.me/api/portraits/women/22.jpg',
      'reviewerComment': 'Love, love, love!!!',
      'reviewerPhotoInComment': 'none',
      'reviewerItem': 'Large Gaming Mouse Pad - Carbon Guns – extra large mousepad for gaming - Anti Fray Edge - Anti Slip Back - 3 Year Warranty - 70 x 30 cm',
      'reviewerItemPhoto': 'https://i.etsystatic.com/14755457/r/il/a71fe8/1529481228/il_794xN.1529481228_st0w.jpg',
      'rating': 5,
      'reviewerDate': 'Nov 28, 2018'
    },
    {
      'id': 5,
      'reviewerName': 'ArticleClown',
      'reviewerAvatar': 'https://randomuser.me/api/portraits/men/24.jpg',
      'reviewerComment': 'Love it! Great quality and colors. I will be ordering more!',
      'reviewerPhotoInComment': 'none',
      'reviewerItem': 'Concrete USB flash drive 16gb. Gift for men. Brutal gift. Unique flash drive. Personalized flash drive. Concrete USB',
      'reviewerItemPhoto': 'https://i.etsystatic.com/14368309/r/il/16b9e3/1231635458/il_794xN.1231635458_ooso.jpg',
      'rating': 2,
      'reviewerDate': 'Sept 30, 2018'
    },
    {
      'id': 6,
      'reviewerName': 'Jrnbithead',
      'reviewerAvatar': 'https://randomuser.me/api/portraits/women/18.jpg',
      'reviewerComment': 'Nice product and shipped quickly!',
      'reviewerPhotoInComment': 'none',
      'reviewerItem': 'Pastel Triangle Wood Pattern Print Desk Mat w/ Custom Monogram - 3 Sizes - Office Desk Accessory - Extended Mouse Pad',
      'reviewerItemPhoto': 'https://i.etsystatic.com/9838368/r/il/6684c4/1130157188/il_794xN.1130157188_qw2j.jpg',
      'rating': 3,
      'reviewerDate': 'Jan 6, 2017'
    }];

    const wrapper = shallow(<ReviewList comments={comments} />);

    //expect it to be 8 because it counts the button inside the div also

    expect(wrapper.find('#card').children().length).toBe(8);
    // wrapper.find('.more').simulate('click');
    // expect(wrapper.find('#card').children().length).toBe(8);
  });
});



describe('<ReviewItem /> ', () => {


  test('it should render review item and its props', () => {

    let comment = 'Hello World!';
    let date = 'July 9, 2019';

    const wrapper = shallow(<ReviewItem comment={comment} date={date} />);

    expect(wrapper.find('.comment').text()).toEqual(comment);
    expect(wrapper.find('.date').text()).toEqual(date);

  });


});