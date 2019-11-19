import {Node} from '../components/TreeList';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure,shallow} from 'enzyme';

configure({adapter: new Adapter()});

test('Test Node component rendering', () => {
    debugger;
    const props = {
        nodeData: {
            APPRJ: {
                value: "APPRJ",
                children: [],
                parent: {},
                isParent: false,
                checked: false,
                expanded: true,
                collapseIcon: true
            }
        }
       
    };
const wrapper = shallow(<Node nodeData={props.nodeData}/>);
const div = wrapper.find('.inside_input');
    expect(div).toEqual({});
});