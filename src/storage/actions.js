import { bindActionCreators } from 'redux';

import types from './types'

const changeFirstName = (name) => {
        return {
            type: types.ACTION_CHANGE_FIRST_NAME,
            payload: name
        };
    },
    changeSecondName = (name) => {
        return {
            type: types.ACTION_CHANGE_SECOND_NAME,
            payload: name
        };
    };

const stateToProps = (state) => {
        let { firstName, secondName } = state;
        return { firstName, secondName };
    },
    actionsToProps = (dispatch) => {
        return {
            changeFirstName: bindActionCreators(changeFirstName, dispatch),
            changeSecondName: bindActionCreators(changeSecondName, dispatch)
        };
    };


export default {
    changeFirstName, changeSecondName, stateToProps, actionsToProps
};