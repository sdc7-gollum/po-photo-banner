/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import $ from 'jquery';

// Components
import PhotoBanner from '../client/components/PhotoBanner';
import PhotoGrid from '../client/components/PhotoGrid';

describe('PhotoBanner Test Suite', () => {
  test('initial state of PhotoBanner', () => {
    const wrapper = mount(<PhotoBanner />);
    expect(wrapper.state('roomId')).toBe('5' || '10');
    expect(wrapper.state('photos')).toHaveLength(0);
  });

  test('rendering of PhotoGrid upon available photos', () => {
    const wrapper = mount(<PhotoBanner />);
    const photos = [
      { url: 'https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg' },
      { url: 'https://i.pinimg.com/474x/47/14/f2/4714f2e99aef38240636d17e976f1672.jpg' },
    ];

    expect(wrapper.state('photos')).toHaveLength(0);
    expect(wrapper.find('PhotoGrid')).toHaveLength(0);
    wrapper.setState({ photos });
    expect(wrapper.state('photos')).toHaveLength(2);
    expect(wrapper.find('PhotoGrid')).toHaveLength(1);
  });

  // In-progress spy
  test('links trigger an ajax call to getPhotosById', () => {
    const wrapper = shallow(<PhotoBanner />);
    const spy = jest.spyOn($, 'ajax');
    wrapper.instance().getPhotosById();
    expect(spy).toBeCalledWith({
      method: 'GET',
      url: '/api/photos/5',
    });
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('PhotoGrid Test Suite', () => {
  test('should not find text that is not on the page', () => {
    const photos = [{ url: 'https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg' }];
    const wrapper = shallow(<PhotoGrid photos={photos} />);
    expect(wrapper.find('text that is not on the page')).toHaveLength(0);
  });

  test('should load at max 5 photos', () => {
    const photos = [
      { url: 'https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg' },
      { url: 'https://i.pinimg.com/474x/47/14/f2/4714f2e99aef38240636d17e976f1672.jpg' },
      { url: 'https://38.media.tumblr.com/d71937fbafee6034223655109b7ef290/tumblr_n344pe5wDU1siudrpo4_1280.jpg' },
      { url: 'https://i1.wp.com/www.campus.sg/wp-content/uploads/2016/04/cute-japanese-sweets-wagashi-2__605.jpg?fit=605%2C403&ssl=1&w=640' },
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0BHsoTFWFamidPYmgJeKVyFkWqyQfOFDipGyq6jopL5mRvsbO&usqp=CAU' },
      { url: 'https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg' },
    ];
    const wrapper = shallow(<PhotoGrid photos={photos} />);
    expect(wrapper.find('img')).toHaveLength(5);
  });
});
