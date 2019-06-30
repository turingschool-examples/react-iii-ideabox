import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('renders the title of the idea in <h1> tags', () => {
    const wrapper = shallow(<Card title="Bananas" />);
    const title = <h3>Bananas</h3>;

    expect(wrapper.contains(title)).toEqual(true);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Card title='bananas' description='b a n a n a s' id={3} deleteIdea={jest.fn()} />)

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the favorited snapshot', () => {
    const wrapper = shallow(<Card title='bananas' description='b a n a n a s' id={3} deleteIdea={jest.fn()} isFavorited={true} />)

    expect(wrapper).toMatchSnapshot();
  });

  it('should call the deleteIdea prop when clicked', () => {
    const deleteIdeaMock = jest.fn();

    const wrapper = shallow(
      <Card
        title="Bananas"
        description="blah blah bloop"
        id={7}
        deleteIdea={deleteIdeaMock}
      />
    );

    wrapper.find('button').simulate('click');

    expect(deleteIdeaMock).toBeCalledWith(7);
  });
});
