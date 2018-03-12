import React from "react";
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import { shallow } from 'enzyme';
import expect from 'expect';
import App from "./App";
import TFNGenerator from "./components/TFNGenerator";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('should render one <TFNGenerator /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(TFNGenerator)).to.have.length(2);
    });
});