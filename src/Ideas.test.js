import React from 'react';
import { shallow } from 'enzyme';
import Ideas from './Ideas';

describe('Ideas', () => {
  let wrapper;
  let mockIdeas;
  let mockDeleteIdea;

  beforeEach(() => {
    mockIdeas = [
      {id: 1, title: 'fanny pack for holding throwing knives', description: 'on-the-go deadliness'}
    ];
    mockDeleteIdea = jest.fn();
    wrapper = shallow(<Ideas ideas={mockIdeas} deleteIdea={mockDeleteIdea} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
