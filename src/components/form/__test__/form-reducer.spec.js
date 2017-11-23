import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import formReducer from '../form-reducer';
import { ActionTypes } from './../form-actions';
import { INITIAL_STATE } from './../form-reducer';

describe('>>>R E D U C E R --- Test formReducer', () => {
    it('+++ Reducer for setting name', () => {
        let state = { name: 'initial name' }
        state = formReducer(state, { type: ActionTypes.SET_NAME, name: 'novo ime' })
        expect(state).toEqual({ name: 'novo ime' })
    });

    it('+++ Reducer for default behaviour', () => {
        var state = formReducer(undefined, {type: ''})
        expect(state).toEqual(INITIAL_STATE)
    });
});