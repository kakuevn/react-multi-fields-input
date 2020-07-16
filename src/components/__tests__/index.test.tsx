import * as React from 'react';
import { shallow, mount } from 'enzyme';
import * as sinon from 'sinon';

import { Input } from '../types';
import MultiFieldsInput from '../';

describe('MultiFieldsInput', () => {
  const inputs: Inputs[] = [
    {
      type: 'number',
      maxLength: 2,
      placeholder: '00'
    },
    {
      type: 'number',
      maxLength: 2,
      placeholder: '00'
    },
    {
      type: 'number',
      maxLength: 2,
      placeholder: '00'
    }
  ];

  it('Renders correctly', () => {
    const component = shallow(
      <MultiFieldsInput
        label="Sort Code"
        name="sortCode"
        inputs={inputs}
        value="202020"
        onBlur={() => {}}
        onChange={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('Calls onBlur and onChange and sends the correct value', () => {
    const spyBlur = sinon.spy();
    const spyChange = sinon.spy();
    const component = mount(
      <MultiFieldsInput
        label="Sort Code"
        name="sortCode"
        inputs={inputs}
        value="202122"
        onBlur={spyBlur}
        onChange={spyChange}
      />
    );
    const instance = component.instance();

    component
      .find('input[name="sortCode0"]')
      .simulate('change', { target: { name: 'sortCode0', value: '10' } });

    expect(spyChange.calledOnce).toBe(true);
    component.update();

    expect(component.find('input[name="sortCode0"]').prop('value')).toBe('10');
    // @ts-ignore
    expect(instance.getValue()).toBe('102122');
  });

  it('Error class is activated when not valid', () => {
    const component = mount(
      <MultiFieldsInput
        label="Sort Code"
        name="sortCode"
        inputs={inputs}
        isValid={false}
        value="202020"
        onBlur={() => {}}
        onChange={() => {}}
      />
    );
    expect(component.find('input.rmfi-error').length).toBe(3);
  });
});
