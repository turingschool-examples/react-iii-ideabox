import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when addIdea is called', () => {
    const mockIdea = {
      id: 3, title: 'Sweaters for pugs', description: 'Why not?'
    };
    const expected = [{ id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' }, mockIdea];

    wrapper.instance().addIdea(mockIdea);

    expect(wrapper.state('ideas')).toEqual(expected);
  });

  it('should update state when deleteIdea is called', () => {
    const idToDelete = 2;
    const expected = [{ id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' }];

    wrapper.instance().deleteIdea(idToDelete);

    expect(wrapper.state('ideas')).toEqual(expected);
  });
});
