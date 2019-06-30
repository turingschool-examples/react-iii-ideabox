import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form addIdea={jest.fn()} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: { name: 'title', value: 'Sweaters for pugs'} };
    const expected = 'Sweaters for pugs';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('title')).toEqual(expected);
  });

  it('should reset state when clearInputs is called', () => {
    const expected = {title: '', description: ''};

    wrapper.instance().setState({title: 'Sweaters for pugs', description: 'Why not?'});

    wrapper.instance().clearInputs();

    expect(wrapper.state()).toEqual(expected);
  });

  it('should call addIdea with correct props when submitIdea is called', () => {
    // mock Date.now()
    global.Date.now = jest.spyOn(global.Date, 'now').mockImplementation(() => 12345);

    // set up state with an idea
    const currentState = {title:'Sweaters for pugs', description: 'Because cute'};
    const mockIdea = {...currentState, id: 12345};

    wrapper.instance().setState(currentState);

    // execute submitIdea
    wrapper.instance().submitIdea({preventDefault: jest.fn()});

    // expect addIdea to be called with the mockIdea
    expect(wrapper.instance().props.addIdea).toHaveBeenCalledWith(mockIdea);
  });

  it('should call clearInputs when submitIdea is called', () => {
    wrapper.instance().clearInputs = jest.fn();
    wrapper.instance().submitIdea({preventDefault: jest.fn()});

    expect(wrapper.instance().clearInputs).toHaveBeenCalled();
  });

  it('should run handleChange when the inputs detect a change', () => {
    const mockTitleEvent = { target: { name: 'title', value: 'Sweaters for pugs'} };
    const mockDescEvent = { target: { name: 'description', value: 'because of cuteness'} };

    wrapper.instance().handleChange = jest.fn();
    wrapper.find('[name="title"]').simulate('change', mockTitleEvent);
    wrapper.find('[name="description"]').simulate('change', mockDescEvent);

    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockTitleEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockDescEvent);
  });

  it('should run submitIdea when the button is clicked', () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().submitIdea = jest.fn();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().submitIdea).toHaveBeenCalledWith(mockEvent);
  });
});
