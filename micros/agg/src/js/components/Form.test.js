import React from 'react';
import { shallow } from 'enzyme';

// Components
import Form from './Form';

function setup() {
  const props = {
    imgPath: './abijith.jpg',
  };
  const wrapper = shallow(<Form />);
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});