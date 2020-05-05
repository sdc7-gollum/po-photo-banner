import React from 'react';
import { shallow, mount, render } from 'enzyme';

// Components
import PhotoBanner from '../client/components/PhotoBanner';
const wrapper = shallow(<PhotoBanner />);

describe('Temporary Dev Environment Smoke Tests', () => {
  it('Should be a jest test that ensures proper setup', () => {
    expect(true).toEqual(true);
  });

  // it('Should navigate to the sample listing page that retrieves data', async () => {
  //   wrapper.find('a').simulate('click');
  //   await Promise.resolve();
  //   expect(wrapper.find('_id')).toBe(true);
  // });
});
