import React from 'react';

import {shallow} from 'enzyme';
import Main from "./Main";

const wrapper = shallow(<Main/>);

const props = {};

describe("Main Router ", () => {

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

})
