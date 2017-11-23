import React from 'react'
import { shallow, mount } from 'enzyme';
import ConnectedForm, { Form } from '../form';
import configureStore from 'redux-mock-store'
import { INITIAL_STATE } from '../form-reducer';
import { setName, getName } from '../form-actions';
import { ActionTypes } from './../form-actions';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

describe('>>>Form component', () => {
    let wrapper;
    const initialState = {
        name: '',
        surname: ''
    };
    const mockStore = configureStore()
    var container;
    var store;

    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = mount(<Provider store={store}><ConnectedForm /></Provider>);
    })

    it('+++ render Form component', () => {
        expect(wrapper.find(ConnectedForm).length).toEqual(1);
    });

    it('+++ check if props match with initial store', () => {
        expect(wrapper.find(Form).prop('name')).toEqual(initialState.name);
    });

    it('+++ check action on dispatching ', () => {
        let action
        store.dispatch(getName('macika'));
        action = store.getActions()
        expect(action[0].type).toBe(ActionTypes.GET_NAME)
    });
});


// Snapshot for Home React Component
describe('>>>H O M E --- Snapshot',()=>{
    it('+++capturing Snapshot of Home', () => {
        const renderedValue =  renderer.create(<Form inputValue={10}/>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});